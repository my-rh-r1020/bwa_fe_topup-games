// Import Library
import { NextPage } from "next";
import Head from "next/head";

// Import Components
import SignupPage from "../components/PagesComponents/SignupPage";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Sign Up</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Signup */}
      <SignupPage />
    </>
  );
};

export default Signup;
