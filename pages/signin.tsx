// Import Library
import { NextPage } from "next";

// Import Components
import SignPage from "../components/SigninPage";

// V1
const Signin: NextPage = () => {
  return (
    // Signin Page
    <SignPage />
  );
};

export default Signin;

// V2
// export default function Signin({}:NextPage){}
