import { NextPage } from "next";
// Import Library
import Head from "next/head";

// Import Components
import Footer from "../../components/Footer";
import Header from "../../components/HeaderPage";

const DetailGame: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Detail Game</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Detail Content */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailGame;
