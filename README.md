# Aastha Nature Cure Clinic — Frontend (Next.js)

White + pure green theme, Playfair Display + Nunito typography, animated
sections (scroll reveals, sliding testimonials, hover effects), fully
responsive.

## Local setup

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL to your backend
npm run dev                   # http://localhost:3000
```

## Structure

```
app/            Routes: home, services, packages, appointment, about, contact
components/     Navbar, Footer, Hero, ServiceCard, AppointmentForm, Testimonials,
                StatsBar, ScrollAnimator
lib/            api.js (fetch wrapper), constants.js (all 9 service categories +
                44 treatments transcribed from the clinic's price lists), validators.js
public/images/  logo.png — the real clinic logo (lotus mark)
```

## Design system

- **Colors**: pure green (`green-600` `#1e7d22` primary, full 50–950 scale) on
  white/off-white — matching the clinic's actual signage color.
- **Fonts**: Playfair Display (headings) + Nunito (body), loaded via
  `next/font/google`.
- **Animations**: `ScrollAnimator` (IntersectionObserver) fades/slides
  sections into view as you scroll; `Testimonials` auto-rotates every 5s;
  cards lift and images zoom on hover; buttons have press/hover transitions.
- **Images**: `lib/constants.js → PHOTOS` holds placeholder Unsplash photos
  (freely licensed) — swap these URLs for real clinic photography any time.

## Deployment (Vercel)

1. Import `frontend/` as a new Vercel project.
2. Set `NEXT_PUBLIC_API_URL` to your deployed Django backend URL.
3. Deploy.
