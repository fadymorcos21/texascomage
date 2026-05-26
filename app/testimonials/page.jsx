import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials",
  description:
    "Clients continue to give Comage their highest ratings of 100 per cent for satisfaction. Read what they have to say.",
};

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="In their words"
        title="Testimonials"
        subtitle="We take great pride when clients comment about our worldwide transportation and logistical services."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-ink/70">
                At Comage, we take great pride when clients comment about our excellent
                worldwide transportation and logistical services. Based on informal
                surveys — we contact every account after every job —{" "}
                <span className="font-semibold text-brand-600">
                  clients continue to give us their highest ratings of 100 per cent for
                  satisfaction
                </span>
                .
              </p>
            </div>
          </Reveal>

          <div className="mt-14 columns-1 gap-6 md:columns-2 [&>*]:mb-6">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={(idx % 2) * 0.08}>
                <figure className="break-inside-avoid rounded-2xl border border-ink/[0.06] bg-white p-8 shadow-soft">
                  <Quote className="h-9 w-9 text-brand-100" />
                  <blockquote className="mt-3 leading-relaxed text-ink/75">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-ink/5 pt-4">
                    <p className="font-display font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-ink/60">
                      {t.role ? `${t.role}, ` : ""}
                      <span className="font-semibold text-brand-600">{t.company}</span>
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
