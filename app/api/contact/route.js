import { Resend } from "resend";
import {
  adminInquiryEmail,
  customerConfirmationEmail,
} from "@/lib/email-templates";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// All addresses that should receive the admin inquiry notification.
// Override with a comma-separated list in CONTACT_ADMIN_EMAIL.
const DEFAULT_ADMIN_RECIPIENTS = [
  "djkochath@shipcomage.com",
  "sales@comagetexas.com",
  "fadymorcos22@gmail.com",
];
const ADMIN_RECIPIENTS = (
  process.env.CONTACT_ADMIN_EMAIL || DEFAULT_ADMIN_RECIPIENTS.join(",")
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// The single address the customer's confirmation email replies to.
// Keeps customer replies going to the primary inbox, not test addresses.
const CUSTOMER_REPLY_TO =
  process.env.CONTACT_CUSTOMER_REPLY_TO || "djkochath@shipcomage.com";

const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL ||
  "Comage Container Lines Texas <noreply@comagetexas.com>";

const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const trim = (v, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // Honeypot — if a bot fills the hidden "company" field, silently accept.
  if (typeof payload?.company === "string" && payload.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = trim(payload?.name, 120);
  const email = trim(payload?.email, 200);
  const subject = trim(payload?.subject, 200);
  const message = trim(payload?.message, 5000);

  if (!name || !isEmail(email) || !message) {
    return Response.json(
      {
        ok: false,
        error: "Please provide your name, a valid email, and a message.",
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return Response.json(
      {
        ok: false,
        error:
          "The email service is not configured on the server. Please try again later or call our office.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const admin = adminInquiryEmail({ name, email, subject, message });
  const customer = customerConfirmationEmail({ name, subject, message });

  try {
    // 1) Notify the Comage team — Reply-To set to the customer so a plain
    //    reply goes straight to them.
    const adminSend = await resend.emails.send({
      from: FROM_ADDRESS,
      to: ADMIN_RECIPIENTS,
      reply_to: email,
      subject: admin.subject,
      html: admin.html,
      text: admin.text,
    });

    if (adminSend.error) {
      console.error("[contact] admin email failed:", adminSend.error);
      return Response.json(
        {
          ok: false,
          error:
            "We couldn't deliver your message right now. Please try again in a moment, or call our office.",
        },
        { status: 502 }
      );
    }

    // 2) Confirmation to the customer. If this fails we still treat the
    //    submission as successful, because the team got the inquiry.
    const customerSend = await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      reply_to: CUSTOMER_REPLY_TO,
      subject: customer.subject,
      html: customer.html,
      text: customer.text,
    });

    if (customerSend.error) {
      console.error(
        "[contact] customer confirmation failed (admin email did send):",
        customerSend.error
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return Response.json(
      {
        ok: false,
        error: "Something went wrong on our end. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
