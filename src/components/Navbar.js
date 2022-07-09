import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [B, setHeader] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
      setHeader(false);
    } else {
      setNavbar(false);
      setHeader(true);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <section className="mt-5">
      <header className="fixed-top" id="header">
        <nav
          className={
            navbar
              ? "navbar active navbar-expand-lg navbar-dark"
              : "navbar navbar-expand-lg navbar-dark bg-transparent"
          }
        >
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              CARS
              <span className="font-weight-bolder" style={{ color: "#ff9800" }}>
                Auction
              </span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className={
                  B
                    ? "B active navbar-nav ml-auto mb-2 mb-lg-0"
                    : "B navbar-nav ml-auto mb-2 mb-lg-0"
                }
              >
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <a
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    href="#newsletter"

                  >
                    Newsletter
                  </a>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <a
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    href="#whyus"
                  >
                    Why Us
                  </a>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/compare"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
