import "../styles/globals.css";
import React from "react";
import Script from 'next/script';

import { Reenie_Beanie } from "next/font/google";

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

function MyApp({ Component, pageProps }) {
  return (
    <>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
