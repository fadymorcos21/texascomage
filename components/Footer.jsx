import Link from "next/link";
import Image from "next/image";
import { Phone, Printer, Mail, MapPin } from "lucide-react";
import { offices, company } from "@/lib/data";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Clients & Benefits", href: "/clients" },
  { label: "Global Services", href: "/global-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Accreditations", href: "/about-us/accreditations" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Picture Gallery", href: "/picturegallery" },
  { label: "Leadership", href: "/leadership" },
  { label: "Resources", href: "/resources" },
  { label: "Trading Conditions", href: "/trading-conditions" },
  { label: "Air Cargo Tracking", href: "/air-cargo-tracking" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x section !py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/logo-white.svg"
              alt="Comage Container Lines Texas Inc."
              width={220}
              height={62}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Comage Container Lines has built its reputation on superior client
              service, combined with technical expertise and knowledge of the global
              transportation industry. We specialize in air and ocean cargo, offering
              clients a full range of shipping and logistical services.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["IATA", "FIATA", "FMC", "CIFFA", "NCBFAA"].map((a) => (
                <span
                  key={a}
                  className="rounded-md border border-white/15 px-2.5 py-1 text-xs font-semibold tracking-wide text-white/70"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Pages
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Our Offices
            </h4>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {offices.map((o) => (
                <div key={o.country} className="text-sm">
                  <p className="flex items-center gap-2 font-semibold text-white">
                    <MapPin className="h-4 w-4 text-brand-500" />
                    {o.country}
                  </p>
                  <address className="mt-2 not-italic leading-relaxed text-white/55">
                    {o.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="mt-2 flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5" /> {o.tel}
                    </span>
                    <span className="flex items-center gap-2">
                      <Printer className="h-3.5 w-3.5" /> {o.fax}
                    </span>
                    <a
                      href={`mailto:${o.email}`}
                      className="flex items-center gap-2 hover:text-white"
                    >
                      <Mail className="h-3.5 w-3.5" /> {o.email}
                    </a>
                  </address>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
          <p>
            US operations of{" "}
            <a
              href="https://shipcomage.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white"
            >
              Comage Container Lines
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
