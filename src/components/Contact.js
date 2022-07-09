import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="pt-5">
        <div className="container w-50 hey h-100 mt-2 justify-content-center d-flex">
          <div className="text-center text-white pt-3">
          <div className="px-3" style={{
            fontSize: "17px",
            fontWeight: "500",
            width:"fit-content",
            background: "black",
            borderRadius: "50px",
          }}>  
          Contact{" "}
            <span className="" style={{ color: "#ff9800", fontWeight: "500" }}>
              Us
            </span>
          </div>
          <hr className="w-50 mx-auto text-success"></hr>
        </div>
        </div>
        <div
          className="card shadow-sm container my-5 pt-3 animation shadow-lg border-0"
          style={{ borderRadius: "20px" }}
        >
          <iframe
            className="w-100 map"
            height={500}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.894827890027!2d77.52285456477757!3d28.422430182501124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0562d35c6eb%3A0xf28d7eccac27450f!2sGautam%20Buddha%20University%20BOYS%20HOSTEL&#39;s!5e0!3m2!1sen!2sbg!4v1621609175189!5m2!1sen!2sbg"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <div className="container justify-content-center d-flex">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 pt-5">
                <div className="fa fa-map-marker fa-2x hello1 text-center"></div>
                <label className="fa-lg pl-3" style={{ fontWeight: "500" }}>
                  Location:
                </label>
                <p className="px-5">&nbsp;&nbsp;&nbsp;&nbsp;CarsAuction</p>
                <br></br>

                <div className="fa fa-envelope fa-lg hello1 text-center"></div>
                <label
                  className="fa-lg pl-3 pt-5"
                  style={{ fontWeight: "500" }}
                >
                  Email:
                </label>
                <p className="px-5">
                  &nbsp;&nbsp;&nbsp;&nbsp;carsauction@gmail.com
                </p>

                <br></br>
                <div className="fa fa-mobile-phone fa-2x hello1 text-center"></div>
                <label
                  className="fa-lg pl-3 pt-5"
                  style={{ fontWeight: "500" }}
                >
                  Phone:
                </label>
                <p className="px-5">&nbsp;&nbsp;&nbsp;&nbsp;+91 73******96</p>
                <br></br>
              </div>

              <div className="col-lg-8 col-md-8 col-12">
                <div className="mx-auto py-5 w-auto px-lg-5">
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="" style={{ fontWeight: "500" }}>
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="input"
                            style={{ borderRadius: "30px", height: "45px" }}
                            placeholder="Enter Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="" style={{ fontWeight: "500" }}>
                            Phone:
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="input1"
                            style={{ borderRadius: "30px", height: "45px" }}
                            placeholder="Enter Phone No."
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="" style={{ fontWeight: "500" }}>
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input2"
                        style={{ borderRadius: "30px", height: "45px" }}
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="" style={{ fontWeight: "500" }}>
                        Message:
                      </label>
                      <textarea
                        className="form-control"
                        id="textarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn rounded-pill px-4 py-2 text-white"
                      to="/"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </section>
  );
}

export default Contact;
