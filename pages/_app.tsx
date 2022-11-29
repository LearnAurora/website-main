import "../styles/globals.css";
import type { AppProps } from "next/app";

import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
