import type { Metadata } from "next";
import { Fraunces, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sthenrysatx.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "St. Henry's Teen Ministry | Fundraising Raffles",
  description:
    "Support St. Henry's Catholic Church Teen Ministry by entering our Spurs Experience, Sports Bundle, or Designer Purse Bundle raffles. Drawing on Christmas Eve — no need to be present to win.",
  openGraph: {
    title: "St. Henry's Teen Ministry | Fundraising Raffles",
    description:
      "Support St. Henry's Catholic Church Teen Ministry by entering our Spurs Experience, Sports Bundle, or Designer Purse Bundle raffles. Drawing on Christmas Eve — no need to be present to win.",
    url: siteUrl,
    siteName: "St. Henry's Teen Ministry Raffles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Henry's Teen Ministry | Fundraising Raffles",
    description:
      "Support St. Henry's Catholic Church Teen Ministry by entering our Spurs Experience, Sports Bundle, or Designer Purse Bundle raffles. Drawing on Christmas Eve — no need to be present to win.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">{children}</body>
    </html>
  );
}
