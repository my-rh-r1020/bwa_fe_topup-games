// Import Library
import React from "react";

// Import Components
import Button from "../../BasicComponents/Buttons";
import TextInput from "../../BasicComponents/TextInput";
import ListPayments from "../../PartsComponents/DetailGame/listPayments";
import ListVoucher from "../../PartsComponents/DetailGame/listVouchers";

type CheckoutFormProps = {
  form: any;
  handleChange: any;
  handleSubmit: any;
};

export default function CheckoutForm({ form, handleChange, handleSubmit }: CheckoutFormProps) {
  return (
    <form action="/checkout" method="POST">
      {/* Game Account Form */}
      <TextInput label="Game Account" type="text" name="accountPlayer" placeholder="Enter your account game" value={form.accountPlayer} onChange={handleChange} />

      {/* Game Voucher List */}
      <ListVoucher />

      {/* Game Payment Method */}
      <ListPayments />

      {/* <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input type="text" className="form-control rounded-pill text-lg" id="bankAccount" name="bankAccount" aria-describedby="bankAccount" placeholder="Enter your Bank Account Name" />
      </div> */}
      <div className="d-sm-block d-flex flex-column w-100">
        <Button className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg" action={() => handleSubmit()}>
          Checkout Now
        </Button>
      </div>
    </form>
  );
}
