"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RouteCard from "@/components/RouteCard";
import { routes } from "@/data/routes";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
});

export default function HomePage() {
  const [selected, setSelected] = useState("all");

  const filteredRoutes =
    selected === "all"
      ? routes
      : routes.filter((r) => r.type === selected);

  return (
    <main className="min-h-screen bg-[#f0fdf4] text-green-900">
      <Navbar />

      <section className="text-center py-20">
        <Hero selected={selected} setSelected={setSelected} />
      </section>

      <div id="map-section" className="px-6 pb-10">
        <MapView selected={selected} />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>
    </main>
  );
}