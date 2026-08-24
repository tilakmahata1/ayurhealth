export const CLINIC_NAME = "Aastha Nature Cure Clinic Pvt. Ltd.";
export const CLINIC_TAGLINE = "स्वस्थं जीवनम्";
export const CLINIC_TAGLINE_EN = "Healthy Living";
export const CLINIC_PHONES = ["01-4017787", "01-4017788"];
export const CLINIC_EMAIL = "info@aasthanaturecure.com.np";
export const CLINIC_ADDRESS = "Kupondole, lalitpur";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const TIME_SLOTS = [
  "9:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
];

// Curated Unsplash stock photos — swap with real clinic photos when ready
export const PHOTOS = {
  hero:           "https://images.unsplash.com/photo-1545463913-5083aa7359a6?w=1600&q=80",
  yoga:           "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  physiotherapy:  "https://images.unsplash.com/photo-1711936942379-a1e5cf94de8c?w=1200&q=80",
  massage:        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
  acupuncture:    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
  herbal:         "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80",
  clinic:         "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
  steam:          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
};

// ── Complete service catalogue transcribed from all three price-list images ──
export const SERVICE_CATEGORIES = [
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    icon: "⚡",
    color: "from-green-400 to-green-600",
    image: "physiotherapy",
    description: "Evidence-based modality physiotherapy with manual techniques.",
    services: [
      { name: "Normal Package", price: 500 },
      { name: "Manual Therapy", price: 150 },
      { name: "IFT (Interferential Therapy)", price: 200 },
      { name: "TENS", price: 150 },
      { name: "UST (Ultrasound Therapy)", price: 150 },
      { name: "MHT / MST", price: 100 },
      { name: "Traction", price: 150 },
      { name: "IR (Infrared)", price: 100 },
      { name: "IRR (15 mins)", price: 150 },
    ],
  },
  {
    id: "acupuncture",
    name: "Acupuncture",
    icon: "🪡",
    color: "from-green-500 to-green-700",
    image: "acupuncture",
    description: "Traditional needle therapy with moxa, stimulation and PNST.",
    services: [
      { name: "Needles + Moxa + Stimulation + PNST", price: 350 },
    ],
  },
  {
    id: "cupping",
    name: "Cupping Therapy",
    icon: "🫙",
    color: "from-green-600 to-green-800",
    image: "acupuncture",
    description: "Dry, wet, ice and oil cupping for deep tissue relief.",
    services: [
      { name: "Dry Cupping (Whole Body)", price: 500 },
      { name: "Wet Cupping (Parts, max 6 points)", price: 500 },
      { name: "Ice Cupping", price: 400 },
      { name: "Oil Cupping", price: 600 },
    ],
  },
  {
    id: "guasha",
    name: "Guasha",
    icon: "🌿",
    color: "from-green-400 to-green-700",
    image: "massage",
    description: "Traditional scraping therapy for circulation and pain.",
    services: [
      { name: "Guasha — Parts", price: 300 },
      { name: "Guasha — Whole Body", price: 1000 },
    ],
  },
  {
    id: "naturopathy",
    name: "Naturopathy Treatments",
    icon: "🍃",
    color: "from-green-300 to-green-600",
    image: "herbal",
    description: "Classical naturopathic treatments using water, packs and steam.",
    services: [
      { name: "Ice Massage", price: 50 },
      { name: "Packs — GH / Kidney / Castor Oil Pack", price: 120 },
      { name: "Patti (H / C / N)", price: 100 },
      { name: "Compress (H / C / N)", price: 50 },
      { name: "Steam Bath", price: 300 },
      { name: "Hip Bath (H / C / N)", price: 200 },
      { name: "Arm & Foot Bath (H / C / N)", price: 200 },
      { name: "Spinal Spray (H / C)", price: 250 },
      { name: "Enema — Warm Water", price: 300 },
      { name: "Enema — Herbal", price: 320 },
      { name: "Hot Mud Pack (Single)", price: 200, note: "Various: Rs.350" },
      { name: "Cold Mud Pack (Single)", price: 180, note: "Various: Rs.300" },
      { name: "Mud Paste", price: 200 },
    ],
  },
  {
    id: "massage",
    name: "Massage Therapy",
    icon: "🤲",
    color: "from-green-500 to-green-800",
    image: "massage",
    description: "Full body, vibro, hotstone, potali and foot reflexology.",
    services: [
      { name: "FB Massage — 60 mins", price: 1800 },
      { name: "Vibromassage (Coconut Oil, 60 mins)", price: 600 },
      { name: "FB Massage with Kapur — 60 mins", price: 1800 },
      { name: "Potali — Partial", price: 300 },
      { name: "Potali — Whole Back + Hands + Legs", price: 1200 },
      { name: "Hotstone Massage", price: 1800 },
      { name: "Drainage Massage", price: 300 },
      { name: "Foot Reflexology (30 mins)", price: 1000 },
      { name: "Partial BM (20 mins)", price: 450 },
    ],
  },
  {
    id: "shirodhara",
    name: "Shirodhara",
    icon: "💆",
    color: "from-green-400 to-green-700",
    image: "herbal",
    description: "Ancient Ayurvedic forehead oil therapy for mind and stress.",
    services: [
      { name: "Shirodhara with Oil", price: 2000 },
      { name: "Shirodhara with Water", price: 1000 },
    ],
  },
  {
    id: "herbal",
    name: "Herbal & Special Packs",
    icon: "🌱",
    color: "from-green-300 to-green-600",
    image: "herbal",
    description: "Herbal packs using mustard, flax seed, cabbage, neem & karela.",
    services: [
      { name: "Herbal Packs (Mustard / Flax Seed / Cabbage / Neem + Karela)", price: 300 },
      { name: "Wet Sheet Pack", price: 1000 },
    ],
  },
  {
    id: "yoga",
    name: "Yoga",
    icon: "🧘",
    color: "from-green-500 to-green-700",
    image: "yoga",
    description: "Monthly group yoga and private Jalneti cleansing sessions.",
    services: [
      { name: "Yoga — Monthly", price: 3500 },
      { name: "Jalneti", price: 150 },
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sunita Sharma",
    treatment: "Physiotherapy",
    quote: "After months of back pain, the physiotherapy team at Aastha gave me my life back. The traction and manual therapy sessions were transformative.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bikash Tamang",
    treatment: "Shirodhara",
    quote: "The Shirodhara with oil session was the most relaxing hour of my life. My stress levels have dropped significantly since starting treatment here.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maya Gurung",
    treatment: "Yoga & Naturopathy",
    quote: "I joined the monthly yoga program and added steam bath sessions. Three months in, I sleep better, feel more energetic and have lost weight naturally.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ramesh Thapa",
    treatment: "Acupuncture",
    quote: "I was skeptical about acupuncture, but three sessions in and my chronic knee pain is almost gone. The therapists are extremely skilled and attentive.",
    rating: 5,
  },
  {
    id: 5,
    name: "Puja Maharjan",
    treatment: "Massage & Cupping",
    quote: "The hotstone massage followed by cupping completely relieved my shoulder tension. I recommend Aastha to everyone I know.",
    rating: 5,
  },
];

export const STATS = [
  { number: "5000+", label: "Patients Treated" },
  { number: "15+", label: "Therapies Offered" },
  { number: "10+", label: "Years of Healing" },
  { number: "98%", label: "Patient Satisfaction" },
];
