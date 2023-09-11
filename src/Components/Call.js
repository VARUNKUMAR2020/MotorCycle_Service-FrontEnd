import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";

const Call = () => {
  const [input, setInput] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setEmail] = useState("");
  const [Length, setLength] = useState();
  const [submit, setSubmit] = useState(false);
  const [UserOTP, setOTP] = useState("");

  const handleOTP = () => {
    setInput(true);
    axios
      .post("https://motorcycle-backend.onrender.com/royalenfield/otp", { name, mail })
      .then((res) => {
        if (res.data.status) {
          setSubmit(true);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      });
  };

  const handleSubmit = () => {
    axios
      .post("https://motorcycle-backend.onrender.com/royalenfield/callback", {
        name,
        mobile,
        UserOTP,
        mail,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          setName("");
          setMobile("");
          setInput(false);
          setSubmit(false);
        } else {
          toast.error(res.data.message);
        }
      });
  };

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
              className="p-2 my-4 w-100 d-block out"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="Number"
              placeholder="Mobile Number*"
              className="p-2  my-4 d-block w-100 out"
              onChange={(e) => setMobile(e.target.value)}
            />

            {/* Dropdowns State & City */}
            <div className="row ">
              <div className="col-md-6">
                <select className=" p-2 my-1 w-100 out">
                  <option value="">State*</option>
                  <option value="">Tamil Nadu</option>
                </select>
              </div>
              <div className="col-md-6 text-start">
                <select className=" p-2 my-1 w-100 out">
                  <option value="">City*</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Salem">Salem</option>
                  <option value="Nammakkal">Nammakkal</option>
                  <option value="Kanchipuram">Kanchipuram</option>
                  <option value="Chengalpattu">Chengalpattu</option>
                  <option value="Kanyakumari">Kanyakumari</option>
                </select>
              </div>
            </div>

            {/*Select Service Center-dropdown*/}
            <select className="p-2 d-block my-3 w-100 out">
              <option value="">Select Service Center*</option>
              <option value="Varun Motors">Varun Motors</option>
              <option value="Ajith Motors">Ajith Motors</option>
              <option value="Venkat Motors">Venkat Motors</option>
              <option value="Dhana Motors">Dhana Motors</option>
              <option value="Tej Motors">Tej Motors</option>
              <option value="Gopal Motors">Gopal Motors</option>
              <option value="SriRanjini Motors">SriRanjini Motors</option>
              <option value="Vishuwa Motors">Vishuwa Motors</option>
              <option value="Kavimani Motors">Kavimani Motors</option>
              <option value="Yazhini Motors">Yazhini Motors</option>
              <option value="Udhaya Motors">Udhaya Motors</option>
            </select>

            {/* Radio Buttons */}
            <div className="row ps-3">
              <div className="col-md-6 form-check">
                <input
                  type="radio"
                  name="service"
                  value="Self-Drop-Pickup"
                  className="form-check-input my-3 out"
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
                  className="form-check-input my-3 out"
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
                  className="p-2 my-3 w-100 out"
                />
              </div>
              <div className="col-md-6">
                <select className="p-2 my-3 d-block w-100 out">
                  <option value="">Select MotorCycle Model*</option>
                  <option value="Classic 350">Classic 350</option>
                  <option value="Classic 500">Classic 500</option>
                  <option value="Bullet 350">Bullet 350</option>
                  <option value="Bullet 500">Bullet 500</option>
                  <option value="Continental GT 535">Continental GT 535</option>
                  <option value="Himalayan">Himalayan</option>
                  <option value="Metero 350">Metero 350</option>
                  <option value="Super Metero 350">Super Metero 350</option>
                  <option value="Thunderbird 350">Thunderbird 350</option>
                  <option value="Thunderbird 500">Thunderbird 500</option>
                </select>
              </div>
            </div>

            {/* Mobile - OTP */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Email*"
                  className="p-2 my-3 out-mobile"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setLength(mail.length);
                  }}
                />
                {Length > 8 ? (
                  <button
                    type="button"
                    className="otp-after"
                    onClick={handleOTP}
                  >
                    OTP
                  </button>
                ) : (
                  <button type="button" className="otp">
                    OTP
                  </button>
                )}
              </div>
              {input && (
                <div className="col-md-6 mt-4">
                  <input
                    type="text"
                    maxLength={1}
                    className="mobile-otp fs-2 text-center"
                    onChange={(e) => setOTP(UserOTP + e.target.value)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="mobile-otp fs-2 text-center"
                    onChange={(e) => setOTP(UserOTP + e.target.value)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="mobile-otp fs-2 text-center"
                    onChange={(e) => setOTP(UserOTP + e.target.value)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="mobile-otp fs-2 text-center"
                    onChange={(e) => setOTP(UserOTP + e.target.value)}
                  />
                </div>
              )}
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
              I Accept the <Link to="/term">Terms and Conditions</Link>
            </span>

            {/* Submit BUtton */}
            {submit ? (
              <button
                className=" d-block my-3 px-3 py-2 submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button className=" d-block my-3 px-3 py-2 sub" disabled>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
