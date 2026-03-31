"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { routes } from "@/data/routes";

// Dynamically import Leaflet components (SSR safe)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

export default function MapView({ selected }: { selected: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load leaflet only on client
    import("leaflet").then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });
    });
  }, []);

  if (!mounted) return null;

  const filtered =
    selected === "all"
      ? routes
      : routes.filter((r) => r.type === selected);

  return (
    <div className="h-[500px] rounded-3xl overflow-hidden">
      <MapContainer
        key={selected}
        center={[39.0997, -94.5786]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filtered.map((user) => (
          <Marker key={user.id} position={[user.lat, user.lng]}>
            <Popup>
              <div className="text-center">
                <p className="font-semibold">{user.name}</p>

                <p className="text-green-600 text-sm">
                  {user.type === "walk" && "🌿 Walk"}
                  {user.type === "bike" && "🚴 Ride"}
                  {user.type === "pet" && "🐾 Pet Walk"}
                </p>

                <p className="text-xs mt-1">🕒 {user.time}</p>
                <p className="text-xs">📍 {user.distance}</p>

                <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded-full text-xs">
                  Connect
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}