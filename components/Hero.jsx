import Image from "next/image";
import Link from "next/link";
import { CLINIC_TAGLINE, CLINIC_TAGLINE_EN, PHOTOS, CLINIC_PHONES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src={PHOTOS.hero} alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      {/* Decorative green circles */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-green-200/40 blur-2xl" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 py-20 lg:px-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="eyebrow text-green-700">Natural Healing Clinic, Kathmandu</span>
          </div>

          {/* Tagline in Devanagari */}
          <p className="mb-2 font-display text-lg text-green-600 italic">{CLINIC_TAGLINE} — {CLINIC_TAGLINE_EN}</p>

          {/* Headline */}
          <h1 className="font-display text-5xl font-700 leading-[1.1] text-gray-900 sm:text-6xl md:text-7xl">
            Heal Naturally,
            <span className="block text-gradient">Live Fully</span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-gray-600 md:text-lg">
            Aastha Nature Cure Clinic offers holistic, drug-free healing through
            physiotherapy, acupuncture, naturopathy, and yoga — trusted by thousands
            of patients across Kathmandu.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/appointment" className="btn-green focus-ring">
              📅 Book Appointment
            </Link>
            <Link href="/services" className="btn-outline focus-ring">
              View Services →
            </Link>
          </div>

          {/* Phone quick links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="eyebrow">Call Us:</span>
            {CLINIC_PHONES.map((p) => (
              <a key={p} href={`tel:${p}`} className="focus-ring font-body text-sm font-700 text-green-700 hover:underline">
                📞 {p}
              </a>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { icon: "✅", text: "100% Drug-Free" },
              { icon: "🌿", text: "Natural Therapies" },
              { icon: "👨‍⚕️", text: "Expert Therapists" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-lg">{b.icon}</span>
                <span className="font-body text-sm font-600 text-gray-700">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-body text-xs text-gray-500">Scroll</span>
        <div className="h-8 w-0.5 bg-gradient-to-b from-green-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
