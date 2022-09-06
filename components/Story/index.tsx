import React from "react";

export default function Story() {
  return (
    <>
      {/* Reached */}
      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">290M+</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Players Top Up</p>
            </div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">12.500</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Games Available</p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">99,9%</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Happy Players</p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">4.7</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Rating Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
              <img src="/images/Header-9.png" width="612" height="452" className="img-fluid" alt="image-story" />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Win the battle.
                  <br />
                  Be the Champion.
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  Kami menyediakan jutaan cara untuk
                  <br className="d-sm-block d-none" />
                  membantu players menjadi
                  <br className="d-sm-block d-none" />
                  pemenang sejati
                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <a className="btn btn-read text-lg rounded-pill" href="#" role="button">
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
