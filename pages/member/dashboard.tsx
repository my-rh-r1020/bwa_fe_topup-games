// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Component
import DashboardPage from "../../components/Members/dashboard";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Dashboard</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Dashboard */}
      <DashboardPage />
    </>
  );
};

export default Dashboard;
