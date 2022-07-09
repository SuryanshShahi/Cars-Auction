import React from "react";

function WhyUs() {
  return (
    <section>
      <div style={{marginTop:"150px"}}>
        <div className="container justify-content-center d-flex" id="whyus">
          <div className="text-center text-white pt-3">
            <div
              className="px-5"
              style={{
                fontSize: "17px",
                fontWeight: "500",
                width: "fit-content",
                background: "black",
                borderRadius: "50px",
              }}
            >
              Why{" "}
              <span
                className=""
                style={{ color: "#ff9800", fontWeight: "500" }}
              >
                Us
              </span>
            </div>
          </div>
        </div>
        <div className="justify-content-center d-flex my-5" style={{height:"100%"}}>
          <div
            className="bg-white shadow-lg m-2"
            style={{ maxWidth: "800px", height:"100%", borderRadius: "50px" }}
          >
            <ul className="m-lg-5 my-5 mx-2">
              <li className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
