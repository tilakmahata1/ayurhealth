import Link from "next/link";
import Image from "next/image";
import { CLINIC_NAME, CLINIC_PHONES, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_TAGLINE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-50">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none" style={{ height: 48 }}>
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 48V24C240 0 480 48 720 24C960 0 1200 48 1440 24V48H0Z" fill="white" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block rounded-xl bg-white px-3 py-2">
              <Image src="/images/logo.png" alt={CLINIC_NAME} width={180} height={68} className="h-12 w-auto" />
            </div>
            <p className="mt-3 font-display text-sm italic text-green-300">{CLINIC_TAGLINE}</p>
            <p className="mt-3 font-body text-xs leading-relaxed text-green-200 max-w-xs">
              Holistic, drug-free healing through physiotherapy, acupuncture, naturopathy and yoga in the heart of Kathmandu.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs font-700 uppercase tracking-wider text-green-400 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring font-body text-sm text-green-200 transition-colors hover:text-white">
                    › {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/appointment" className="focus-ring font-body text-sm text-green-300 font-700 transition-colors hover:text-white">
                  › Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-body text-xs font-700 uppercase tracking-wider text-green-400 mb-4">Our Services</p>
            <ul className="space-y-2">
              {["Physiotherapy","Acupuncture","Cupping Therapy","Naturopathy","Massage Therapy","Shirodhara","Yoga"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="focus-ring font-body text-xs text-green-200 hover:text-white transition-colors">
                    🌿 {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-700 uppercase tracking-wider text-green-400 mb-4">Contact Us</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 font-body text-sm text-green-200">
                <span className="mt-0.5">📍</span>
                <span>{CLINIC_ADDRESS}</span>
              </div>
              {CLINIC_PHONES.map((p) => (
                <a key={p} href={`tel:${p}`} className="focus-ring flex items-center gap-2 font-body text-sm text-green-200 hover:text-white transition-colors">
                  📞 {p}
                </a>
              ))}
              <a href={`mailto:${CLINIC_EMAIL}`} className="focus-ring flex items-center gap-2 font-body text-xs text-green-200 hover:text-white transition-colors break-all">
                ✉️ {CLINIC_EMAIL}
              </a>
              <div className="flex items-center gap-2 font-body text-xs text-green-200">
                🕐 Open daily, 9:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-green-800 pt-6 font-body text-xs text-green-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</span>
          <span className="flex items-center gap-1">🌿 Members enjoy 10% discount on select treatments</span>
        </div>
      </div>
    </footer>
  );
}
