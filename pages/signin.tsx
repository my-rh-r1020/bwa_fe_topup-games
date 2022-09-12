// Import Library
import { NextPage } from "next";
import Head from "next/head";

// Import Components
import SignPage from "../components/PagesComponents/SigninPage";

// V1
const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Sign In</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Signin Page */}
      <SignPage />
    </>
  );
};

export default Signin;

// V2
// export default function Signin({}:NextPage){}
