import React from "react";
import symbol from "../Assets/Icon/Forward-arrow.svg";

const Service = () => {
  return (
    <div className="row pb-0 g-0 home">
      {/* First Image */}
      <div className="col-md-4 img-bg1 d-flex align-items-end">
        <div className=" main-div ps-5">
          <h4 className="h4 text-center text-light">Service Calculator</h4>
          <h4 className="h6 text-center text-light">
            Calculate the cost of service for your motorcycle.
          </h4>
          <button className="btn btn-outline-dark but">
            Explore
            <span className="">
              <img src={symbol} alt="arrow" />
            </span>
          </button>
        </div>
      </div>

      <div className="col-md-4 img-bg2 d-flex align-items-end">
        <div className="main-div">
          <h4 className="h4 text-center text-light">Book a Service</h4>
          <h4 className="h6 text-center text-light">
            Convenient and seamless service booking appointment.
          </h4>
          <button className="btn btn-outline-dark but">
            Book Now
            <span>
              <img src={symbol} alt="arrow" />
            </span>
          </button>
          <button className="btn btn-outline-dark but">
            Request A Call Back
            <span>
              <img src={symbol} alt="arrow" />
            </span>
          </button>
        </div>
      </div>

      <div className="col-md-4 img-bg3  d-flex  align-items-end">
        <div className="main-div">
          <h4 className="h4 text-center text-light">Service History</h4>
          <h4 className="h6 text-center text-light">
            All your past service records at one place.
          </h4>
          <button className="btn btn-outline-dark but">
            Explore
            <span className="">
              <img src={symbol} alt="arrow" />
            </span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Service;
