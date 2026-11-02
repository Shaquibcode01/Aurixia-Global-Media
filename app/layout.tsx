import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import CookieBanner from "@/components/CookieBanner";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurixiaglobalmedia.com"),
  title: { default: "Aurixia Global Media — Digital Marketing Agency, Delhi NCR", template: "%s | Aurixia Global Media" },
  description: "Aurixia Global Media is a Delhi NCR digital marketing agency turning ambitious brands into category leaders through SEO, performance marketing, social, content and brand identity.",
  openGraph: { title: "Aurixia Global Media", description: "We build brands that move.", type: "website", images: ["/logo-crop.jpg"] },
};
export const viewport: Viewport = { themeColor: "#000080" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${dm.variable} ${playfair.variable}`}>
      <body>
        <Effects />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
