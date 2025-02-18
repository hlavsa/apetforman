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
  title: "Petra Formánková",
  description: "Sample torn-paper page with separate torn links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={reenieBeanie.className}>
      <body className="bodyContainer">
        {children}
      </body>
    </html>
  );
}
