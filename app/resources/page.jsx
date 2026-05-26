import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Link from "next/link";
import { ExternalLink, FileText, ArrowRight } from "lucide-react";
import { resourceLinks } from "@/lib/data";

export const metadata = {
  title: "Resources",
  description:
    "Helpful references and downloadable documents to manage your global transportation needs by sea or by air.",
};

const documents = [
  { label: "Commercial Invoice (CI)", note: "Standard commercial invoice template" },
  { label: "Certificate of Country/Origin (COC)", note: "Certificate of origin template" },
  { label: "Commercial Packing List", note: "Packing list template" },
  { label: "Dangerous Goods Declaration (DGD)", note: "DG declaration template" },
];

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="For your reference"
        title="Resources"
        subtitle="Important resources and links to help manage your global transportation needs — by sea or by air. We welcome your inquiries."
        image="https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Resources" }]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="eyebrow">Reference Links</p>
            <h2 className="heading mt-3 text-2xl sm:text-3xl">Useful external resources</h2>
            <div className="mt-7 space-y-3">
              {resourceLinks.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-ink/[0.06] bg-white px-5 py-4 shadow-soft transition-colors hover:border-brand-200"
                >
                  <span className="font-medium text-ink/80 group-hover:text-brand-700">
                    {r.label}
                  </span>
                  <ExternalLink className="h-4 w-4 text-ink/30 group-hover:text-brand-600" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left">
            <p className="eyebrow">Documents</p>
            <h2 className="heading mt-3 text-2xl sm:text-3xl">Shipping document templates</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {documents.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col rounded-xl border border-ink/[0.06] bg-white p-5 shadow-soft"
                >
                  <FileText className="h-8 w-8 text-brand-600" />
                  <h3 className="mt-3 font-display font-bold text-ink">{d.label}</h3>
                  <p className="mt-1 text-xs text-ink/55">{d.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-sand p-6">
              <h3 className="font-display font-bold text-ink">Looking for trading conditions?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Review the standard trading, warehouse and bill of lading conditions
                under which we provide our services.
              </p>
              <Link
                href="/trading-conditions"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View Trading Conditions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
