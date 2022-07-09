import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import car from "./images/car.jpg";
import newsletter from "./images/newsletter.png";
import Data from "./Data";
import swal from "sweetalert";

function Home() {
  const [count, setCount] = useState(82);

  const show = () => {
    var x = document.getElementById("exterior");
    var y = document.getElementById("interior");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  };

  return (
    <section id="home">
      <div className="row gx-0 mb-5" style={{ marginTop: "250px" }}>
        <div className="col-lg-6 col-md-6 col-12 justify-content-center d-flex p-3">
          <div className="">
            <div
              className="text-center pb-4"
              style={{ color: "#ff9800", fontWeight: "500", fontSize: "35px" }}
            >
              For Dealers
            </div>
            <div
              className="p-3 justify-content-center d-flex bg-white"
              style={{
                maxWidth: "400px",
                maxHeight: "600px",
                boxShadow: "grey 0px 0px 15px -3px",
                borderRadius: "30px",
              }}
            >
              <div
                className="bg-white position-absolute"
                style={{
                  height: "20px",
                  width: "150px",
                  zIndex: 1,
                  borderRadius: "0px 0px 40px 40px",
                }}
              >
                <span
                  className="fa fa-camera pl-3 position-absolute"
                  style={{ fontSize: "10px", marginTop: "3px" }}
                ></span>
                <div className="align-items-center text-center d-flex">
                  <div
                    className="w-50"
                    style={{
                      height: "3px",
                      background: "black",
                      margin: "6px 0px 0px 43px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="effects position-relative">
                <NavLink
                  className="text-decoration-none"
                  to="/"
                  data-target="#mymodal"
                  data-toggle="modal"
                >
                  <div className="position-absolute w-100">
                    <div
                    className="text-white d-flex px-3"
                    style={{ background: "black", borderRadius:"20px 20px 0px 0px" }}
                    >
                      <div style={{ fontSize: "12px" }}>Airtel | Jio 4G</div>
                      <div className="ml-auto align-items-center d-flex">
                        <div
                          className="px-1 rounded"
                          style={{
                            fontSize: "7px",
                            color: "white",
                            width: "fit-content",
                          }}
                        >
                          vo <br></br> LTE
                        </div>
                        <div
                          className="fa fa-signal px-1"
                          style={{ fontSize: "12px" }}
                        ></div>
                        <div
                          className="px-1 rounded"
                          style={{
                            fontSize: "7px",
                            color: "white",
                            width: "fit-content",
                          }}
                        >
                          vo <br></br> LTE
                        </div>
                        <div
                          className="fa fa-signal px-1"
                          style={{ fontSize: "12px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={car}
                    className="img-fluid"
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                    alt="car"
                  />
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    Kia Seltos
                  </div>
                  <hr></hr>
                  <div className="row gx-0 py-2">
                    <div className="col-6">
                      <div className="row gx-0">
                        <div className="col-4 justify-content-center align-items-center d-flex">
                          <div className="fa fa-gavel fa-2x text-center text-success"></div>
                        </div>
                        <div
                          className="col-8"
                          style={{ borderRight: "2px solid grey" }}
                        >
                          <div
                            className="text-success"
                            style={{ fontWeight: "500" }}
                          >
                            Current Bid
                          </div>
                          <div style={{ fontSize: "25px" }}>$876.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row gx-0">
                        <div className="col-4 justify-content-center align-items-center d-flex">
                          <div className="fa fa-suitcase fa-2x text-center text-danger"></div>
                        </div>
                        <div className="col-8">
                          <div
                            className="text-danger"
                            style={{ fontWeight: "500" }}
                          >
                            Buy Now
                          </div>
                          <div style={{ fontSize: "25px" }}>$500.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="d-flex py-2">
                    <div
                      className="w-75 pl-3"
                      style={{
                        color: "#ff6983",
                        fontWeight: "500",
                        fontSize: "1.2rem",
                        borderRight: "2px solid grey",
                      }}
                    >
                      0d : 7h : 51m : 56s
                    </div>
                    <div
                      className="text-success text-center w-25"
                      style={{ fontWeight: "500" }}
                    >
                      {count} Bids
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center d-flex pt-2">
                    <div
                      className="rounded-pill border-0 px-lg-4 py-1 mb-4 text-white mt-4"
                      style={{
                        width: "fit-content",
                        fontWeight: "500",
                        outline: "none",
                      }}
                    >
                      Submit A Bid
                    </div>
                  </div>
                  <div className="arrow2 py-5 justify-content-center text-white align-items-center d-flex">
                    <div
                      className="px-4 pb-1"
                      style={{
                        backgroundColor: "#FF9800",
                        borderRadius: "50px",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        className="fa fa-play pr-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Preview
                      </span>
                    </div>
                  </div>{" "}
                </NavLink>
              </div>
            </div>
            <div className="justify-content-center d-flex">
              <a
                href="#"
                className="rounded-pill border-0 px-lg-4 py-2 mb-4 text-white mt-4 text-decoration-none"
                style={{
                  width: "fit-content",
                  fontWeight: "500",
                  outline: "none",
                }}
                download
              >
                Download App
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 justify-content-center d-flex p-3">
          <div>
            <div
              className="text-center pb-4"
              style={{ color: "#ff9800", fontWeight: "500", fontSize: "35px" }}
            >
              For Owners
            </div>
            <div
              className="p-3 justify-content-center d-flex bg-white"
              style={{
                maxWidth: "400px",
                maxHeight: "600px",
                // width: "400px",
                // height: "600px",
                boxShadow: "grey 0px 0px 15px -3px",
                borderRadius: "30px",
              }}
            >
              {" "}
              <div
                className="bg-white position-absolute"
                style={{
                  height: "20px",
                  width: "150px",
                  zIndex: 1,
                  borderRadius: "0px 0px 40px 40px",
                }}
              >
                <span
                  className="fa fa-camera pl-3 position-absolute"
                  style={{ fontSize: "10px", marginTop: "3px" }}
                ></span>
                <div className="align-items-center text-center d-flex">
                  <div
                    className="w-50"
                    style={{
                      height: "3px",
                      background: "black",
                      margin: "6px 0px 0px 43px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="position-relative" id="owners">
                <div className="position-absolute w-100">
                  <div
                    className="text-white d-flex px-3"
                    style={{ background: "black", borderRadius:"20px 20px 0px 0px" }}
                  >
                    <div style={{ fontSize: "12px" }}>Airtel | Jio 4G</div>
                    <div className="ml-auto align-items-center d-flex">
                      <div
                        className="px-1 rounded"
                        style={{
                          fontSize: "7px",
                          color: "white",
                          width: "fit-content",
                        }}
                      >
                        vo <br></br> LTE
                      </div>
                      <div
                        className="fa fa-signal px-1"
                        style={{ fontSize: "12px" }}
                      ></div>
                      <div
                        className="px-1 rounded"
                        style={{
                          fontSize: "7px",
                          color: "white",
                          width: "fit-content",
                        }}
                      >
                        vo <br></br> LTE
                      </div>
                      <div
                        className="fa fa-signal px-1"
                        style={{ fontSize: "12px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="effects position-relative">
                  <NavLink
                    className="text-decoration-none"
                    to="/"
                    data-target="#mymodal1"
                    data-toggle="modal"
                  >
                    <div>
                      <div
                        className="text-center text-white mt-4"
                        style={{ fontSize: "4.6vh" }}
                      >
                        SELL YOUR CAR AT THE BEST PRICE
                      </div>
                      <div className="text-center text-white pt-3">
                        <div className="fa fa-check-circle px-2">
                          &nbsp;Sell From Your Home
                        </div>
                        <div className="fa fa-check-circle px-2">
                          &nbsp;Instant Payment
                        </div>
                        <div className="fa fa-check-circle px-2">
                          &nbsp;Free RC Transfer
                        </div>
                      </div>

                      <div className="details px-3">
                        <div className="row">
                          <div className="col-6">
                            <select>
                              <option>Brand</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select>
                              <option>Model</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select>
                              <option>Year</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select>
                              <option>Variant</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select>
                              <option>Kms Driven</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select>
                              <option>Reg. State</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select>
                              <option>Mobile no.</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="justify-content-center align-items-center d-flex pb-3 pt-2">
                      <div
                        className="rounded-pill border-0 px-lg-4 py-1 mb-4 text-white mt-4"
                        style={{
                          width: "fit-content",
                          fontWeight: "500",
                          outline: "none",
                        }}
                      >
                        Get Car Price
                      </div>
                    </div>
                    <div className="arrow2 py-5 justify-content-center text-white align-items-center d-flex">
                      <div
                        className="px-4 pb-1"
                        style={{
                          backgroundColor: "#FF9800",
                          borderRadius: "50px",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          className="fa fa-play pr-1"
                          style={{ fontSize: "12px" }}
                        ></span>
                        <span
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          Preview
                        </span>
                      </div>
                    </div>{" "}
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="justify-content-center d-flex">
              <a
                href="#"
                className="rounded-pill border-0 px-lg-4 py-2 mb-4 text-white mt-4 text-decoration-none"
                style={{
                  width: "fit-content",
                  fontWeight: "500",
                  outline: "none",
                }}
                download
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5" id="newsletter">
        <div className="justify-content-center d-flex">
          <div
            className="text-dark py-1 px-5"
            style={{
              width: "fit-content",
              fontSize: "17px",
              fontWeight: "500",
              background: "#ffe7c6",
              borderRadius: "50px",
            }}
          >
            News
            <span className="font-weight-bolder" style={{ color: "#ff9800" }}>
              {" "}
              Letter
            </span>
          </div>
        </div>
        <div className="justify-content-center d-flex mx-3">
          <div
            className="container shadow-lg my-5 p-3"
            style={{ borderRadius: "30px" }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <img src={newsletter} className="img-fluid" alt="newsletter" />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <span
                  className=""
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                    color: "rgb(66 7 165)",
                  }}
                >
                  {" "}
                  Subscribe our newsletter <br></br>
                  <h1 style={{ color: "black" }}>
                    To receive the latest news exclusive offers every week.
                  </h1>
                </span>
                <form
                  onSubmit={() => {
                    swal("", "Subscribed", "success", {
                      button: false,
                      timer: 2000,
                    });
                  }}
                >
                  {" "}
                  <div className="my-5 searchbox align-content-center d-flex">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      style={{ height: "65px", fontSize: "1.2rem" }}
                      className="emailInput form-control px-4 position-relative bg-white"
                      required
                    />
                    <div className="justify-content-end d-flex pr-lg-0">
                      <button
                        className="subscribe px-lg-5 px-4 shadow-lg btn text-white font-weight-light position-absolute"
                        style={{
                          height: "65px",
                          fontSize: "1.5rem",
                          fontWeight: "500",
                        }}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container justify-content-center d-flex" id="whyus">
        <div
          className="text-dark py-1 px-5"
          style={{
            fontSize: "17px",
            fontWeight: "500",
            background: "#ffe7c6",
            borderRadius: "50px",
          }}
        >
          Why{" "}
          <span className="font-weight-bolder" style={{ color: "#ff9800" }}>
            Us
          </span>
        </div>
      </div>

      <div className="modal fade " id="mymodal" style={{ background: "white" }}>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content modalcompare">
            <div className="">
              <div className="d-flex">
                <h1 className="text-white p-4 ">
                  CARS
                  <span
                    className="font-weight-bolder"
                    style={{ color: "#ff9800" }}
                  >
                    Auction
                  </span>
                </h1>
                <div
                  className="pr-5 pt-3 fa-2x ml-auto"
                  data-dismiss="modal"
                  style={{ cursor: "pointer" }}
                >
                  &times;
                </div>
              </div>
              <div className="text-center text-white my-4 justify-content-center d-flex">
                <div
                  className="px-3"
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    background: "black",
                    borderRadius: "50px",
                  }}
                >
                  Welcome to
                  <span
                    className="pl-1"
                    style={{ color: "#ff9800", fontWeight: "500" }}
                  >
                    CarsAuction
                  </span>
                </div>
              </div>
            </div>
            <div
              className=""
              style={{
                height: "30vh",
              }}
            >
              {Data.map((e) => {
                return (
                  <div>
                    <div className="justify-content-center d-flex">
                      <div className="">
                        <div className="px-4 pt-4" id="exterior">
                          {e.exterior}
                        </div>
                        <div className="px-4 pt-4" id="interior">
                          {e.interior}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="justify-content-center d-flex py-4">
                <button
                  className="rounded-pill border-0 text-white px-lg-5 py-2"
                  style={{ outline: "none", fontWeight: "500" }}
                  onClick={show}
                >
                  Interior view
                </button>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-12">
                    <div
                      className="font-weight-bolder"
                      style={{ fontSize: "3.5rem" }}
                    >
                      Kia Seltos
                    </div>
                    <div>
                      <span
                        className="pr-3"
                        style={{ borderRight: "2px solid grey" }}
                      >
                        Listing ID: 14076242
                      </span>
                      <span className="px-3">Item #: 7300-3356862</span>
                    </div>

                    <div
                      className="container my-4 px-4 py-5 shadow-lg"
                      style={{ background: "#ebf2ff", borderRadius: "20px" }}
                    >
                      <div className="d-flex pb-4">
                        <div
                          className=""
                          style={{ fontSize: "1.5rem", fontWeight: "500" }}
                        >
                          Current Price
                        </div>
                        <div
                          className="ml-auto text-success font-weight-bolder"
                          style={{ fontSize: "2.4rem" }}
                        >
                          US $700.00
                        </div>
                      </div>
                      <div className="d-flex">
                        <div style={{ fontSize: "1rem", color: "#52606d" }}>
                          Buyer's Premium
                        </div>
                        <div className="ml-auto" style={{ fontSize: "1.5rem" }}>
                          10.00%
                        </div>
                      </div>
                      <div className="d-flex">
                        <div style={{ fontSize: "1rem", color: "#52606d" }}>
                          Bid Increment (US)
                        </div>
                        <div className="ml-auto" style={{ fontSize: "1.5rem" }}>
                          $50.00
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div
                      className="d-flex py-3"
                    >
                      <span className="fa fa-gavel fa-3x"></span>
                      <input
                        type="text"
                        className="form-control mx-4 pl-4"
                        placeholder="Enter your bid amount"
                        style={{
                          borderRadius: "50px",
                          fontSize: "1.2rem",
                          height: "55px",
                          maxWidth: "64%",
                        }}
                        required
                      />
                      <button
                        className="border-0 text-white rounded-pill px-lg-5 shadow-sm"
                        style={{
                          outline: "none",
                          fontWeight: "500",
                        }}
                        onClick={() => setCount(count + 1)}
                      >
                        Submit A Bid
                      </button>
                    </div>
                    <hr></hr>

                    <div
                      className="d-flex kiaSeltos"
                      style={{ width: "100%", overflowX: "scroll" }}
                    >
                      <div>
                        <button
                          className="btn btn-primary border-0 rounded-pill px-lg-5 shadow-sm"
                          style={{
                            outline: "none",
                            height: "55px",
                            fontWeight: "500",
                          }}
                        >
                          BUY NOW: $4,200
                        </button>
                      </div>
                      <div className="px-5">
                        <button
                          className="wishlist px-lg-5 px-4 shadow-sm"
                          style={{
                            height: "55px",
                            borderRadius: "30px",
                          }}
                        >
                          <span className="fa fa-star pr-2"></span>
                          Add To Wishlist
                        </button>
                      </div>
                      <div className="align-items-center d-flex ml-auto">
                        <span style={{ fontWeight: "500", fontSize: "1.2rem" }}>
                          Share to:
                        </span>
                        <span className="fa fa-facebook px-2 fa-lg"></span>
                        <span className="fa fa-twitter px-2 fa-lg"></span>
                        <span className="fa fa-linkedin px-2 fa-lg"></span>
                        <span className="fa fa-instagram px-2 fa-lg"></span>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                  <div className="col-lg-4 col-12 pl-lg-4 mt-4">
                    <div
                      className="container py-5 "
                      style={{
                        border: "1px dashed grey",
                        borderRadius: "30px",
                      }}
                    >
                      <div
                        className="text-center"
                        style={{ fontSize: "1.3rem", fontWeight: "500" }}
                      >
                        This Auction Ends in:
                      </div>
                      <div
                        className="text-center"
                        style={{ fontSize: "2.2rem", color: "#ff9800" }}
                      >
                        0d : 7h : 51m : 56s
                      </div>
                      <hr style={{ height: "1.5px" }}></hr>

                      <div>
                        <div>
                          <span
                            className="fa fa-users fa-2x"
                            style={{ color: "#ff9800" }}
                          ></span>
                          <span
                            className="font-weight-bolder"
                            style={{
                              fontSize: "2.6rem",
                              paddingLeft: "30px",
                            }}
                          >
                            61
                          </span>
                          <div style={{ paddingLeft: "65px" }}>
                            Active Bidders
                          </div>
                        </div>
                        <div className="py-2">
                          <span
                            className="fa fa-eye"
                            style={{ color: "#ff9800", fontSize: "2.5rem" }}
                          ></span>
                          <span
                            className="font-weight-bolder pl-4"
                            style={{ fontSize: "2.6rem" }}
                          >
                            203
                          </span>
                          <div style={{ paddingLeft: "65px" }}>Watching</div>
                        </div>
                        <div>
                          <span
                            className="fa fa-gavel"
                            style={{ color: "#ff9800", fontSize: "2.5rem" }}
                          ></span>
                          <span
                            className="font-weight-bolder pl-4"
                            style={{ fontSize: "2.6rem" }}
                          >
                            {count}
                          </span>
                          <div style={{ paddingLeft: "65px" }}>Total Bids</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="justify-content-center d-flex py-5">
                <button
                  className="rounded-pill border-0 text-white px-lg-5 py-2"
                  style={{ outline: "none", fontWeight: "500" }}
                  data-dismiss="modal"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade " id="mymodal1" style={{ background: "white" }}>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content modalcompare">
            <div className="">
              <div className="d-flex">
                <h1 className="text-white p-4 ">
                  CARS
                  <span
                    className="font-weight-bolder"
                    style={{ color: "#ff9800" }}
                  >
                    Auction
                  </span>
                </h1>
                <div
                  className="pr-5 pt-3 fa-2x ml-auto"
                  data-dismiss="modal"
                  style={{ cursor: "pointer" }}
                >
                  &times;
                </div>
              </div>
              <div className="text-center text-white my-4 justify-content-center d-flex">
                <div
                  className="px-3"
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    background: "black",
                    borderRadius: "50px",
                  }}
                >
                  Welcome to
                  <span
                    className="pl-1"
                    style={{ color: "#ff9800", fontWeight: "500" }}
                  >
                    CarsAuction
                  </span>
                </div>
              </div>
            </div>
            <div
              className=""
              style={{
                height: "30vh",
              }}
            >
              {Data.map((e) => {
                return (
                  <div>
                    <div className="justify-content-center d-flex">
                      <div className="">
                        <div className="px-4 pt-4" id="exterior">
                          {e.exterior}
                        </div>
                        <div className="px-4 pt-4" id="interior">
                          {e.interior}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="justify-content-center d-flex py-4">
                <button
                  className="rounded-pill border-0 text-white px-lg-5 py-2"
                  style={{ outline: "none", fontWeight: "500" }}
                  onClick={show}
                >
                  Interior view
                </button>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-12">
                    <div
                      className="font-weight-bolder"
                      style={{ fontSize: "3.5rem" }}
                    >
                      Kia Seltos
                    </div>
                    <div>
                      <span
                        className="pr-3"
                        style={{ borderRight: "2px solid grey" }}
                      >
                        Listing ID: 14076242
                      </span>
                      <span className="px-3">Item #: 7300-3356862</span>
                    </div>

                    <div
                      className="container my-4 px-4 py-5 shadow-lg"
                      style={{ background: "#ebf2ff", borderRadius: "20px" }}
                    >
                      <div className="d-flex pb-4">
                        <div
                          className=""
                          style={{ fontSize: "1.5rem", fontWeight: "500" }}
                        >
                          Current Price
                        </div>
                        <div
                          className="ml-auto text-success font-weight-bolder"
                          style={{ fontSize: "2.4rem" }}
                        >
                          US $700.00
                        </div>
                      </div>
                      <div className="d-flex">
                        <div style={{ fontSize: "1rem", color: "#52606d" }}>
                          Buyer's Premium
                        </div>
                        <div className="ml-auto" style={{ fontSize: "1.5rem" }}>
                          10.00%
                        </div>
                      </div>
                      <div className="d-flex">
                        <div style={{ fontSize: "1rem", color: "#52606d" }}>
                          Bid Increment (US)
                        </div>
                        <div className="ml-auto" style={{ fontSize: "1.5rem" }}>
                          $50.00
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div
                      className="d-flex py-3"
                      style={{ width: "100%", overflowX: "scroll" }}
                    >
                      <span className="fa fa-gavel fa-3x"></span>
                      <input
                        type="text"
                        className="form-control mx-4 pl-4"
                        placeholder="Enter your bid amount"
                        style={{
                          borderRadius: "50px",
                          fontSize: "1.2rem",
                          height: "55px",
                          maxWidth: "64%",
                        }}
                        required
                      />
                      <button
                        className="border-0 text-white rounded-pill px-lg-5 shadow-sm"
                        style={{
                          outline: "none",
                          fontWeight: "500",
                        }}
                        onClick={() => setCount(count + 1)}
                      >
                        Submit A Bid
                      </button>
                    </div>
                    <hr></hr>

                    <div
                      className="d-flex kiaSeltos"
                      style={{ width: "100%", overflowX: "scroll" }}
                    >
                      <div>
                        <button
                          className="btn btn-primary border-0 rounded-pill px-lg-5 shadow-sm"
                          style={{
                            outline: "none",
                            height: "55px",
                            fontWeight: "500",
                          }}
                        >
                          BUY NOW: $4,200
                        </button>
                      </div>
                      <div className="px-5">
                        <button
                          className="wishlist px-lg-5 px-4 shadow-sm"
                          style={{
                            height: "55px",
                            borderRadius: "30px",
                          }}
                        >
                          <span className="fa fa-star pr-2"></span>
                          Add To Wishlist
                        </button>
                      </div>
                      <div className="align-items-center d-flex ml-auto">
                        <span style={{ fontWeight: "500", fontSize: "1.2rem" }}>
                          Share to:
                        </span>
                        <span className="fa fa-facebook px-2 fa-lg"></span>
                        <span className="fa fa-twitter px-2 fa-lg"></span>
                        <span className="fa fa-linkedin px-2 fa-lg"></span>
                        <span className="fa fa-instagram px-2 fa-lg"></span>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                  <div className="col-lg-4 col-12 pl-lg-4 mt-4">
                    <div
                      className="container py-5 "
                      style={{
                        border: "1px dashed grey",
                        borderRadius: "30px",
                      }}
                    >
                      <div
                        className="text-center"
                        style={{ fontSize: "1.3rem", fontWeight: "500" }}
                      >
                        This Auction Ends in:
                      </div>
                      <div
                        className="text-center"
                        style={{ fontSize: "2.2rem", color: "#ff9800" }}
                      >
                        0d : 7h : 51m : 56s
                      </div>
                      <hr style={{ height: "1.5px" }}></hr>

                      <div>
                        <div>
                          <span
                            className="fa fa-users fa-2x"
                            style={{ color: "#ff9800" }}
                          ></span>
                          <span
                            className="font-weight-bolder"
                            style={{
                              fontSize: "2.6rem",
                              paddingLeft: "30px",
                            }}
                          >
                            61
                          </span>
                          <div style={{ paddingLeft: "65px" }}>
                            Active Bidders
                          </div>
                        </div>
                        <div className="py-2">
                          <span
                            className="fa fa-eye"
                            style={{ color: "#ff9800", fontSize: "2.5rem" }}
                          ></span>
                          <span
                            className="font-weight-bolder pl-4"
                            style={{ fontSize: "2.6rem" }}
                          >
                            203
                          </span>
                          <div style={{ paddingLeft: "65px" }}>Watching</div>
                        </div>
                        <div>
                          <span
                            className="fa fa-gavel"
                            style={{ color: "#ff9800", fontSize: "2.5rem" }}
                          ></span>
                          <span
                            className="font-weight-bolder pl-4"
                            style={{ fontSize: "2.6rem" }}
                          >
                            {count}
                          </span>
                          <div style={{ paddingLeft: "65px" }}>Total Bids</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="justify-content-center d-flex py-5">
                <button
                  className="rounded-pill border-0 text-white px-lg-5 py-2"
                  style={{ outline: "none", fontWeight: "500" }}
                  data-dismiss="modal"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
