import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16">
      <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-xl md:px-12 md:py-14">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-300">
          Start your first meetup
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Build a softer way to meet people nearby.
            </h2>
            <p className="mt-3 text-slate-300">
              Post a bike ride, a simple walk, or a pet-friendly plan and let RouteBuddy bring people together.
            </p>
          </div>
          <Link
            href="/create-route"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            Create a route
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}