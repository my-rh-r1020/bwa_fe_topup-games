// Import Library
import React from "react";

export default function ListPayments() {
  return (
    <div className="pb-md-50 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
      <fieldset id="paymentMethod">
        <div className="row justify-content-between">
          <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" htmlFor="transfer">
            <input className="d-none" type="radio" id="transfer" name="paymentMethod" value="transfer" />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 fw-medium m-0">Transfer Bank</p>
                <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                  <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">Bank Name</p>
            </div>
          </label>
          <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" htmlFor="visa">
            <input className="d-none" type="radio" id="visa" name="paymentMethod" value="visa" />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 fw-medium m-0">E-Money</p>
                <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                  <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">E-Money Name</p>
            </div>
          </label>
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </fieldset>
    </div>
  );
}
