import { Bike, Footprints, PawPrint } from "lucide-react";

const features = [
  {
    title: "Share extra bikes",
    text: "Users can mention if they have an extra cycle available so others can join.",
    icon: Bike,
    tone: "bg-pink-100 text-pink-700",
  },
  {
    title: "Walk with intention",
    text: "Not every meetup needs to be complicated. Sometimes it is just a simple shared walk.",
    icon: Footprints,
    tone: "bg-rose-100 text-rose-700",
  },
  {
    title: "Pet-safe connections",
    text: "Make room for dog parents and pet lovers to connect through outdoor routines.",
    icon: PawPrint,
    tone: "bg-emerald-100 text-emerald-700",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
      <div className="grid gap-6 rounded-[2rem] border border-pink-100 bg-white p-8 shadow-lg shadow-pink-50 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title}>
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.tone}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}