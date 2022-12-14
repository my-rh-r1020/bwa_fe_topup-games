// Import Library
import React from "react";
import { useRouter } from "next/router";

// Import Component
import Button from "../../BasicComponents/Buttons";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();

  // Handle Router
  const handleRouter = () => {
    router.push("/checkout/success-checkout");
  };
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <img src="icons/logo.svg"></img>
            </a>
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout Now</h2>
        </div>
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
          <div className="pe-4">
            <div className="cropped">
              <img src="/images/Thumbnail-3.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div>
            <p className="fw-bold text-xl color-palette-1 mb-10">
              Mobile Legends:
              <br />
              The New Battle 2021
            </p>
            <p className="color-palette-2 m-0">Category: Mobile</p>
          </div>
        </div>
        <hr />
        <div className="purchase pt-md-50 pt-30">
          <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
          <p className="text-lg color-palette-1 mb-20">
            Your Game Account <span className="purchase-details">masayoshizero</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Order ID <span className="purchase-details">#GG001</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Item <span className="purchase-details">250 Diamonds</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Price <span className="purchase-details">Rp 42.280.500</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Tax (10%) <span className="purchase-details">Rp 4.228.000</span>
          </p>
          <p className="text-lg color-palette-1 mb-20 fw-bold">
            Total <span className="purchase-details color-palette-4 fw-bold">Rp 55.000.600</span>
          </p>
        </div>
        <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
          <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
          <p className="text-lg color-palette-1 mb-20">
            Your Account Name <span className="purchase-details">Masayoshi Angga Zero</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Type <span className="payment-details">Worldwide Transfer</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Bank Name <span className="payment-details">Mandiri</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Bank Account Name <span className="payment-details">PT Store GG Indonesia</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Bank Number <span className="payment-details">1800 - 9090 - 2021</span>
          </p>
        </div>
        <label className="checkbox-label text-lg color-palette-1">
          I have transferred the money
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <Button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" action={handleRouter}>
            Confirm Payment
          </Button>
        </div>
      </div>
    </section>
  );
}
