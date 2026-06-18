import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Phone, Printer, Mail, MapPin } from "lucide-react";
import { offices } from "@/lib/data";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Comage Container Lines Texas Inc. for air and ocean cargo services, rates and carriers. Offices in Texas, New Jersey, Canada and China.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="For more information about how we can help with your air and ocean cargo needs — including services, rates and carriers — reach out to our team."
        image="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          <Reveal direction="right">
            <p className="eyebrow">Send us a message</p>
            <h2 className="heading mt-3 text-3xl">We'll respond promptly</h2>
            <p className="mt-3 leading-relaxed text-ink/65">
              Complete the form below to receive a timely response from Comage
              Container Lines — typically within 12 hours for air freight and 24
              hours for ocean freight inquiries.
            </p>
            <div className="mt-8 rounded-3xl border border-ink/[0.06] bg-white p-7 shadow-soft sm:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="left">
            <p className="eyebrow">Our office</p>
            <h2 className="heading mt-3 text-3xl">Location</h2>
            <div className="mt-8 space-y-5">
              {offices.map((o) => (
                <div
                  key={o.country}
                  className={`rounded-2xl border p-6 shadow-soft ${
                    o.primary
                      ? "border-brand-200 bg-brand-50/50"
                      : "border-ink/[0.06] bg-white"
                  }`}
                >
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <MapPin className="h-5 w-5 text-brand-600" />
                    {o.country}
                    {o.primary && (
                      <span className="ml-1 rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                        Head US Office
                      </span>
                    )}
                  </h3>
                  <address className="mt-3 not-italic leading-relaxed text-sm text-ink/65">
                    {o.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <div className="mt-3 grid gap-1.5 text-sm">
                    <a
                      href={`tel:${o.tel.replace(/[^\d]/g, "")}`}
                      className="inline-flex items-center gap-2 text-ink/70 hover:text-brand-600"
                    >
                      <Phone className="h-4 w-4" /> {o.tel}
                    </a>
                    <span className="inline-flex items-center gap-2 text-ink/55">
                      <Printer className="h-4 w-4" /> {o.fax}
                    </span>
                    <a
                      href={`mailto:${o.email}`}
                      className="inline-flex items-center gap-2 text-ink/70 hover:text-brand-600"
                    >
                      <Mail className="h-4 w-4" /> {o.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
