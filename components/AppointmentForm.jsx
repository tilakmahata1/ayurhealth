"use client";
import { useState, useCallback, useMemo } from "react";
import { TIME_SLOTS, SERVICE_CATEGORIES } from "@/lib/constants";
import { validateAppointment } from "@/lib/validators";
import api from "@/lib/api";

const INIT = { full_name: "", phone: "", email: "", service: "", preferred_date: "", preferred_time: "", message: "" };

export default function AppointmentForm() {
  const [v, setV] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle|loading|success|error

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const allServices = useMemo(() => SERVICE_CATEGORIES.flatMap((c) => c.services.map((s) => ({ name: `${c.name} — ${s.name}`, price: s.price }))), []);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setV((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  }, []);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validateAppointment(v);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      await api.createAppointment({ ...v, service: v.service || null });
      setStatus("success");
      setV(INIT);
    } catch (err) {
      setStatus("error");
      if (err.data && typeof err.data === "object") {
        const se = {};
        Object.entries(err.data).forEach(([k, m]) => { se[k] = Array.isArray(m) ? m[0] : String(m); });
        setErrors(se);
      }
    }
  }, [v]);

  if (status === "success") return (
    <div className="flex flex-col items-center justify-center rounded-xl3 bg-green-50 border border-green-200 p-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl shadow-green">✓</div>
      <h3 className="mt-5 font-display text-2xl font-700 text-gray-900">Appointment Requested!</h3>
      <p className="mt-3 font-body text-sm text-gray-600 max-w-sm">
        Thank you! Our front desk will call you shortly to confirm your appointment slot. We look forward to helping you heal naturally.
      </p>
      <button onClick={() => setStatus("idle")}
        className="btn-outline focus-ring mt-6 text-sm">
        Book Another
      </button>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name *" error={errors.full_name}>
          <input type="text" name="full_name" value={v.full_name} onChange={onChange} placeholder="Your full name" className="inp" />
        </Field>
        <Field label="Phone Number *" error={errors.phone}>
          <input type="tel" name="phone" value={v.phone} onChange={onChange} placeholder="98XXXXXXXX" className="inp" />
        </Field>
      </div>

      <Field label="Email (optional)" error={errors.email}>
        <input type="email" name="email" value={v.email} onChange={onChange} placeholder="you@example.com" className="inp" />
      </Field>

      <Field label="Select Service">
        <select name="service" value={v.service} onChange={onChange} className="inp">
          <option value="">— General Consultation —</option>
          {allServices.map((s, i) => (
            <option key={i} value={s.name}>{s.name} (Rs.{s.price})</option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred Date *" error={errors.preferred_date}>
          <input type="date" name="preferred_date" min={minDate} value={v.preferred_date} onChange={onChange} className="inp" />
        </Field>
        <Field label="Preferred Time *" error={errors.preferred_time}>
          <select name="preferred_time" value={v.preferred_time} onChange={onChange} className="inp">
            <option value="">Select time</option>
            {TIME_SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Message / Special Requirements">
        <textarea name="message" value={v.message} onChange={onChange} rows={3} placeholder="Tell us about your condition or any special requirements..." className="inp resize-none" />
      </Field>

      {status === "error" && !Object.keys(errors).length && (
        <p className="rounded-lg bg-red-50 border border-red-200 p-3 font-body text-sm text-red-600">
          Something went wrong. Please try again or call us directly at 01-4017787.
        </p>
      )}

      <button type="submit" disabled={status === "loading"}
        className="btn-green focus-ring w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? "⏳ Sending..." : "📅 Request Appointment"}
      </button>

      <style jsx>{`
        .inp {
          width: 100%;
          border: 1.5px solid #d1fae5;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-family: var(--font-nunito);
          font-size: 0.875rem;
          color: #1f2937;
          background: white;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .inp:focus { border-color: #2a9d2e; box-shadow: 0 0 0 3px rgba(42,157,46,0.12); }
        .inp::placeholder { color: #9ca3af; }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block font-body text-xs font-700 uppercase tracking-wide text-gray-600">{label}</label>
      {children}
      {error && <p className="mt-1 font-body text-xs text-red-500">{error}</p>}
    </div>
  );
}
