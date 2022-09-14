// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Components
import Navbar from "../../components/PartsComponents/Navbar";
import DetailPage from "../../components/PagesComponents/DetailPage";
import Footer from "../../components/PartsComponents/Footer";

const DetailGame: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Game</title>
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
