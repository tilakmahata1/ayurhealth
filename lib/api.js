const BASE = process.env.NEXT_PUBLIC_API_URL || "https://aastha-clinic-backend.onrender.com";

async function req(path, opts = {}) {
  const res = await fetch(`${BASE}/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) { const e = new Error("API error"); e.status = res.status; e.data = data; throw e; }
  return data;
}

export const api = {
  createAppointment: (payload) =>
    req("/appointments/", { method: "POST", body: JSON.stringify(payload), cache: "no-store" }),
};

export default api;
