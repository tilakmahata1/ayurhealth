import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="bg-green-700 py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="animate-on-scroll text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="font-display text-3xl font-800 text-white sm:text-4xl">{s.number}</p>
              <p className="mt-1 font-body text-sm font-600 uppercase tracking-wider text-green-200">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
