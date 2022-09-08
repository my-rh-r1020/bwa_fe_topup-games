// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Components
import CheckoutPage from "../../components/CheckoutPage/checkout";

const Checkout: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Checkout</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Checkout */}
      <CheckoutPage />
    </>
  );
};

export default Checkout;
