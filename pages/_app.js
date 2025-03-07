import "../styles/globals.css";
import React from "react";
import { IBM_Plex_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// Import IBM Plex Serif from Google Fonts
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['500'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${ibmPlexSerif.variable}`}>
      <style jsx global>{`
        :root {
          --ibm-plex: ${ibmPlexSerif.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;