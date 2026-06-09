import type { Metadata } from 'next';
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: 'VetCare — Compassionate Veterinary Care',
    template: `%s — VetCare`,
  },
  description:
    'VetCare offers compassionate, professional veterinary services including checkups, vaccinations, surgery, dental care, grooming, and 24/7 emergency care for your pets.',
  keywords: [
    'veterinary',
    'vet clinic',
    'pet care',
    'animal hospital',
    'dog vet',
    'cat vet',
    'pet grooming',
    '24/7 emergency vet',
    'vaccinations',
    'pet surgery',
  ],
  authors: [
    {
      name: 'VetCare',
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  creator: 'VetCare',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'VetCare — Compassionate Veterinary Care',
    description:
      'Expert veterinary services for your beloved pets. Book an appointment today.',
    images: [
      {
        url: '/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'VetCare — Veterinary Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VetCare — Compassionate Veterinary Care',
    description:
      'Expert veterinary services for your beloved pets. Book an appointment today.',
    images: '/opengraph.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
