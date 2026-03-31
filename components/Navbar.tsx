import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-green-100 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">
          🌿 RouteBuddy
        </h1>

        <nav className="flex gap-6 text-green-700">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/create-route">Create</Link>
        </nav>
      </div>
    </header>
  );
}