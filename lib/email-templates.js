// Email templates for the Comage Container Lines Texas Inc. contact form.
// Plain HTML with inline styles (max email-client compatibility) + text fallbacks.

const BRAND = "#9d1c20";
const INK = "#04162d";
const MUTED = "#5b6b80";
const SITE_URL = "https://comagetexas.com";

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const nl2br = (s = "") => esc(s).replace(/\r?\n/g, "<br />");

function shell(innerHtml, preheader = "") {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Comage Container Lines Texas Inc.</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f4f6;font-family:Arial,Helvetica,sans-serif;color:${INK};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(12,22,34,0.08);">
            <tr>
              <td style="background:${INK};padding:22px 30px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td>
                      <div style="font-size:22px;font-weight:800;letter-spacing:-0.5px;color:#ffffff;line-height:1;">
                        <span style="color:#ffffff;">Comage</span>
                        <span style="color:${BRAND};">.</span>
                      </div>
                      <div style="font-size:12px;color:rgba(255,255,255,0.65);margin-top:4px;letter-spacing:0.4px;">Container Lines Texas Inc.</div>
                    </td>
                    <td align="right" style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:0.4px;text-transform:uppercase;">
                      Air &amp; Ocean Cargo
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            ${innerHtml}
            <tr>
              <td style="background:#fafafb;padding:20px 30px;border-top:1px solid #eceef2;font-size:12px;color:${MUTED};line-height:1.6;">
                Comage Container Lines Texas Inc. &middot; 403 East Dallas Street, Fresno, Texas 77545<br />
                <a href="mailto:sales@shipcomage.com" style="color:${MUTED};text-decoration:none;">sales@shipcomage.com</a>
                &middot;
                <a href="${SITE_URL}" style="color:${MUTED};text-decoration:none;">comagetexas.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// -----------------------------------------------------------------------------
// Email 1 — to admin (djkochath@shipcomage.com)
// -----------------------------------------------------------------------------
export function adminInquiryEmail({ name, email, subject, message, submittedAt }) {
  const ts = submittedAt || new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const rows = [
    ["Name", esc(name)],
    ["Email", `<a href="mailto:${esc(email)}" style="color:${BRAND};text-decoration:none;font-weight:600;">${esc(email)}</a>`],
    subject ? ["Subject", esc(subject)] : null,
    ["Received", esc(ts)],
  ].filter(Boolean);

  const rowsHtml = rows
    .map(
      ([label, value]) => `
              <tr>
                <td style="padding:10px 0;width:110px;font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:${MUTED};vertical-align:top;">${label}</td>
                <td style="padding:10px 0;font-size:14px;color:${INK};vertical-align:top;">${value}</td>
              </tr>`
    )
    .join("");

  const inner = `
            <tr>
              <td style="padding:34px 30px 8px;">
                <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:${BRAND};text-transform:uppercase;">New inquiry</div>
                <h1 style="margin:8px 0 6px;font-size:24px;font-weight:800;color:${INK};letter-spacing:-0.4px;">
                  ${esc(name)} just submitted the contact form
                </h1>
                <p style="margin:0;font-size:14px;color:${MUTED};line-height:1.55;">
                  Reply to this email to respond directly to the customer.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 30px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #eceef2;margin-top:18px;">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 30px 30px;">
                <div style="font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:${MUTED};margin-bottom:8px;">Message</div>
                <div style="background:#fafafb;border:1px solid #eceef2;border-radius:10px;padding:18px 20px;font-size:14px;line-height:1.6;color:${INK};white-space:pre-wrap;">
${nl2br(message)}
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
                  <tr>
                    <td style="background:${BRAND};border-radius:999px;">
                      <a href="mailto:${esc(email)}?subject=${encodeURIComponent("Re: " + (subject || "Your inquiry to Comage Texas"))}" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.3px;">
                        Reply to ${esc(name.split(" ")[0] || "customer")}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`;

  const text = [
    `New inquiry — Comage Container Lines Texas Inc.`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    subject ? `Subject: ${subject}` : null,
    `Received: ${ts}`,
    ``,
    `Message:`,
    message,
    ``,
    `Reply directly to ${email} to respond to the customer.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return {
    subject: `New inquiry from ${name}${subject ? " — " + subject : ""}`,
    html: shell(inner, `${name} (${email}) submitted the contact form`),
    text,
  };
}

// -----------------------------------------------------------------------------
// Email 2 — confirmation to the customer
// -----------------------------------------------------------------------------
export function customerConfirmationEmail({ name, subject, message }) {
  const firstName = (name || "").trim().split(/\s+/)[0] || "there";

  const inner = `
            <tr>
              <td style="padding:34px 30px 6px;">
                <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:${BRAND};text-transform:uppercase;">Inquiry received</div>
                <h1 style="margin:8px 0 6px;font-size:24px;font-weight:800;color:${INK};letter-spacing:-0.4px;">
                  Thanks, ${esc(firstName)} — we're on it.
                </h1>
                <p style="margin:14px 0 0;font-size:15px;color:${INK};line-height:1.65;">
                  We've received your message and a member of the Comage Container Lines
                  Texas team will respond shortly. Our usual response time is
                  <strong>within 12&ndash;24 hours</strong> for air and ocean freight
                  inquiries.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 30px 6px;">
                <div style="font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:${MUTED};margin-bottom:8px;">A copy of what you sent</div>
                ${
                  subject
                    ? `<div style="font-size:14px;color:${INK};margin:0 0 6px;"><strong>Subject:</strong> ${esc(subject)}</div>`
                    : ""
                }
                <div style="background:#fafafb;border:1px solid #eceef2;border-radius:10px;padding:18px 20px;font-size:14px;line-height:1.6;color:${INK};white-space:pre-wrap;">
${nl2br(message)}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 30px 6px;">
                <div style="font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:${MUTED};margin-bottom:10px;">In the meantime</div>
                <p style="margin:0;font-size:14px;color:${INK};line-height:1.65;">
                  If anything changes about your shipment or you'd like to add
                  details, simply reply to this email &mdash; your message will
                  reach the same team member who handles your inquiry.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 30px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="background:${BRAND};border-radius:999px;">
                      <a href="${SITE_URL}/global-services" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.3px;">
                        Explore our services
                      </a>
                    </td>
                    <td style="padding-left:10px;">
                      <a href="${SITE_URL}/air-cargo-tracking" style="display:inline-block;padding:12px 22px;color:${INK};font-size:14px;font-weight:700;text-decoration:none;border:1px solid #d8dce4;border-radius:999px;">
                        Track air cargo
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`;

  const text = [
    `Thanks, ${firstName} — we're on it.`,
    ``,
    `We've received your message and a member of the Comage Container Lines Texas team will respond shortly. Our usual response time is within 12-24 hours.`,
    ``,
    `A copy of what you sent:`,
    subject ? `Subject: ${subject}` : null,
    ``,
    message,
    ``,
    `If anything changes about your shipment or you'd like to add details, simply reply to this email — your message will reach the same team member who handles your inquiry.`,
    ``,
    `— Comage Container Lines Texas Inc.`,
    `403 East Dallas Street, Fresno, Texas 77545`,
    `${SITE_URL}`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return {
    subject: "We've received your inquiry — Comage Container Lines Texas",
    html: shell(inner, "Thanks — we've received your inquiry and will respond shortly."),
    text,
  };
}
