"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const initialForm = { name: "", email: "", subject: "", message: "", company: "" };

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [form, setForm] = useState(initialForm);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setError(
          data?.error ||
            "We couldn't send your message. Please try again or call our office."
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError(
        "Network error — please check your connection and try again."
      );
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-100 bg-brand-50/60 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-600" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-ink/65">
          Thank you, {form.name || "there"}. A member of the Comage team will respond
          to you shortly — typically within 12–24 hours. Check your inbox for a
          confirmation.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
            setError("");
          }}
          className="btn-outline mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" required>
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update}
            className="field"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Your Email" required>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={update}
            className="field"
            placeholder="jane@company.com"
          />
        </Field>
      </div>
      <Field label="Subject">
        <input
          name="subject"
          value={form.subject}
          onChange={update}
          className="field"
          placeholder="Air freight quote — Houston to Shanghai"
        />
      </Field>
      <Field label="Your Message" required>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={update}
          rows={5}
          className="field resize-none"
          placeholder="Tell us about your cargo, origin, destination and timeline…"
        />
      </Field>

      {/* Honeypot — must stay empty. Hidden from real users + screen readers. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
        <label>
          Company (leave blank)
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={update}
          />
        </label>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full !py-3.5 text-base disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <style jsx>{`
        :global(.field) {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid rgba(12, 22, 34, 0.12);
          background: #fff;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          color: #0c1622;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.field:focus) {
          outline: none;
          border-color: #9d1c20;
          box-shadow: 0 0 0 3px rgba(157, 28, 32, 0.12);
        }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink/75">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
