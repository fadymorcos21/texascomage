import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { gallery } from "@/lib/data";

export const metadata = {
  title: "Picture Gallery",
  description:
    "A look at Comage Container Lines in action — air, ocean, road and warehousing operations around the world.",
};

export default function PictureGallery() {
  return (
    <>
      <PageHero
        eyebrow="Comage in action"
        title="Picture Gallery"
        subtitle="Air, ocean, road and warehousing operations — moving cargo across the globe, every day."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Picture Gallery" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((g, idx) => (
              <Reveal key={g.src} delay={(idx % 3) * 0.06}>
                <figure className="group break-inside-avoid overflow-hidden rounded-2xl shadow-soft">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1000}
                    height={g.tall ? 1300 : 800}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      g.tall ? "h-[420px]" : "h-72"
                    }`}
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
