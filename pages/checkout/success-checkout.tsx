// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Component
import SuccessCheckoutPage from "../../components/PagesComponents/CheckoutPage/success-checkout";

const SuccessCheckout: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Success Checkout</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Success Checkout */}
      <SuccessCheckoutPage />
    </>
  );
};

export default SuccessCheckout;
