import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Redirect from "../Components/Redirect";
import arrow from "../Assets/Icon/Forward-arrow.svg";


const CalculatorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state.name;
  const img = location.state.img;

  const [State, setState] = useState("State");
  const [city, setCity] = useState("City");
  const [interval, setInterval] = useState("");
  let message;
  const handleCost = () => {
    if (State==="State") {
      message = "Please fill the State";
    } else if (city === "City") {
      message = "Please fill the City";
    } else if (interval === "Select service intervals") {
      message = "Please fill the intervals";
    } else {
      navigate("/servicecost" , {state : {img,name,State,city,interval}});
    }
  };

  return (
    <div>
      <div className="cal-bg">
        <NavBar />
        <h3 className="h2 text-light pt-5 ps-4 fw-bold">
          SELECT <span className="high">DETAILS</span>
        </h3>
        <p className=" ps-4 fs-4 sub-text">
          Tell us more about your motorcycle.
        </p>
        <div className="row pt-5">
          {/* image and name */}
          <div className="col-md-6">
            <h4 className="text-light text-start ps-4 fw-bold">{name}</h4>
            <img src={img} alt="bike-enfield" className="img-fluid" />
          </div>

          {/* select model and kilometers */}
          <div className="col-md-6">
            <div className="model">
              <h4 className="text-light ps-3 py-2">Select Variant</h4>
              <ul className="text-light fs-4 ps-5 list pb-3">
                <li className="ps-3 bs-highlight">BS3</li>
                <li className="ps-3 bs-highlight">BS4 ABS</li>
                <li className="ps-3 bs-highlight">BS4 NON ABS</li>
                <li className="ps-3 bs-highlight">BS6 ABS DUAL CHANNEL</li>
                <li className="ps-3 bs-highlight">BS6 ABS SINGLE CHENNEL</li>
              </ul>
            </div>

            {/* State and City */}
            <div className="model mb-3">
              <h4 className="text-light ps-3 py-2">Select Location</h4>
              <select className="dropdown-select" onChange={(e)=>setState(e.target.value)}>
                <option className="options" value="State">State</option>
                <option className="options" value="Tamil Nadu">Tamil Nadu</option>
              </select>
              <select
                className="dropdown-select"
                onChange={(e) => setCity(e.target.value)}
              >
                <option className="options" value="City">
                  City
                </option>
                <option className="options" value="Chennai">
                  Chennai
                </option>
                <option className="options" value="Vellore">
                  Vellore
                </option>
                <option className="options" value="Salem">
                  Salem
                </option>
                <option className="options" value="Nammakkal">
                  Nammakkal
                </option>
                <option className="options" value="Kanchipuram">
                  Kanchipuram
                </option>
                <option className="options" value="Chengalpattu">
                  Chengalpattu
                </option>
                <option className="options" value="Kanyakumari">
                  Kanyakumari
                </option>
              </select>
            </div>

            {/* Select Interval */}
            <div className="model mb-3">
              <h4 className="text-light ps-3 pt-3">Select Interval</h4>
              <select
                className="dropdown-select w-75 mb-4 "
                onChange={(e) => setInterval(e.target.value)}
              >
                <option className="options" value="Select service intervals">
                  Select service intervals
                </option>
                <option className="options" value="500 Kms or 1.5 Month">
                  500 Kms or 1.5 Month
                </option>
                <option className="options" value="1000 Kms or 6 Month">
                  1000 Kms or 6 Month
                </option>
                <option className="options" value="2000 Kms or 12 Month">
                  2000 Kms or 12 Month
                </option>
                <option className="options" value="5000 Kms or 18 Month">
                  5000 Kms or 18 Month
                </option>
                <option className="options" value="10,000 Kms or 24 Month">
                  10,000 Kms or 24 Month
                </option>
                <option className="options" value="15,000 Kms or 30 Month">
                  15,000 Kms or 30 Month
                </option>
                <option className="options" value="20,000 Kms or 36 Month">
                  20,000 Kms or 36 Month
                </option>
              </select>
            </div>

            {message && <p>{message}</p>}

            {/* calculate button */}
            <div className="d-flex justify-content-end mb-5 me-4 mt-5">
              <button className=" fs-5 p-2 cal" onClick={handleCost}>
                Calculate
                <span className="f-arrow py-3">
                  <img src={arrow} alt="symbol"/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Redirect />
      <Footer />
    </div>
  );
};

export default CalculatorPage;
