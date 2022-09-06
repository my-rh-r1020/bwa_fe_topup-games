// Import Library
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Import Components
import Header from "../components/HeaderPage";
import Features from "../components/Features";
import ListGame from "../components/ListGame";
import Story from "../components/Story";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Landing</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */}
      <Header />

      {/* Features */}
      <Features />

      {/* List Game */}
      <ListGame />

      {/* Story */}
      <Story />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
