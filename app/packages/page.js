import Image from "next/image";
import Link from "next/link";
import { PHOTOS } from "@/lib/constants";

const PACKAGES = [
  { name: "Physiotherapy Package", price: 500, duration: "per visit", includes: ["Physiotherapy normal session","Manual therapy","Consultation"], icon: "⚡", color: "from-green-400 to-green-600" },
  { name: "Naturopathy Package", price: 1500, duration: "per day", includes: ["Steam bath","Hip bath","Enema","Ice massage","Packs"], icon: "🍃", color: "from-green-500 to-green-700" },
  { name: "Massage & Relaxation", price: 1800, duration: "60 min", includes: ["Full body massage","Foot reflexology or vibromassage","Herbal oil"], icon: "🤲", color: "from-green-600 to-green-800" },
  { name: "Yoga Monthly Plan", price: 3500, duration: "per month", includes: ["Group yoga sessions","Jalneti cleansing","Breathing techniques"], icon: "🧘", color: "from-green-500 to-green-700" },
  { name: "Acupuncture + Cupping", price: 850, duration: "per session", includes: ["Acupuncture with moxa","Dry cupping (whole body)","Post-session rest"], icon: "🪡", color: "from-green-400 to-green-700" },
  { name: "Comprehensive Wellness", price: 3000, duration: "3-day package", includes: ["Physiotherapy","Naturopathy treatments","Shirodhara session","Daily yoga"], icon: "✨", color: "from-green-700 to-green-900", featured: true },
];

const ROOM_CHARGES = [
  { type: "General Room", price: 500, note: "Room only" },
  { type: "Single Cabin (Non-Attach)", price: 1000, note: "Room only" },
  { type: "Single Cabin (Attach)", price: 1500, note: "Room only" },
  { type: "General Room", price: 2800, note: "Room + All Treatments" },
  { type: "Single Cabin (Non-Attach)", price: 3300, note: "Room + All Treatments" },
  { type: "Single Cabin (Attach)", price: 3800, note: "Room + All Treatments" },
];

export default function PackagesPage() {
  return (
    <>
      <section className="relative bg-green-700 py-16 overflow-hidden">
        <Image src={PHOTOS.clinic} alt="" fill className="object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-10">
          <span className="eyebrow text-green-200">Value Bundles</span>
          <h1 className="mt-3 font-display text-5xl font-700 text-white md:text-6xl">Treatment Packages</h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-green-100">
            Bundled packages offering greater value. All include doctor assessment and nursing care.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name}
                className={`animate-on-scroll card-hover relative flex flex-col rounded-xl3 border shadow-card overflow-hidden ${pkg.featured ? "border-green-500 ring-2 ring-green-500 ring-offset-2" : "border-green-100"}`}>
                {pkg.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 font-body text-xs font-700 text-white">
                    ⭐ Best Value
                  </div>
                )}
                <div className={`bg-gradient-to-br ${pkg.color} p-6 text-white`}>
                  <span className="text-3xl">{pkg.icon}</span>
                  <h3 className="mt-3 font-display text-xl font-700">{pkg.name}</h3>
                  <div className="mt-2">
                    <span className="font-mono text-3xl font-700">Rs. {pkg.price.toLocaleString()}</span>
                    <span className="ml-1 font-body text-sm opacity-80">/{pkg.duration}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col bg-white p-6">
                  <ul className="flex-1 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-body text-sm text-gray-700">
                        <span className="h-4 w-4 shrink-0 rounded-full bg-green-100 text-center text-xs text-green-600 leading-4 font-700">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/appointment" className="btn-green focus-ring mt-6 justify-center text-sm">
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* In-patient room charges */}
          <div className="mt-20">
            <div className="animate-on-scroll text-center mb-10">
              <span className="eyebrow">In-Patient Care</span>
              <h2 className="mt-3 font-display text-4xl font-700 text-gray-900">Room Charges</h2>
              <p className="mt-3 font-body text-sm text-gray-500">For patients requiring multi-day treatment stays.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="animate-on-scroll rounded-xl2 border border-green-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-700 text-gray-900 mb-4">🏠 Room Only</h3>
                <ul className="space-y-3">
                  {ROOM_CHARGES.filter((r) => r.note === "Room only").map((r) => (
                    <li key={r.type} className="flex items-center justify-between py-2 border-b border-green-50 last:border-0">
                      <span className="font-body text-sm text-gray-700">{r.type}</span>
                      <span className="font-mono font-700 text-green-700">Rs. {r.price}/day</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll rounded-xl2 border border-green-500 bg-white p-6 shadow-card" style={{ transitionDelay: "100ms" }}>
                <h3 className="font-display text-lg font-700 text-gray-900 mb-4">🏥 Room + All Treatments</h3>
                <ul className="space-y-3">
                  {ROOM_CHARGES.filter((r) => r.note !== "Room only").map((r) => (
                    <li key={`${r.type}-t`} className="flex items-center justify-between py-2 border-b border-green-50 last:border-0">
                      <span className="font-body text-sm text-gray-700">{r.type}</span>
                      <span className="font-mono font-700 text-green-700">Rs. {r.price}/day</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 font-body text-xs text-gray-400 text-center">
              Package includes: Doctor fee, Nursing charge, Room charge and Treatment charges. <br/>
              Package excludes: Acupuncture needles, Wellness oil, Food &amp; other products.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
