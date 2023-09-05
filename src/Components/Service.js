import React from "react";
import image1 from "../Assets/Home/image1.avif";
import image2 from "../Assets/Home/image2.avif";
import image3 from "../Assets/Home/image3.avif";
import symbol from "../Assets/Icon/Back-Arrow.png";

const Service = () => {
  return (
    <div>
    <div className="row g-0 ">
      <div className="col-md-4">
        <img src={image1} alt="service" className="img-fluid h-100 w-100" />
        <h4 className="h4 text-center">Service Calculator</h4>
        <h4 className="h6 text-center">
          Calculate the cost of service for your motorcycle.
        </h4>
        <div class="row ">
          <div class="col-12 text-center">
            <button className="btn btn-outline-dark but">
              Explore
              <span className="">
                <img src={symbol} alt="arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <img src={image2} alt="service" className="img-fluid h-100 w-100" />
        <h4 className="h4 text-center">Book a Service</h4>
        <h4 className="h6  text-center">
          Convenient and seamless service booking appointment.
        </h4>
        <div className="row text-center">
          <div className="col-6 ">
            <button className="btn btn-outline-dark but">
              Book Now
              <span>
                <img src={symbol} alt="arrow" />
              </span>
            </button>
          </div>
          <div className="col-6 text-center">
            <button className="btn btn-outline-dark but">
              Request A Call Back
              <span>
                <img src={symbol} alt="arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <img src={image3} alt="service" className="img-fluid h-100 w-100" />
        <h4 className="h4 text-center">Service History</h4>
        <h4 className="h6 text-center">
          All your past service records at one place.
        </h4>
        <div className="row  text-center">
          <div className="col-12 ">
            <button className="btn btn-outline-dark but ">
              Explore
              <span>
                <img src={symbol} alt="arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Service;
