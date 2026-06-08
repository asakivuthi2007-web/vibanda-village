import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { site } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// SEO is generated from the central brand config (src/lib/data.ts → `site`),
// so a new client only needs to edit that one object.
const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1175, height: 730, alt: `${site.name} — ${site.tagline}` }],
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-noir text-ivory antialiased font-sans">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
