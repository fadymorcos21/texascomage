import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ArrowLeft } from "lucide-react";
import { tradingConditions } from "@/lib/data";

const sections = [
  {
    h: "1. Definitions & Application",
    p: "These conditions apply to all services provided by the Company. In these conditions, \"Company\" means Comage Container Lines Texas Inc., and \"Customer\" means any person at whose request or on whose behalf the Company undertakes any business or provides advice, information or services.",
  },
  {
    h: "2. The Company as Agent",
    p: "The Company acts as an agent except where it expressly accepts liability as a carrier or warehouseman. The Company reserves to itself full liberty as to the means, route and procedure to be followed in the performance of any service.",
  },
  {
    h: "3. Customer Responsibilities & Warranties",
    p: "The Customer warrants that the description and particulars of any goods furnished are full and accurate, and that the goods are properly and sufficiently packed, marked and prepared for the transportation and handling reasonably to be expected.",
  },
  {
    h: "4. Quotations & Charges",
    p: "Quotations are given on the basis of immediate acceptance and are subject to withdrawal or revision. Quotations are valid only for the specific scope of services and conditions prevailing at the time they are given.",
  },
  {
    h: "5. Liability & Limitation",
    p: "The liability of the Company, however arising and notwithstanding that the cause of loss or damage be unexplained, shall not exceed the limits set out in the applicable standard conditions and governing international conventions.",
  },
  {
    h: "6. Insurance",
    p: "No insurance will be effected except upon express written instructions given by the Customer, and all insurances effected by the Company are subject to the usual exceptions and conditions of the policies of the insurers.",
  },
  {
    h: "7. Lien & Governing Law",
    p: "The Company shall have a general and particular lien on all goods and documents relating to goods in its possession. These conditions and any act or contract to which they apply shall be governed by the applicable laws of the jurisdiction in which the Company's office is located.",
  },
];

export function generateStaticParams() {
  return tradingConditions.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const item = tradingConditions.find((t) => t.slug === params.slug);
  return { title: item ? item.title : "Trading Conditions" };
}

export default function TradingConditionPage({ params }) {
  const item = tradingConditions.find((t) => t.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow="Trading Conditions"
        title={item.title}
        subtitle={item.summary}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
        crumbs={[
          { label: "Trading Conditions", href: "/trading-conditions" },
          { label: item.title },
        ]}
      />

      <section className="section">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-sm leading-relaxed text-ink/70">
              The summary below outlines the principal terms of the {item.title}. For a
              certified copy of the full conditions applicable to your contract, please{" "}
              <Link href="/contact-us" className="font-semibold text-brand-700 underline">
                contact our office
              </Link>
              .
            </div>
          </Reveal>

          <div className="mt-10 space-y-9">
            {sections.map((s, idx) => (
              <Reveal key={s.h} delay={(idx % 3) * 0.05}>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">{s.h}</h2>
                  <p className="mt-2.5 leading-relaxed text-ink/70">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/trading-conditions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" /> All trading conditions
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
