"use client";

import { useState } from "react";

export default function RouteCard({ route }: any) {
  const [connected, setConnected] = useState(false);

  return (
    <div className="bg-white border border-green-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition hover:scale-[1.02]">

      <h3 className="text-xl font-semibold text-green-800">
        {route.name}
      </h3>

      <p className="text-green-600 mt-1">
        {route.type === "walk" && "🌿 Walk"}
        {route.type === "bike" && "🚴 Ride"}
        {route.type === "pet" && "🐾 Pet Walk"}
      </p>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>🕒 {route.time}</p>
        <p>📍 {route.distance}</p>
      </div>

      <button
        onClick={() => setConnected(true)}
        className={`mt-4 w-full py-2 rounded-full text-sm transition ${
          connected
            ? "bg-green-100 text-green-700"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {connected ? "✓ Request Sent" : "Connect"}
      </button>

    </div>
  );
}