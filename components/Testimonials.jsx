"use client";
import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/constants";

function Stars({ n = 5 }) {
  return <div className="flex gap-0.5">{Array.from({ length: n }).map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}</div>;
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="animate-on-scroll text-center mb-12">
          <span className="eyebrow">What Patients Say</span>
          <h2 className="mt-3 font-display text-4xl font-700 text-gray-900">Real Stories, Real Healing</h2>
        </div>

        <div className="animate-on-scroll relative mx-auto max-w-4xl">
          {/* Main card */}
          <div className="rounded-xl4 bg-white p-8 shadow-lifted sm:p-12">
            <span className="font-display text-6xl leading-none text-green-200 select-none">&ldquo;</span>
            <p className="mt-2 font-body text-lg leading-relaxed text-gray-700 sm:text-xl">
              {TESTIMONIALS[idx].quote}
            </p>
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-display text-lg font-700 text-green-700">
                  {TESTIMONIALS[idx].name[0]}
                </div>
                <div>
                  <p className="font-body text-sm font-700 text-gray-900">{TESTIMONIALS[idx].name}</p>
                  <p className="font-body text-xs text-green-600">{TESTIMONIALS[idx].treatment}</p>
                </div>
              </div>
              <Stars n={TESTIMONIALS[idx].rating} />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors">←</button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`focus-ring h-2 rounded-full transition-all ${i === idx ? "w-6 bg-green-600" : "w-2 bg-green-200"}`} />
              ))}
            </div>
            <button onClick={next} className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
