export function validateAppointment(v) {
  const e = {};
  if (!v.full_name?.trim() || v.full_name.trim().length < 2) e.full_name = "Please enter your full name.";
  const digits = (v.phone || "").replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) e.phone = "Please enter a valid phone number.";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email.";
  if (!v.preferred_date) e.preferred_date = "Please choose a date.";
  else {
    const today = new Date(); today.setHours(0,0,0,0);
    if (new Date(v.preferred_date) < today) e.preferred_date = "Date cannot be in the past.";
  }
  if (!v.preferred_time) e.preferred_time = "Please select a time.";
  return e;
}
