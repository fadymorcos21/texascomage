import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { stats } from "@/lib/data";

export const metadata = {
  title: "About Our Company",
  description:
    "Comage Container Lines Texas Inc. — the U.S. operation bringing global markets closer with more than two decades of international shipping experience.",
};

const blocks = [
  {
    title: "Dedicated hubs and operational staff",
    body: "Our dedicated hubs and worldwide operating staff offer professional consultation whenever or wherever you need advice. We take a full-service approach to managing your cargo shipping needs — locally, nationally or internationally. Whether helping you receive goods or ship goods to your markets, Comage provides professional cargo services, convenience and peace of mind.",
  },
  {
    title: "Investing in our clients",
    body: "With more than two decades of international experience in worldwide shipping services, Comage started as a non-vessel common carrier (NVOCC). Based in Texas, the company has expanded its offerings to include a full complement of ocean and air freight services for U.S. importers and exporters. We invest in infrastructure, technology and resources to ensure service excellence.",
  },
  {
    title: "The Comage advantage",
    body: "Whether by air or by ocean, Comage offers the full complement of supply chain services — access to worldwide markets, global connections through international affiliates and flexibility in services or pricing. As demands change and grow, Comage has the expertise, people, facilities, equipment and global connections to match the toughest transportation needs.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Our Company"
        subtitle="Comage Container Lines Texas Inc. is the United States operation of Comage Container Lines — bringing global markets closer to American business."
        image="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "About Our Company" }]}
      />

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/stock5.png"
                alt="Comage Container Lines — global shipping operations"
                width={1448}
                height={1086}
                className="h-[500px] w-full object-cover"
                priority
              />
            </div>
          </Reveal>
          <Reveal direction="left">
            <p className="eyebrow">Comage Container Lines</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              Bringing global markets closer to you
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Whether transporting cargo by air or by sea, Comage Container Lines brings
              global markets closer to you. We use our global resources to secure
              optimum rates, services and carriers, to and from ports in major trading
              centres around the world.
            </p>
            <p className="mt-4 leading-relaxed text-ink/65">
              Clients rely on us for services as diverse as marine insurance, storage
              and packaging, customs clearance and logistical support. We also offer
              free technical advice based on our knowledge, experience and contacts in
              international transportation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-sand !pt-0">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {blocks.map((b, idx) => (
              <Reveal key={b.title} delay={idx * 0.08}>
                <div className="card h-full">
                  <h3 className="font-display text-xl font-bold text-ink">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-x grid grid-cols-1 divide-x divide-white/10 py-12 sm:grid-cols-3">
          {stats.map((s) => (
            <Reveal key={s.label} className="px-3 text-center">
              <p className="font-display text-4xl font-extrabold text-white">{s.value}</p>
              <p className="mt-1.5 text-sm text-white/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
