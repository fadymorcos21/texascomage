import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the leadership of Comage Container Lines Texas Inc. — driving U.S. air and ocean cargo operations with decades of industry expertise.",
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
                    DK
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
              <p className="eyebrow">President</p>
              <h2 className="heading mt-2 text-3xl sm:text-4xl">
                David Kochath
              </h2>
              <p className="mt-1 text-lg font-semibold text-brand-600">
                Comage Container Lines Texas Inc.
              </p>
              <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
                <p>
                  Freight forwarding and global logistics have been a part of David
                  Kochath's life from an early age. Learning firsthand from his father,
                  Joshua (Josh) Kochath, David gained practical experience across air
                  and ocean freight operations, supply chain management, and
                  international transportation.
                </p>
                <p>
                  Building on the foundation established by nearly three decades of
                  industry leadership and global relationships, David has launched and
                  expanded freight forwarding operations from Texas, serving clients
                  with customized logistics solutions worldwide. His hands-on approach,
                  industry knowledge, and commitment to customer service allow him to
                  successfully manage complex transportation requirements across global
                  markets.
                </p>
                <p>
                  By combining proven industry expertise with a modern approach to
                  logistics, David continues the family tradition of delivering
                  reliable, efficient, and cost-effective freight solutions for
                  businesses around the world.
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
