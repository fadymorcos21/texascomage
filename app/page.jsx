import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  PackageSearch,
  Globe2,
  Clock,
  BadgeCheck,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { services, stats, clientLogos, accreditations, benefits } from "@/lib/data";

const heroPills = [
  "Air Freight",
  "Ocean Freight",
  "Customs Clearance",
  "Cross-Border",
  "Cargo Insurance",
  "Storage",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#05172e]">
        {/* Background photo (original container-ship hero) */}
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        {/* Blue tone wash to unify the photo */}
        <div className="absolute inset-0 bg-[#072044]/35 mix-blend-multiply" />
        {/* Main left-to-right navy fade — solid on the left, quickly fading to
            transparent over the right so the containers read through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04162d] from-30% via-[#0a2a55]/70 via-58% to-transparent to-82%" />
        {/* Top scrim keeps the header/nav legible over the brighter right side */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04162d]/85 via-transparent via-28% to-transparent" />
        {/* Bottom scrim grounds the stats strip */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04162d] via-[#04162d]/30 via-18% to-transparent to-45%" />
        {/* Warm brand glow behind the headline for depth */}
        <div className="absolute left-[-6rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-3xl" />

        <div className="container-x relative z-10 pt-28">
          <Reveal>
            <p className="eyebrow !text-brand-300">
              <span className="h-px w-8 bg-brand-400" />
              Comage Container Lines Texas Inc.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="heading mt-5 max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              We bring the world to{" "}
              <span className="text-brand-500">your business</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Air and ocean cargo services at their finest. With dedicated
              transportation hubs and global partnerships, Comage delivers superior
              service, technical expertise and the best rates worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact-us" className="btn-primary !px-7 !py-3.5 text-base">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/air-cargo-tracking" className="btn-ghost !px-7 !py-3.5 text-base">
                <PackageSearch className="h-4 w-4" /> Track Air Cargo
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {heroPills.map((p) => (
                <Link
                  key={p}
                  href="/global-services"
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur transition-colors hover:border-brand-400 hover:text-white"
                >
                  {p}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#04162d]/55 backdrop-blur">
          <div className="container-x grid grid-cols-1 divide-x divide-white/10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-6 text-center lg:py-7">
                <p className="font-display text-3xl font-extrabold text-white lg:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-white/55 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="border-b border-ink/5 bg-white py-10">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">
            Trusted by industry leaders worldwide
          </p>
          <div className="mask-fade-x mt-6 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-14">
              {[...clientLogos, ...clientLogos].map((c, idx) => (
                <span
                  key={idx}
                  className="whitespace-nowrap font-display text-xl font-bold text-ink/25"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                  alt="Port crane loading containers"
                  width={1200}
                  height={900}
                  className="h-[520px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand-600 p-6 text-white shadow-card sm:block">
                <p className="font-display text-4xl font-extrabold">20+</p>
                <p className="text-sm text-white/80">years of global experience</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <p className="eyebrow">About Comage</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              A full-service approach to moving your cargo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Whether transporting air or ocean cargo, Comage Container Lines Texas
              brings global markets closer to American businesses. We use a worldwide
              network of partners to secure optimum rates, services and carriers — to
              and from ports in major trading centres around the world.
            </p>
            <p className="mt-4 leading-relaxed text-ink/65">
              Based in Fresno, Texas, we are cross-trade specialists providing a full
              range of air and ocean cargo services to importers and exporters across
              the United States.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Dedicated transportation hubs",
                "Complimentary technical advice",
                "Multimodal logistics support",
                "Cross-trade specialists",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-ink/75">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/about-us" className="btn-outline mt-8">
              More about our company <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-sand">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Global Services</p>
              <h2 className="heading mt-3 text-3xl sm:text-4xl">
                Everything you need to move cargo, end to end
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/65">
                A wide range of shipping, transportation and logistical support —
                services that translate into highly-competitive rates, access to air
                and ocean carriers, and peace of mind.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Reveal key={s.slug} delay={(idx % 3) * 0.08}>
                <Link
                  href={`/global-services#${s.slug}`}
                  className="group block h-full rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COMAGE */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="eyebrow">Client Benefits</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              We simplify the shipping process for clients
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Moving cargo by air or ocean can be overwhelming for companies trading in
              world markets. We provide a gateway to those markets, while offering some
              of the most competitive rates, carriers and services available.
            </p>
            <ul className="mt-7 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3.5">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed text-ink/75">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" className="grid gap-5">
            {[
              {
                icon: Globe2,
                title: "Worldwide hubs",
                body: "A simplified approach to shipping through our global network of transportation hubs.",
              },
              {
                icon: Clock,
                title: "Rapid quotations",
                body: "Rate quotations within 12 hours for air freight and 24 hours for ocean freight.",
              },
              {
                icon: BadgeCheck,
                title: "30–35% savings",
                body: "Saving global clients between 30 and 35 per cent in both time and costs.",
              },
            ].map((c) => (
              <div key={c.title} className="card flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{c.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-ink">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center !text-brand-300">Testimonials</p>
              <h2 className="heading mt-3 text-3xl text-white sm:text-4xl">
                What our customers are saying
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/60">
                We contact every account after every job — and clients continue to give
                us their highest ratings of 100 per cent for satisfaction.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Accreditations</p>
              <h2 className="heading mt-3 text-3xl sm:text-4xl">
                A registered, approved carrier you can trust
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {accreditations.map((a, idx) => (
              <Reveal key={a.name} delay={(idx % 5) * 0.05}>
                <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-ink/[0.06] bg-white p-4 text-center shadow-soft transition-colors hover:border-brand-200">
                  <span className="font-display text-xl font-extrabold text-ink">
                    {a.name}
                  </span>
                  <span className="mt-1 text-[11px] leading-tight text-ink/45">
                    {a.full}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center">
              <Link
                href="/about-us/accreditations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View all accreditations <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHARITY */}
      <section className="section bg-sand">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-10 sm:p-14">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[auto,1fr]">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <HeartHandshake className="h-10 w-10" />
                </div>
                <div>
                  <p className="eyebrow !text-brand-300">Comage's Charity</p>
                  <h2 className="heading mt-2 text-2xl text-white sm:text-3xl">
                    The Comage Critical Assistance &amp; Support Fund
                  </h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-white/65">
                    A portion of Comage's net earnings are set aside to help the poor
                    and needy. We are committed to helping families with initial support
                    and training to enable them to become self-sufficient. One step at a
                    time, we hope to help eradicate poverty.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
