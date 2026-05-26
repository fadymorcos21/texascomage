import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the leadership of Comage Container Lines — decades of expertise in global freight forwarding, shipping and vessel management.",
};

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="Leadership"
        subtitle="Experienced leadership with a proven track record navigating global markets and the logistics industry."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Leadership" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-[340px,1fr]">
            <Reveal direction="right">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-card">
                <div className="flex aspect-[3/4] items-end justify-center p-8">
                  <span className="font-display text-7xl font-extrabold text-white/90">
                    JK
                  </span>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href="mailto:sales@shipcomage.com"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-brand-600 hover:text-brand-600"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/40"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </span>
              </div>
            </Reveal>

            <Reveal direction="left">
              <p className="eyebrow">Chairman &amp; CEO</p>
              <h2 className="heading mt-2 text-3xl sm:text-4xl">
                Joshua Kochath, C. Eng (Mech)
              </h2>
              <p className="mt-1 text-lg font-semibold text-brand-600">
                Comage Container Lines
              </p>
              <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
                <p>
                  Air and ocean cargo services are second nature to Joshua (Josh)
                  Kochath, who has a wealth of experience in global transportation.
                  Starting his career in vessel operations, Josh has nearly 30 years of
                  experience in freight forwarding, shipping and vessel management. He
                  has expanded his operations to meet the demands of clients who require
                  both air freight and worldwide aviation supply services.
                </p>
                <p>
                  Josh's specialized knowledge and comprehensive experience in the
                  global transportation sector have served his clients extraordinarily
                  well. Prior to founding Comage, he established Sower International, a
                  successful marine surveying and consulting company, with offices across
                  Canada and affiliates worldwide.
                </p>
                <p>
                  Josh's experience in the industry began with the Robert Lyon Group, a
                  U.K.-based company, where he started as a marine surveyor and worked his
                  way up the ranks, eventually becoming the company's president to oversee
                  operations throughout Canada and the Middle East.
                </p>
                <p>
                  Josh has a proven track record of accomplishments that demonstrates his
                  keen knowledge of the logistics industry and the ability to successfully
                  navigate global markets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
