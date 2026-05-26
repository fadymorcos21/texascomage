import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ title, subtitle, eyebrow, image, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="container-x relative pb-16 pt-10 sm:pb-20">
        {eyebrow && (
          <p className="eyebrow !text-brand-300">{eyebrow}</p>
        )}
        <h1 className="heading mt-3 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
        <nav className="mt-7 flex items-center gap-1.5 text-sm text-white/55">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
