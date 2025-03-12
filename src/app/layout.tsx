import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Rowdies } from "next/font/google";
import NavbarWrapper from "./NavbarWrapper";

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
  weight:  "300"
})

export const metadata: Metadata = {
  title: "NIE VED",
  description: "An App For the Students By The Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5826477007107638"
     crossOrigin="anonymous"></script>

{/* <ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-5826477007107638"
     data-ad-slot="5156871218"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins> */}
{/* <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5826477007107638"
     crossOrigin="anonymous"></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-5826477007107638"
        ></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W42NPGFX9E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W42NPGFX9E');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <NavbarWrapper /> 

          {children}
        </Suspense>
        <span className={`${rowdies.variable}`}></span>
      </body>
    </html>
  );
}
