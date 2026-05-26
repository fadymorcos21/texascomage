"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const go = (dir) =>
    setI((p) => (p + dir + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative rounded-3xl bg-white p-8 shadow-card sm:p-12">
        <Quote className="h-12 w-12 text-brand-100" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              {t.quote}
            </p>
            <footer className="mt-6">
              <p className="font-display text-lg font-bold text-ink">{t.name}</p>
              <p className="text-sm text-ink/60">
                {t.role ? `${t.role}, ` : ""}
                <span className="font-semibold text-brand-600">{t.company}</span>
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-7 bg-brand-600" : "w-2 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="rounded-full border border-ink/10 p-2.5 text-ink/60 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="rounded-full border border-ink/10 p-2.5 text-ink/60 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
