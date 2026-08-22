"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_CATEGORIES, PHOTOS } from "@/lib/constants";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState("physiotherapy");

  const filtered = useMemo(() => {
    const t = query.trim().toLowerCase();
    if (!t) return SERVICE_CATEGORIES;
    return SERVICE_CATEGORIES.map((c) => ({
      ...c, services: c.services.filter((s) => s.name.toLowerCase().includes(t)),
    })).filter((c) => c.services.length > 0);
  }, [query]);

  return (
    <>
      {/* Header */}
      <section className="relative bg-green-700 py-16 overflow-hidden">
        <Image src={PHOTOS.herbal} alt="" fill className="object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-10">
          <span className="eyebrow text-green-200">Complete Price List</span>
          <h1 className="mt-3 font-display text-5xl font-700 text-white md:text-6xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-green-100">
            All treatments with transparent pricing. 9 categories, 50+ treatments — all drug-free.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          {/* Search */}
          <div className="mb-8 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500">🔍</span>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a treatment, e.g. 'steam bath' or 'acupuncture'..."
              className="w-full rounded-full border-2 border-green-200 py-3.5 pl-11 pr-5 font-body text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-green-500 transition-colors" />
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {filtered.map((cat) => {
              const isOpen = openId === cat.id || Boolean(query);
              const img = PHOTOS[cat.image] || PHOTOS.herbal;
              return (
                <div key={cat.id} id={cat.id}
                  className="overflow-hidden rounded-xl2 border border-green-100 bg-white shadow-card scroll-mt-24">
                  <button type="button"
                    onClick={() => setOpenId(isOpen && !query ? null : cat.id)}
                    className="focus-ring flex w-full items-center gap-4 px-5 py-4 text-left">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                      <Image src={img} alt={cat.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <span className="text-2xl">{cat.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-700 text-gray-900">{cat.name}</h3>
                      <p className="font-body text-xs text-gray-500">{cat.description}</p>
                    </div>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 font-700 text-xl transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-green-50 px-5 pb-5">
                      <ul className="divide-y divide-green-50">
                        {cat.services.map((s, i) => (
                          <li key={i} className="flex items-start justify-between gap-4 py-3">
                            <span className="font-body text-sm text-gray-800">
                              {s.name}
                              {s.note && <span className="ml-2 text-xs text-gray-400">({s.note})</span>}
                            </span>
                            <span className="shrink-0 rounded-full bg-green-50 px-3 py-0.5 font-mono text-sm font-700 text-green-700 whitespace-nowrap">
                              Rs. {s.price}/-
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="rounded-xl2 border border-dashed border-green-200 py-14 text-center">
                <p className="font-body text-gray-500">No treatments found for &ldquo;{query}&rdquo;. Try a different keyword.</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl2 bg-green-50 border border-green-200 p-5">
            <p className="font-body text-sm text-gray-600">
              <strong className="text-green-700">📌 Note:</strong> Prices listed are standard rates and may vary based on individual assessment. Members enjoy a 10% discount on select treatments. Contact us for package rates and in-patient charges.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/appointment" className="btn-green focus-ring">📅 Book a Treatment →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
