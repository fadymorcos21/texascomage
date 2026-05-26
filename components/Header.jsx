"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, PackageSearch } from "lucide-react";
import { nav } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div
        className={`hidden border-b transition-colors duration-300 lg:block ${
          scrolled ? "border-ink/10 text-ink/70" : "border-white/15 text-white/80"
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <p className="font-medium tracking-wide">
            We bring the world to your business
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:17325463758" className="inline-flex items-center gap-2 hover:text-brand-600">
              <Phone className="h-3.5 w-3.5" /> USA 1 (732) 546-3758
            </a>
            <a href="mailto:sales@shipcomage.com" className="hover:text-brand-600">
              sales@shipcomage.com
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Comage Container Lines Texas Inc. home">
          <Image
            src={scrolled ? "/logo.svg" : "/logo-white.svg"}
            alt="Comage Container Lines Texas Inc."
            width={210}
            height={60}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const linkColor = scrolled
              ? "text-ink/80 hover:text-brand-600"
              : "text-white/90 hover:text-white";
            if (item.children) {
              return (
                <div key={item.label} className="group relative">
                  <button
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${linkColor} ${
                      active ? (scrolled ? "text-brand-600" : "text-white") : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-60 translate-y-2 rounded-2xl border border-ink/[0.06] bg-white p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/75 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${linkColor} ${
                  active ? (scrolled ? "text-brand-600" : "text-white") : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/air-cargo-tracking" className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? "text-ink/70 hover:text-brand-600" : "text-white/90 hover:text-white"}`}>
            <PackageSearch className="h-4 w-4" /> Track
          </Link>
          <Link href="/contact-us" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`xl:hidden rounded-full p-2 ${scrolled ? "text-ink" : "text-white"}`}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden">
          <div className="max-h-[80vh] overflow-y-auto border-t border-ink/10 bg-white px-5 py-4">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-ink/5 py-1">
                  <button
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between py-2.5 text-base font-semibold text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openGroup === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openGroup === item.label && (
                    <div className="pb-2 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block py-2 text-[15px] text-ink/70"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-ink/5 py-3 text-base font-semibold text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact-us" className="btn-primary mt-4 w-full">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
