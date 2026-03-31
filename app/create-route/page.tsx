"use client";

import { useState } from "react";

export default function CreateRoute() {
  const [petFriendly, setPetFriendly] = useState(false);

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

        <h1 className="text-2xl font-semibold text-green-800 mb-6">
          Create a Route 🌿
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm text-green-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="text-sm text-green-700">Time</label>
          <input
            type="time"
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>

        {/* Distance */}
        <div className="mb-4">
          <label className="text-sm text-green-700">Distance</label>
          <input
            type="text"
            placeholder="e.g. 2 km"
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>

        {/* Pet Friendly Toggle */}
        <div className="mb-4">
          <label className="text-sm text-green-700">Pet Friendly</label>
          <button
            onClick={() => setPetFriendly(!petFriendly)}
            className={`w-full mt-2 py-3 rounded-xl ${
              petFriendly
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {petFriendly ? "🐾 Yes" : "No pets"}
          </button>
        </div>

        {/* Submit */}
        <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
          Publish Route
        </button>

      </div>
    </main>
  );
}