import "../styles/globals.css";
import React from "react";
import { Reenie_Beanie, IBM_Plex_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['500'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-reenie',
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${reenieBeanie.variable} ${ibmPlexSerif.variable}`}>
      <style jsx global>{`
        :root {
          --reenie-beanie: ${reenieBeanie.style.fontFamily};
          --ibm-plex: ${ibmPlexSerif.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />

    </div>
  );
}

export default MyApp;