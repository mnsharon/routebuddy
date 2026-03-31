"use client";

import { useState } from "react";
import { MapPin } from "lucide-react"; // ✅ FIX

export default function SearchPanel() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">

      {/* Start Location */}
      <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-4 py-3">
        <MapPin className="h-4 w-4 text-green-600" />
        <input
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="Start location"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Destination */}
      <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-4 py-3">
        <MapPin className="h-4 w-4 text-green-600" />
        <input
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          placeholder="Destination"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Button */}
      <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
        Find Routes 🌿
      </button>

    </div>
  );
}