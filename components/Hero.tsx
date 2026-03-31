"use client";

export default function Hero({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (value: string) => void;
}) {
  return (
    <section className="relative overflow-hidden py-16">

      {/* 🌿 Background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-200 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-200 rounded-full blur-[120px] opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-semibold text-green-800">
          Walk into moments,
          <span className="block text-green-600">
            meet people along the way.
          </span>
        </h1>

        <p className="mt-6 text-green-700">
          Find walking buddies, bike rides, and pet-friendly paths.
        </p>

        <p className="mt-6 text-green-500 text-sm tracking-wide">
          ✨ find your pace • meet your people • move gently
        </p>

        {/* 🌿 Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["all", "walk", "bike", "pet"].map((type) => (
            <button
              key={type}
              onClick={() => setSelected(type)}
              className={`px-5 py-3 rounded-full transition transform hover:scale-110 ${
                selected === type
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {type === "all" && "🌿 All"}
              {type === "walk" && "🌿 Calm Walk"}
              {type === "bike" && "🚴 Bike Ride"}
              {type === "pet" && "🐾 Pet Walk"}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() =>
            document
              .getElementById("map-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-10 px-6 py-4 rounded-full bg-green-600 text-white hover:scale-105 transition"
        >
          Start exploring 🌿
        </button>

      </div>
    </section>
  );
}