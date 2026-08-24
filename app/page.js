import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { SERVICE_CATEGORIES, PHOTOS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* ── Services Section ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="animate-on-scroll text-center mb-14">
            <span className="eyebrow">What We Offer</span>
            <h2 className="mt-3 font-display text-4xl font-700 text-gray-900 md:text-5xl">
              Comprehensive <span className="text-gradient">Natural Therapies</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-gray-500">
              Nine specialised treatment categories — all drug-free, all rooted in nature.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <ServiceCard key={cat.id} category={cat} delay={i * 80} />
            ))}
          </div>
          <div className="mt-10 text-center animate-on-scroll">
            <Link href="/services" className="btn-green focus-ring">
              View All Services & Rates →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-on-scroll">
              <span className="eyebrow">Why Choose Aastha</span>
              <h2 className="mt-3 font-display text-4xl font-700 text-gray-900">
                Healing That Works With Your Body
              </h2>
              <p className="mt-4 font-body text-base text-gray-600 leading-relaxed">
                At Aastha Nature Cure Clinic, we believe the body has an innate ability to heal
                itself when given the right support. Our team of expert therapists combines
                ancient wisdom with modern techniques for lasting wellness.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { icon: "🌿", title: "100% Natural & Drug-Free", desc: "All treatments use natural methods — no medication, no side effects." },
                  { icon: "👨‍⚕️", title: "Expert Qualified Therapists", desc: "Our team holds formal qualifications in physiotherapy, acupuncture and naturopathy." },
                  { icon: "🎯", title: "Personalised Treatment Plans", desc: "Every patient receives a plan tailored specifically to their condition and goals." },
                  { icon: "🏥", title: "In-Patient Facilities", desc: "General wards and private cabins for multi-day treatment packages." },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">{f.icon}</span>
                    <div>
                      <h3 className="font-body text-sm font-700 text-gray-900">{f.title}</h3>
                      <p className="mt-0.5 font-body text-xs text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/about" className="btn-green focus-ring">Learn More About Us</Link>
                <Link href="/appointment" className="btn-outline focus-ring">Book Now</Link>
              </div>
            </div>
            <div className="animate-on-scroll grid grid-cols-2 gap-4" style={{ transitionDelay: "150ms" }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl3 shadow-lifted">
                <Image src={PHOTOS.physiotherapy} alt="Physiotherapy" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl3 shadow-lifted mt-8">
                <Image src={PHOTOS.yoga} alt="Yoga" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="animate-on-scroll text-center mb-14">
            <span className="eyebrow">Our Process</span>
            <h2 className="mt-3 font-display text-4xl font-700 text-gray-900">Your Healing Journey</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", icon: "📋", title: "Book Appointment", desc: "Call us or book online. Choose your preferred date and time." },
              { step: "02", icon: "🩺", title: "Initial Consultation", desc: "Meet our doctor for a thorough assessment of your condition." },
              { step: "03", icon: "🌿", title: "Personalised Plan", desc: "Receive a tailored treatment plan using natural therapies." },
              { step: "04", icon: "✨", title: "Heal & Thrive", desc: "Follow your plan and experience natural, lasting recovery." },
            ].map((s, i) => (
              <div key={s.step} className="animate-on-scroll relative flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 100}ms` }}>
                {i < 3 && <div className="absolute top-8 left-[60%] hidden h-0.5 w-full bg-green-100 lg:block" />}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-green">
                  {s.icon}
                </div>
                <span className="mt-3 font-mono text-xs font-700 text-green-400">{s.step}</span>
                <h3 className="mt-2 font-display text-lg font-700 text-gray-900">{s.title}</h3>
                <p className="mt-2 font-body text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-green-700 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-green-600/60 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-green-800/60 blur-3xl" />
        </div>
        <div className="relative animate-on-scroll mx-auto max-w-3xl px-5 text-center lg:px-10">
          <h2 className="font-display text-4xl font-700 text-white md:text-5xl">
            Start Your Healing Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-base text-green-100">
            Book an appointment online or call us. Our expert team is ready to help you heal naturally.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/appointment" className="focus-ring rounded-full bg-white px-8 py-3.5 font-body text-sm font-700 text-green-700 shadow-lifted transition-all hover:-translate-y-1 hover:shadow-2xl">
              📅 Book Appointment
            </Link>
            <Link href="/services" className="focus-ring rounded-full border-2 border-white/70 px-8 py-3.5 font-body text-sm font-700 text-white transition-all hover:bg-white/10">
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
