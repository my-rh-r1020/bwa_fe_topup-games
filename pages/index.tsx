// Import Library
import Head from "next/head";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getData } from "../utils/fetchData";

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

// Fetch Data V2 - TypeScript
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Fetch data from API
//   const reqServer = await getData("api/v1-player/player/landing"),
//     res = reqServer.data;

//   console.log(res);

//   // Pass data via props
//   return { props: { data: res } };
// };
