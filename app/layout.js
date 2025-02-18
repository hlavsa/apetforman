// app/layout.js
import "./globals.css";
import { Reenie_Beanie } from "next/font/google";
import React from "react";

import { IBM_Plex_Serif } from 'next/font/google';

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['500']
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Petra Formánková | Tetování & Umění Teplice',
  description: 'Autorské tetování, malba a ilustrace v Teplicích. Individuální přístup ke každému projektu, originální návrhy a pečlivé zpracování.',
  keywords: [
    'tetování Teplice',
    'tetovací studio Teplice',
    'autorské tetování',
    'umělecké tetování',
    'malířka Teplice',
    'ilustrátorka Teplice',
    'Petra Formánková',
    'umělecká malba',
    'originální tetování',
    'parte ilustrace',
    'umělkyně Teplice',
    'tetování Ústecký kraj',
    'kreativní tetování',
    'jemné tetování',
    'custom tetování'
  ].join(', '),
  authors: [{ name: 'Petra Formánková' }],
  metadataBase: new URL('https://apetforman.vercel.app'),
  openGraph: {
    title: 'Petra Formánková | Tetování & Umění Teplice',
    description: 'Autorské tetování, malba a ilustrace v Teplicích. Individuální přístup ke každému projektu.',
    url: 'https://apetforman.vercel.app',
    siteName: 'Petra Formánková',
    locale: 'cs_CZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://apetforman.vercel.app',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'verification_token', // If you have Google Search Console verification
  },
  category: 'art & tattoo',
  language: 'cs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={reenieBeanie.className}>
      <body className="bodyContainer">
        {children}
      </body>
    </html>
  );
}
