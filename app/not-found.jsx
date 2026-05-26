import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink">
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="container-x relative text-center">
        <p className="font-display text-[8rem] font-extrabold leading-none text-white/10 sm:text-[12rem]">
          404
        </p>
        <h1 className="heading -mt-8 text-3xl text-white sm:text-4xl">
          This route is off the map
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you're looking for has set sail. Let's get you back on course.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back to home
          </Link>
          <Link href="/contact-us" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
