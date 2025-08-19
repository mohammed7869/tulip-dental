import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import LoaderProvider from "@/components/ui/loader";
import FloatingTextForm from "@/components/ui/floatingButton";
import GoogleTagManager from "@/components/GoogleTagManager";
import DynamicMetadata from "../../DynamicMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins", // optional: define CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tulip Dental Maplewood | Dentist in Maplewood, NJ | Cosmetic & Family Dentist",
  description: "Top-rated cosmetic & family dentist in Maplewood, NJ. Serving patients from Maplewood and nearby areas. Call 973-671-5500 or visit us at 1585 Springfield Avenue, Store #1, Maplewood, NJ 07040.",
  keywords: "dentist maplewood nj, cosmetic dentist maplewood, family dentist maplewood, dental implants maplewood, root canal maplewood, emergency dentist maplewood",
  authors: [{ name: "Tulip Dental Maplewood" }],
  creator: "Tulip Dental Maplewood",
  publisher: "Tulip Dental Maplewood",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tulipdentalmaplewood.com",
    siteName: "Tulip Dental Maplewood",
    title: "Tulip Dental Maplewood | Dentist in Maplewood, NJ | Cosmetic & Family Dentist",
    description: "Top-rated cosmetic & family dentist in Maplewood, NJ. Serving patients from Maplewood and nearby areas. Call 973-671-5500 or visit us at 1585 Springfield Avenue, Store #1, Maplewood, NJ 07040.",
    images: [
      {
        url: "/Images/tulip-large-Blue-white-website-header.png",
        width: 1200,
        height: 630,
        alt: "Tulip Dental Maplewood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulip Dental Maplewood | Dentist in Maplewood, NJ | Cosmetic & Family Dentist",
    description: "Top-rated cosmetic & family dentist in Maplewood, NJ. Serving patients from Maplewood and nearby areas. Call 973-671-5500 or visit us at 1585 Springfield Avenue, Store #1, Maplewood, NJ 07040.",
    images: ["/Images/tulip-large-Blue-white-website-header.png"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="canonical" href="https://tulipdentalmaplewood.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Images/tulip-large-Blue-white-website-header.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased pt-18 md:pt-20`}
      >
        <GoogleTagManager />
        <DynamicMetadata />
        <Header />
        <LoaderProvider>{children}</LoaderProvider>
        <Footer />
        <FloatingTextForm />
      </body>
    </html>
  );
}
