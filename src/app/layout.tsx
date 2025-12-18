import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Rowdies } from "next/font/google";
import NavbarWrapper from "./NavbarWrapper";
import FoooterWrapper from "./FooterWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const rowdies = Rowdies({
  subsets: ["latin"],
  variable: "--rowdies",
  weight: "300",
});

// ✅ Centralized metadata for SEO, verification, and sharing
export const metadata: Metadata = {
  title: "NIE VED | College Notes, DSA Sheets & Interview Prep",
  description:
    "NIE VED helps NIE students prepare for placements with semester notes, 107-day DSA sheet, aptitude tests, interview experiences, and more.",
  keywords:
    "NIE VED, NIEVED, nieved, nie ved, college notes, DSA, aptitude, interview preparation, placement resources, coding sheet",
  verification: {
    google: "DA7E6RL06YxmIUQrGYODCSB2-o5hBjTqC1bLH-TUlM8",
  },
  openGraph: {
    title: "NIE VED | Study & Placement Platform",
    description:
      "Access college notes, DSA problems, aptitude practice, and real interview experiences all in one platform.",
    url: "https://nieved.vercel.app",
    siteName: "NIE VED",
    images: [
      {
        url: "https://nieved.vercel.app/VED.png",
        width: 1200,
        height: 630,
        alt: "NIE VED | Study Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIE VED | Study & Placement Platform",
    description:
      "Access college notes, DSA problems, aptitude practice, and real interview experiences all in one platform.",
    images: ["https://nieved.vercel.app/VED.png"],
  },
  alternates: {
    canonical: "https://nieved.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
        >
          {/* ✅ Google AdSense */}
          <Script
  id="adsense-init"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5826477007107638"
  crossOrigin="anonymous"
/>


          {/* ✅ Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-W42NPGFX9E"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W42NPGFX9E');
            `}
          </Script>

          <Suspense fallback={<Loading />}>
            <NavbarWrapper />
            {children}
            <FoooterWrapper />
          </Suspense>

          <span className={`${rowdies.variable}`}></span>
        </body>
      </html>
    </ClerkProvider>
  );
}
