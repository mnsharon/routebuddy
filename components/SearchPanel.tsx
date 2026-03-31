"use client";
          <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-pink-50/50 px-4 py-3">
            <MapPin className="h-4 w-4 text-pink-600" />
            <input
              value={start}
              onChange={(e) => setStart(e.target.value)}
              placeholder="Downtown, campus, park entrance..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Destination point
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-pink-50/50 px-4 py-3">
            <ArrowRight className="h-4 w-4 text-pink-600" />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Lake trail, dog park, coffee shop..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            People needed
          </label>
          <div className="grid grid-cols-5 gap-2">
            {["1", "2", "3", "4", "5+"].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setPeopleNeeded(count)}
                className={cn(
                  "rounded-2xl border px-3 py-3 text-sm font-medium transition",
                  peopleNeeded === count
                    ? "border-pink-400 bg-pink-600 text-white shadow"
                    : "border-pink-100 bg-white text-slate-600 hover:border-pink-200 hover:bg-pink-50"
                )}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-500 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-[1.01]"
        >
          <Search className="h-4 w-4" />
          Find route buddies
        </button>
      </div>

      <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Today’s community vibe</p>
            <h3 className="mt-1 text-lg font-semibold">Soft routes, safe company</h3>
          </div>
          <div className="rounded-2xl bg-white/10 p-2">
            <Clock3 className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          People are matching for easy sunset rides, dog walks, and low-pressure city strolls.
        </p>
      </div>
    </div>
  );
}