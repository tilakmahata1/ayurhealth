import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";
import { CLINIC_PHONES, PHOTOS } from "@/lib/constants";

export const metadata = {
  title: "Book an Appointment — Aastha Nature Cure Clinic",
};

export default function AppointmentPage() {
  return (
    <>
      <section className="relative bg-green-700 py-16 overflow-hidden">
        <Image src={PHOTOS.physiotherapy} alt="" fill className="object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-10">
          <span className="eyebrow text-green-200">Schedule Your Visit</span>
          <h1 className="mt-3 font-display text-5xl font-700 text-white md:text-6xl">Book an Appointment</h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-green-100">
            Fill in the form below and our team will confirm your booking by phone.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            {/* Left info */}
            <div className="animate-on-scroll space-y-8">
              <div>
                <span className="eyebrow">Contact Details</span>
                <h2 className="mt-3 font-display text-3xl font-700 text-gray-900">Get In Touch</h2>
              </div>

              <div className="rounded-xl2 border border-green-100 bg-green-50 p-6 space-y-4">
                {CLINIC_PHONES.map((p) => (
                  <a key={p} href={`tel:${p}`}
                    className="focus-ring flex items-center gap-3 font-body text-sm font-700 text-green-800 hover:text-green-600">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">📞</span>
                    {p}
                  </a>
                ))}
                <div className="flex items-center gap-3 font-body text-sm text-gray-600">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">🕐</span>
                  Open daily, 9:00 AM – 5:00 PM
                </div>
                <div className="flex items-start gap-3 font-body text-sm text-gray-600">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">📍</span>
                  Kathmandu, Nepal
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-700 text-gray-900 mb-4">What to Expect</h3>
                <ol className="space-y-3">
                  {[
                    "Submit the form with your details",
                    "Our team calls to confirm your slot",
                    "Arrive 10 mins early on your appointment day",
                    "Begin your personalised treatment plan",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-700 text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-lifted">
                <Image src={PHOTOS.yoga} alt="Healing at Aastha" fill className="object-cover" sizes="500px" />
              </div>
            </div>

            {/* Form */}
            <div className="animate-on-scroll rounded-xl3 border border-green-100 bg-white p-7 shadow-lifted sm:p-9" style={{ transitionDelay: "100ms" }}>
              <h2 className="font-display text-2xl font-700 text-gray-900 mb-6">Request Your Appointment</h2>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
