import Head from "next/head";

import "../styles/globals.css";
import "../styles/myweb.css";
import "../styles/utilities.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* AOS Animation */}
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
