import React from "react";
import symbol from "../Assets/Icon/Forward-arrow.svg";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const Service = () => {
  const Navigate = useNavigate();

  const handleLink1 = () => {
    Navigate("/motorcycle");
  };
  const handleLink2 = () => {
    Navigate("/login");
  };
  const handleLink3 = () => {
    Navigate("/login");
  };

  return (
    <div className="row pb-0 g-0 home">
      {/* First Image */}
      <div className="col-md-4 img-bg1 " onClick={handleLink1}>
        <div className=" main-div px-5">
          <h4 className="h4 text-center text-light pb-2">Service Calculator</h4>
          <h4 className="h6 text-center text-light pb-3">
            Calculate the cost of service for your motorcycle.
          </h4>
          <button className=" but d-block mx-auto ">
            Explore
            <span className="">
              <img src={symbol} alt="arrow" />
            </span>
          </button>
        </div>
      </div>

      <div className="col-md-4 img-bg2" onClick={handleLink2}>
        <div className="main-div ">
          <h4 className="h4 text-center text-light pb-2">Book a Service</h4>
          <h4 className="h6 text-center text-light pb-3">
            Convenient and seamless service booking appointment.
          </h4>
          <div className="text-center ">
            <button className=" but mx-3">
              Book Now
              <span>
                <img src={symbol} alt="arrow" />
              </span>
            </button>
            <Link to="/login/call">
            <button className=" but mx-3">
              Request A Call Back
              <span>
                <img src={symbol} alt="arrow" />
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 img-bg3" onClick={handleLink3}>
        <div className="main-div">
          <h4 className="h4 text-center text-light pb-2">Service History</h4>
          <h4 className="h6 text-center text-light pb-3">
            All your past service records at one place.
          </h4>
          <button className="but d-block mx-auto ">
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
