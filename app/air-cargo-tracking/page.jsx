"use client";

import { useMemo, useState } from "react";
import { Search, ExternalLink, PackageSearch, Plane } from "lucide-react";
import { airlines } from "@/lib/data";

export default function AirCargoTracking() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return airlines;
    return airlines.filter(
      ([name, code]) =>
        name.toLowerCase().includes(term) || code.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <>
      {/* Hero with search */}
      <section className="relative overflow-hidden bg-ink pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
        <div className="container-x relative pb-14 pt-10">
          <p className="eyebrow !text-brand-300">
            <Plane className="h-4 w-4" /> Track your shipment
          </p>
          <h1 className="heading mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
            Air Cargo Tracking
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Find your carrier below and track your air waybill directly with the airline.
            Search by airline name or AWB prefix.
          </p>

          <div className="mt-8 max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-card">
              <Search className="ml-2 h-5 w-5 shrink-0 text-ink/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search airline or AWB prefix (e.g. Emirates, 176)…"
                className="w-full bg-transparent py-2.5 text-ink outline-none placeholder:text-ink/40"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold text-ink/50 hover:text-brand-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container-x">
          <p className="mb-6 text-sm font-medium text-ink/55">
            Showing {filtered.length} of {airlines.length} carriers
          </p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-ink/[0.06] bg-sand py-16 text-center">
              <PackageSearch className="h-12 w-12 text-ink/25" />
              <p className="mt-3 font-semibold text-ink">No carriers found</p>
              <p className="text-sm text-ink/55">
                Try a different airline name or AWB prefix.
              </p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(([name, code, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-ink/[0.06] bg-white px-5 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200"
                >
                  <span>
                    <span className="block font-semibold text-ink group-hover:text-brand-700">
                      {name}
                    </span>
                    <span className="text-xs font-medium tracking-wide text-ink/45">
                      AWB {code}
                    </span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-ink/30 group-hover:text-brand-600" />
                </a>
              ))}
            </div>
          )}

          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 text-sm leading-relaxed text-ink/70">
            Can't find your carrier or need help tracking a shipment?{" "}
            <a href="/contact-us" className="font-semibold text-brand-700 underline">
              Contact our team
            </a>{" "}
            and we'll locate your cargo for you.
          </div>
        </div>
      </section>
    </>
  );
}
