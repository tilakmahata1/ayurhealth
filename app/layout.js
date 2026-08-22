import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Aastha Nature Cure Clinic Pvt. Ltd. — Kathmandu",
  description:
    "Natural healing through physiotherapy, acupuncture, naturopathy and yoga. स्वस्थं जीवनम् — Healthy Living at Aastha Nature Cure Clinic, Kathmandu.",
  keywords: "physiotherapy, acupuncture, naturopathy, yoga, cupping, Kathmandu, nature cure, holistic health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
