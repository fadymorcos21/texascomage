import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { CheckCircle2 } from "lucide-react";
import { industries, benefits } from "@/lib/data";

export const metadata = {
  title: "Clients & Benefits",
  description:
    "As a worldwide transportation and logistics company, Comage serves diversified industries with customized, cost-saving cargo services.",
};

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Industries & advantages"
        title="Clients & Benefits"
        subtitle="We work closely with industry leaders who appreciate the high value of our customized services — from fragile merchandise to dangerous goods."
        image="https://images.unsplash.com/photo-1542228262-3d663b306a53?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Clients & Benefits" }]}
      />

      {/* Industries */}
      <section className="section">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="eyebrow">Industries We Serve</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              Serving practically every sector of the global economy
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              As a worldwide transportation and logistics company, Comage Container
              Lines provides services for diversified industries. We work closely with
              the leaders in those industries who understand and appreciate the high
              value of our customized services in moving their products.
            </p>
            <div className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {industries.map((i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                  <span className="text-sm text-ink/75">{i}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="grid gap-5">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Logistics truck"
                  width={1200}
                  height={700}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80"
                  alt="Air cargo loading"
                  width={1200}
                  height={700}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-sand">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Client Benefits</p>
              <h2 className="heading mt-3 text-3xl sm:text-4xl">
                We simplify the shipping process for clients
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">
                Comage offers important benefits that streamline the cargo-handling
                process and take the complexity out of processing international
                shipments.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, idx) => (
              <Reveal key={b} delay={(idx % 3) * 0.08}>
                <div className="card h-full">
                  <span className="font-display text-3xl font-extrabold text-brand-200">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 leading-relaxed text-ink/75">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
