// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Components
import Navbar from "../../components/Navbar";
import DetailPage from "../../components/DetailPage";
import Footer from "../../components/Footer";

const DetailGame: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Detail</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Detail Content */}
      <DetailPage />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailGame;
