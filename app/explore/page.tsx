import Navbar from "@/components/Navbar";
import RouteCard from "@/components/RouteCard";
import { routes } from "@/data/routes";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] text-green-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-600">
            🌿 Explore routes
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-green-800">
            Find people to walk with nearby
          </h1>

          <p className="mt-3 max-w-2xl text-green-700">
            Discover peaceful walks, bike rides, and pet-friendly paths shared by people around you.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>
    </main>
  );
}