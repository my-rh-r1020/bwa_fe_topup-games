// Import Library
import Head from "next/head";
import { NextPage } from "next";

// Import Component
import SettingsPage from "../../components/Members/setting";

const Settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>StoreGG || Settings</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Settings */}
      <SettingsPage />
    </>
  );
};

export default Settings;
