import React from "react";
import icon1 from "../Assets/Icon/footerpointer.svg";
import icon2 from "../Assets/Icon/footermap.svg";
import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div className="container-fluid icon">
      <div className="row text-center">
        <div className="col my-5">
          <Link to="/contact" className="text-decoration-none">
            <img src={icon1} alt="arrow" />
            <span className="d-block ps-4 my-2 re-direct link-name ">
              Book a Test Drive
              <span className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="white"
                  className="f-arrow"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
        <div className="col my-5">
          <Link to="/motorcycle" className="text-decoration-none">
            <img src={icon2} alt="arrow" />
            <span className="d-block ps-4 re-direct my-2 link-name">
              Find a Store
              <span className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="white"
                  className="f-arrow"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
        <div className="col my-5">
          <Link to="/rides" className="text-decoration-none">
            <img src={icon2} alt="arrow" />
            <span className="d-block ps-4 re-direct my-2 link-name">
              Ride out
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="white"
                  className="f-arrow"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
