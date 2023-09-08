import React from "react";
import icon1 from "../Assets/Icon/footerpointer.svg";
import icon2 from "../Assets/Icon/footermap.svg";
import arrow from "../Assets/Icon/Forward-arrow.svg"

const Redirect = () => {
  return (
    <div className="container-fluid icon">
      <div className="row text-center">
        <div className="col my-5">
          <a href="./" className="text-decoration-none">
            <img src={icon1} alt="arrow" />
            <span className="d-block ps-4 my-2 text-light link-name ">
              Book a Test Drive
              <span className="arrow">
                <img src={arrow} alt="arrow"  />
              </span>
            </span>
          </a>
        </div>
        <div className="col my-5">
          <a href="./" className="text-decoration-none">
            <img src={icon2} alt="arrow" />
            <span className="d-block ps-4 text-light my-2 link-name">
              Find a Store
              <span className="arrow">
                <img src={arrow} alt="arrow" />
              </span>
            </span>
          </a>
        </div>
        <div className="col my-5">
          <a href="/" className="text-decoration-none">
            <img src={icon2} alt="arrow" />
            <span className="d-block ps-4 text-light my-2 link-name">
              Ride out
              <span>
                <img src={arrow} alt="arrow" className="arrow" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
