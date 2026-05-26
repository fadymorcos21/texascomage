import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";

export const metadata = {
  title: "Global Services",
  description:
    "Air freight, ocean freight, cross-border trucking, customs clearance, cargo insurance, packaging and storage — a full range of global logistics services.",
};

export default function GlobalServices() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Global Services"
        subtitle="A wide range of shipping, transportation and logistical support — services that translate into highly-competitive rates, access to carriers, and peace of mind for global clients."
        image="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Global Services" }]}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-ink/70">
                Comage Container Lines built its reputation on excellence. Based on our
                wealth of knowledge and experience in global transportation management,
                our technical staff offers clients complimentary advice on all aspects
                of manufacturing, packaging and shipping.
              </p>
            </div>
          </Reveal>

          {/* Service quick-nav */}
          <Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  <ServiceIcon name={s.icon} className="h-4 w-4" />
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed services */}
      <div className="pb-8">
        {services.map((s, idx) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-28 py-16 ${idx % 2 ? "bg-sand" : "bg-white"}`}
          >
            <div className="container-x grid items-center gap-12 lg:grid-cols-2">
              <Reveal
                direction={idx % 2 ? "left" : "right"}
                className={idx % 2 ? "lg:order-2" : ""}
              >
                <div className="overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={800}
                    className="h-[400px] w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal direction={idx % 2 ? "right" : "left"}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="heading text-3xl">{s.title}</h2>
                </div>
                <p className="mt-5 leading-relaxed text-ink/65">{s.short}</p>
                <div className="mt-7 space-y-5">
                  {s.points.map((p) => (
                    <div key={p.name} className="border-l-2 border-brand-200 pl-5">
                      <h3 className="font-display font-bold text-ink">{p.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CTA
        title="Contact Comage for a free consultation"
        body="Reduce costs and increase efficiency on your logistical and transportation needs. Our team is ready to design a solution for your cargo."
      />
    </>
  );
}
