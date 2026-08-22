import Image from "next/image";
import Link from "next/link";
import { CLINIC_NAME, CLINIC_PHONES, CLINIC_EMAIL, CLINIC_ADDRESS, PHOTOS } from "@/lib/constants";

export const metadata = { title: "Contact — Aastha Nature Cure Clinic" };

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-green-700 py-16 overflow-hidden">
        <Image src={PHOTOS.clinic} alt="" fill className="object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-10">
          <span className="eyebrow text-green-200">Get In Touch</span>
          <h1 className="mt-3 font-display text-5xl font-700 text-white md:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-green-100">
            We&apos;re here to help. Reach out by phone, email, or visit us in Kathmandu.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              { icon: "📞", title: "Phone", content: CLINIC_PHONES, type: "phone" },
              { icon: "✉️", title: "Email", content: [CLINIC_EMAIL], type: "email" },
              { icon: "📍", title: "Location", content: [CLINIC_ADDRESS, "Kathmandu, Bagmati Province, Nepal"], type: "text" },
            ].map((c) => (
              <div key={c.title} className="animate-on-scroll rounded-xl3 border border-green-100 bg-white p-7 shadow-card text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">{c.icon}</span>
                <h3 className="mt-4 font-display text-xl font-700 text-gray-900">{c.title}</h3>
                <div className="mt-3 space-y-1">
                  {c.content.map((item) => (
                    c.type === "phone" ? (
                      <a key={item} href={`tel:${item}`} className="focus-ring block font-body text-sm text-green-700 font-600 hover:underline">{item}</a>
                    ) : c.type === "email" ? (
                      <a key={item} href={`mailto:${item}`} className="focus-ring block font-body text-sm text-green-700 hover:underline break-all">{item}</a>
                    ) : (
                      <p key={item} className="font-body text-sm text-gray-600">{item}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div className="animate-on-scroll mt-10 rounded-xl2 border border-green-100 bg-green-50 p-7">
            <h3 className="font-display text-xl font-700 text-gray-900 mb-5">🕐 Clinic Hours</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                { day: "Sunday & Holidays", hours: "9:00 AM – 2:00 PM" },
              ].map((h) => (
                <div key={h.day} className="rounded-xl bg-white border border-green-100 p-4">
                  <p className="font-body text-xs font-700 uppercase tracking-wide text-green-600">{h.day}</p>
                  <p className="mt-1 font-body text-sm text-gray-800">{h.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="animate-on-scroll mt-10 rounded-xl3 bg-green-700 p-10 text-center text-white">
            <h2 className="font-display text-3xl font-700">Ready to book your appointment?</h2>
            <p className="mt-3 font-body text-sm text-green-100">Book online in under a minute and we&apos;ll confirm by phone.</p>
            <Link href="/appointment" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-body text-sm font-700 text-green-700 shadow-lifted transition-all hover:-translate-y-1 hover:shadow-2xl">
              📅 Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
