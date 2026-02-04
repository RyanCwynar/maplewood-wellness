import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maplewood Wellness Center | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for Maplewood Wellness Center, Coral Springs chiropractor. This is a demo site created by Ryan Cwynar to showcase modern web design.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Byldr",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230d9488' width='100' height='100' rx='15'/><text x='50' y='70' text-anchor='middle' font-size='60' fill='white' font-family='system-ui'>M</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Maplewood Wellness Center | Free Mockup",
    description: "A free website redesign mockup created by Ryan Cwynar for Maplewood Wellness Center",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
