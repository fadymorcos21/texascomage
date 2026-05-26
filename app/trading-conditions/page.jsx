import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ArrowRight, ScrollText } from "lucide-react";
import { tradingConditions } from "@/lib/data";

export const metadata = {
  title: "Trading Conditions",
  description:
    "The standard trading, warehouse and bill of lading conditions under which Comage Container Lines Texas Inc. provides its services.",
};

export default function TradingConditions() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Trading Conditions"
        subtitle="All services are provided subject to the following standard conditions. Please review the documents that apply to your shipment."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Trading Conditions" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {tradingConditions.map((t, idx) => (
              <Reveal key={t.slug} delay={(idx % 2) * 0.08}>
                <Link
                  href={`/trading-conditions/${t.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/[0.06] bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <ScrollText className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-ink">
                    {t.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                    {t.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Read conditions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
