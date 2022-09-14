// Import Library
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// Import Components
import CheckoutForm from "../../FormComponents/CheckoutForm";
import { getDetailGame } from "../../../services/fetchData";
import axios from "axios";

const DetailPage = () => {
  const [form, setForm] = useState({ accountPlayer: "" }),
    [gameList, setGameList] = useState([]);
  const router = useRouter();

  // Callback API
  const getDetailGameData = useCallback(async () => {
    const data = await getDetailGame();
    setGameList(data);
  }, []);

  useEffect(() => {
    getDetailGameData();
  }, []);

  // Handle Change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = () => {
    router.push("/checkout");
  };
  return (
    <section className="detail pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="detail-header pb-50">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up Now</h2>
          <p className="text-lg color-palette-1 mb-0">Perkuat akun anda dan jadilah pemenang</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
            <div className="row align-items-center">
              <div className="col-md-12 col-4">
                <img src={`https://bwa-topup-store.herokuapp.com/uploads/cover-games/`} width="280" height="380" className="img-fluid" alt="cover-game" />
              </div>
              {/* Mobile: Game title */}
              <div className="col-md-12 col-8 d-md-none d-block">
                <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
                  Mobile Legends:
                  <br />
                  The New Battle 2021
                </h2>
                <p className="text-sm color-palette-2 text-start mb-0">Category: Mobile</p>
              </div>
              {/* Desktop: Game title */}
              <div className="pb-50 pt-10 d-md-block d-none">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
                  Mobile Legends:
                  <br />
                  The New Battle 2021
                </h2>
                <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
            {/* Checkout Form */}
            <CheckoutForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
