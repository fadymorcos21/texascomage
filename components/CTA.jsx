import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA({
  title = "Need a quotation?",
  body = "Contact Comage to learn more about rates and services designed for your cargo requirements. We help you reduce costs and increase efficiencies for your transportation and logistical needs.",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-600">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container-x relative section !py-16 text-center">
        <Reveal>
          <h2 className="heading mx-auto max-w-3xl text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            {body}
          </p>
          <Link
            href="/contact-us"
            className="btn mt-8 bg-white text-brand-700 shadow-soft hover:-translate-y-0.5 hover:bg-brand-50"
          >
            Contact us for a free consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
