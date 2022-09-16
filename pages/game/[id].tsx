// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Components
import Navbar from "../../components/PartsComponents/Navbar";
import DetailPage from "../../components/PagesComponents/DetailPage";
import Footer from "../../components/PartsComponents/Footer";
import { getData } from "../../services/fetchData";

const DetailGame: NextPage = ({ dataDetail }: any) => {
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
      <DetailPage data={dataDetail} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailGame;

// Fetch API
export async function getServerSideProps(context: any) {
  // API Settings
  const ROOT_API = process.env.NEXT_PUBLIC_API_PRO,
    API_VERSION = "api/v1-player";

  const reqServer = await getData(`${ROOT_API}/${API_VERSION}/player/game/${context.params.id}`),
    res = reqServer.data;

  // console.log(res.data);

  // Pass data via props
  return { props: { dataDetail: res.data } };
}
