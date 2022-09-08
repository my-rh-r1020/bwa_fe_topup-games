// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Component
import TransactionsDetailPage from "../../components/Members/transactions-detail";

const TransactionsDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Transactions</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Transactions Detail */}
      <TransactionsDetailPage />
    </>
  );
};

export default TransactionsDetail;
