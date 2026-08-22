import Image from "next/image";
import Link from "next/link";
import { PHOTOS, STATS } from "@/lib/constants";

export const metadata = { title: "About — Aastha Nature Cure Clinic" };

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-green-700 py-16 overflow-hidden">
        <Image src={PHOTOS.yoga} alt="" fill className="object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-10">
          <span className="eyebrow text-green-200">Our Story</span>
          <h1 className="mt-3 font-display text-5xl font-700 text-white md:text-6xl">About Aastha</h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-green-100">
            A clinic built on the belief that nature provides the best medicine.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-on-scroll">
              <span className="eyebrow">Our Mission</span>
              <h2 className="mt-3 font-display text-4xl font-700 text-gray-900">
                Healing Through Nature,<br /><span className="text-gradient">Rooted in Kathmandu</span>
              </h2>
              <p className="mt-5 font-body text-base text-gray-600 leading-relaxed">
                Aastha Nature Cure Clinic Pvt. Ltd. was founded on the principle that the human
                body possesses remarkable healing power when supported with the right natural
                treatments. Our motto — <em className="text-green-700 font-600">स्वस्थं जीवनम् (Healthy Living)</em> — guides
                everything we do.
              </p>
              <p className="mt-4 font-body text-base text-gray-600 leading-relaxed">
                We combine evidence-based physiotherapy with traditional naturopathic treatments,
                acupuncture, cupping, massage, shirodhara, and yoga — all delivered by a team of
                qualified, compassionate therapists in the heart of Kathmandu.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
                    <p className="font-display text-3xl font-700 text-green-700">{s.number}</p>
                    <p className="mt-1 font-body text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll grid grid-cols-2 gap-4" style={{ transitionDelay: "150ms" }}>
              <div className="relative aspect-square overflow-hidden rounded-xl3 shadow-lifted">
                <Image src={PHOTOS.herbal} alt="Natural herbal treatments" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl3 shadow-lifted mt-6">
                <Image src={PHOTOS.massage} alt="Massage therapy" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl3 shadow-lifted">
                <Image src={PHOTOS.acupuncture} alt="Acupuncture" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl3 shadow-lifted mt-6">
                <Image src={PHOTOS.physiotherapy} alt="Physiotherapy" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="animate-on-scroll text-center mb-12">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-3 font-display text-4xl font-700 text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🌿", title: "Nature First", desc: "We believe nature provides powerful healing. Every treatment we offer works with the body's own systems." },
              { icon: "❤️", title: "Patient-Centered", desc: "Your health goals guide every decision. We listen carefully and build personalised treatment plans." },
              { icon: "🔬", title: "Evidence-Based", desc: "We combine traditional wisdom with modern evidence — physiotherapy and naturopathy backed by research." },
              { icon: "🤝", title: "Compassionate Care", desc: "A warm, supportive environment where every patient feels respected, heard, and cared for." },
              { icon: "💪", title: "Long-Term Wellness", desc: "We focus on root causes, not just symptoms, empowering you with tools for lasting health." },
              { icon: "🏥", title: "Comprehensive Facility", desc: "From out-patient consultations to multi-day in-patient treatment stays — we have you covered." },
            ].map((v, i) => (
              <div key={v.title} className="animate-on-scroll rounded-xl2 border border-green-100 bg-white p-6 shadow-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 font-display text-lg font-700 text-gray-900">{v.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="animate-on-scroll mx-auto max-w-2xl px-5 text-center lg:px-10">
          <h2 className="font-display text-3xl font-700 text-gray-900">Ready to experience natural healing?</h2>
          <p className="mt-4 font-body text-base text-gray-500">Book an appointment with our expert team today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/appointment" className="btn-green focus-ring">📅 Book Appointment</Link>
            <Link href="/services" className="btn-outline focus-ring">Our Services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
