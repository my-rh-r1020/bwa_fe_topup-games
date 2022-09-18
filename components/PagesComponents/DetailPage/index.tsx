// Import Library
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// Import Components
import { getDetailGame } from "../../../services/fetchData";
import CheckoutForm from "../../FormComponents/CheckoutForm";
import DetailGameItem from "../../PartsComponents/DetailGame/detailGame";

const DetailPage = () => {
  // Use State
  const [form, setForm] = useState({ accountPlayer: "" }),
    [gameDetail, setGameDetail] = useState([]),
    // Use Router
    { query, isReady } = useRouter();

  // Callback API
  const getDetailGameData = useCallback(async (id: any) => {
    const data = await getDetailGame(id);

    setGameDetail(data.resultGame);
  }, []);

  // Use Effect
  useEffect(() => {
    if (isReady) {
      console.log("Router is ready to use", query.id);
      getDetailGameData(query.id);
    } else {
      console.log("Router is not ready to use");
    }
  }, [isReady]);

  // Handle Change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = () => {
    // router.push("/checkout");
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
            <DetailGameItem data={gameDetail} />
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
