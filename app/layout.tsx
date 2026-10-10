import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
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
    "Support St. Henry's Catholic Church Teen Ministry by entering our Spurs Jerseys & Hoodies or Designer Purses raffles.",
  openGraph: {
    title: "St. Henry's Teen Ministry | Fundraising Raffles",
    description:
      "Support St. Henry's Catholic Church Teen Ministry by entering our Spurs Jerseys & Hoodies or Designer Purses raffles.",
    url: siteUrl,
    siteName: "St. Henry's Teen Ministry Raffles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Henry's Teen Ministry | Fundraising Raffles",
    description:
      "Support St. Henry's Catholic Church Teen Ministry by entering our Spurs Jerseys & Hoodies or Designer Purses raffles.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">{children}</body>
    </html>
  );
}
