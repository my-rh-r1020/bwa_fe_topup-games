// Import Library
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import SigninForm from "../../FormComponents/SigninForm";

const SignPage = () => {
  const [form, setForm] = useState({ email: "", password: "" }),
    router = useRouter();

  // Handle Router
  const handleRouter = () => {
    router.push("/signup");
  };

  // Handle Change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = () => {};

  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <div className="container mx-auto">
            <div className="pb-50">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="icons/logo.svg"></img>
                </a>
              </Link>
            </div>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>

            {/* Sign In Form */}
            <SigninForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} handleRouter={handleRouter} />
          </div>
        </div>
        <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <img src="/images/Header-9.png" width="502" height="391.21" className="img-fluid pb-50" alt="Signin Image" />
          <h2 className="text-4xl fw-bold text-white mb-30">
            Win the battle.
            <br />
            Be the Champion.
          </h2>
          <p className="text-white m-0">
            Kami menyediakan jutaan cara untuk
            <br />
            membantu players menjadi
            <br />
            pemenang sejati
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignPage;
