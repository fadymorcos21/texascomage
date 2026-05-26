import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ExternalLink } from "lucide-react";
import { accreditations } from "@/lib/data";

export const metadata = {
  title: "Accreditations",
  description:
    "Comage Container Lines is a registered, approved carrier with IATA, FIATA, FMC, Transport Canada, NCBFAA, CIFFA and more.",
};

export default function Accreditations() {
  return (
    <>
      <PageHero
        eyebrow="Trust & compliance"
        title="Accreditations"
        subtitle="Comage Container Lines is registered as an approved carrier and member of the leading transportation and trade organizations."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
        crumbs={[
          { label: "About Our Company", href: "/about-us" },
          { label: "Accreditations" },
        ]}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-ink/70">
              Comage Container Lines is registered as an approved carrier by — and an
              active member of — these respected industry organizations:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((a, idx) => (
              <Reveal key={a.name} delay={(idx % 3) * 0.07}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-extrabold text-brand-600">
                      {a.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-ink/30 transition-colors group-hover:text-brand-600" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{a.full}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Comage will help you reduce costs and increase efficiencies"
        body="For your transportation and logistical needs, partner with an accredited carrier you can rely on."
      />
    </>
  );
}
