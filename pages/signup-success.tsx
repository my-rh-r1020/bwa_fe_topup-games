// Import Library
import { NextPage } from "next";
import Head from "next/head";

// Import Component
import SignUpSuccessPage from "../components/PagesComponents/SignupPage/signup-success";

const SignUpSuccess: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Signup Success</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Signup Success */}
      <SignUpSuccessPage />
    </>
  );
};

export default SignUpSuccess;
