import React from "react";

import TextInput from "../../BasicComponents/TextInput";
import Button from "../../BasicComponents/Buttons";

type SigninProps = {
  form: any;
  handleChange: any;
  handleSubmit: any;
  handleRouter: any;
};

const SigninForm = ({ form, handleChange, handleSubmit, handleRouter }: SigninProps) => {
  return (
    <form action="">
      {/* Email */}
      <TextInput label="Email Address" type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />

      {/* Password */}
      <TextInput label="Password (6 characters)" type="password" name="password" value={form.password} placeholder="Type your password" onChange={handleChange} />

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Button className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" action={handleSubmit}>
          Continue to Sign In
        </Button>
        <Button className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill" action={handleRouter}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
