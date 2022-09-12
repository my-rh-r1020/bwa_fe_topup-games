// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Component
import NotFoundPage from "../components/PagesComponents/NotFoundPage";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || 404</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 404 Not Found */}
      <NotFoundPage />
    </>
  );
};

export default NotFound;
