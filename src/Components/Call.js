import React from "react";
import { Link } from "react-router-dom";

const Call = () => {
  return (
    <div className="call">
      <h4 className="h3 text-center text-white head-call p-3">
        Royal Enfield Service
      </h4>
      {/* Side-Content */}
      <div className="container-fluid">
        <div className="row">
          {/*Toll-free number  */}
          <div className="col-md-5">
            <div className="sidebar-content text-start ps-5">
              <h3 className="text-light">Service Booking</h3>
              <p className="text-light">
                Make an appointment for Royal Enfield service from the safety
                and comfort of your home.
              </p>
              <h5 className="text-light">Toll Free Number :</h5>
              <h4>1800 210 0007</h4>
            </div>
          </div>

          {/* Input Form */}
          <div className="col-md-7 pt-3">
            <h5 className="text-light">Please fill in your details</h5>
            <input
              type="text"
              placeholder="Full Name*"
              className="p-2 my-4 w-100 d-block"
            />
            <input
              type="text"
              placeholder="Email*"
              className="p-2  my-4 d-block w-100"
            />

            {/* Dropdowns State & City */}
            <div className="row ">
              <div className="col-md-6">
                <select className=" p-2 my-1 w-100">
                  <option value="">State*</option>
                  <option value="">Tamil Nadu</option>
                </select>
              </div>
              <div className="col-md-6 text-start">
                <select className=" p-2 my-1 w-100">
                  <option value="">City*</option>
                  <option value="">Chennai</option>
                  <option value="">Vellore</option>
                  <option value="">Salem</option>
                  <option value="">Nammakkal</option>
                  <option value="">Kanchipuram</option>
                  <option value="">Chengalpattu</option>
                  <option value="">Kanyakumari</option>
                </select>
              </div>
            </div>

            {/*Select Service Center-dropdown*/}
            <select className="p-2 d-block my-3 w-100">
              <option value="">Select Service Center*</option>
            </select>

            {/* Radio Buttons */}
            <div className="row ps-3">
              <div className="col-md-6 form-check">
                <input
                  type="radio"
                  name="service"
                  value="Self-Drop-Pickup"
                  className="form-check-input my-3"
                />
                <label className="form-check-label my-2 fs-5 ms-3 text-light">
                  Self Drop & Pick-Up
                </label>
              </div>
              <div className="col-md-6 form-check">
                <input
                  type="radio"
                  name="service"
                  value="Service-Doorstep"
                  className="form-check-input my-3"
                />
                <label className="form-check-label my-2 fs-5 ms-3 text-light">
                  Service At Door-Step
                </label>
              </div>
            </div>

            {/* Date and Model */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="date"
                  placeholder="Full Name*"
                  className="p-2 my-3 w-100"
                />
              </div>
              <div className="col-md-6">
                <select className="p-2 my-3 d-block w-100">
                  <option value="">Select MotorCycle Model*</option>
                  <option value="">Classic 350</option>
                  <option value="">Classic 500</option>
                  <option value="">Select MotorCycle Model*</option>
                  <option value="">Select MotorCycle Model*</option>
                  <option value="">Select MotorCycle Model*</option>
                  <option value="">Select MotorCycle Model*</option>
                </select>
              </div>
            </div>

            {/* Mobile - OTP */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Mobile Number*"
                  className="p-2 my-3 w-100"
                />
                <button type="button" className="my-3 otp">
                  OTP
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="disclaimer text-light">
              <span>Disclaimer :</span> By signing this form/checking this box,
              you acknowledge and agree that we may use the information you
              share with us, to communicate with you through e-mails, text
              messages and calls, in order to provide our product or service
              related information and/or for promotional and marketing purposes.
              All information provided will be secured and processed as per our
              privacy policy. For Service at Doorstep option, nominal charges
              will be applicable.
            </p>

            {/* Terms and Condiition */}
            <input type="checkbox" className="my-2" />
            <span className="terms ps-3 my-2 text-light">
              I Accept the <Link href="./">Terms and Conditions</Link>
            </span>

            {/* Submit BUtton */}
            <button className="btn btn-outline-dark d-block my-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
