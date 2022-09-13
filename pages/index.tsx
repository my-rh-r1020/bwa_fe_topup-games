// Import Library
import Head from "next/head";
import type { NextPage } from "next";

// Import Components
import Header from "../components/PagesComponents/HeaderPage";
import Features from "../components/PartsComponents/Features";
import ListGame from "../components/PartsComponents/ListGame";
import Story from "../components/PartsComponents/Story";
import Footer from "../components/PartsComponents/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <script>AOS.init();</script>
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

// Fetch Data V1
// export async function getServerSideProps(context: any) {
//   // Fetch data from API
//   const reqServer = await getData("api/v1-player/player/landing", context),
//     res = reqServer.data;

//   // Pass data via props
//   return { props: { data: res } };
// }
