import React from "react";
import NavBar from "../Components/NavBar";
import Redirect from "../Components/Redirect";
import Footer from "../Components/Footer";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
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
      .post("http://localhost:3000/royalenfield/otp", { name, mail })
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
      .post("http://localhost:3000/royalenfield/callback", {
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
    <div>
      <NavBar />
      <div className="call-sup">
        <h4 className="h3 text-center text-white head-call p-3">
          Royal Enfield Help Service
        </h4>
        {/* Side-Content */}
        <div className="container-fluid">
          <div className="row">
            {/*Toll-free number  */}
            <div className="col-md-5">
              <div className="sidebar-content text-start ps-5">
                <h3 className="text-light">We are Here To Help You</h3>
                <p className="text-light">
                "To keep a customer demands as much skill as to win one"
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

              {/* Date and Model */}
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="date"
                    placeholder="Date Of Birth*"
                    className="p-2 my-3 w-100 out"
                  />
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

              {/* Text Area */}
                <div>
                  <label className="d-block text-light fw-bold pb-3 fs-5">Leave your Query's</label>
                   <textarea placeholder="You can dropy your query regarding what area We should Help you"></textarea>
                </div>

              {/* Disclaimer */}
              <p className="disclaimer text-light">
                <span>Disclaimer :</span> By signing this form/checking this
                box, you acknowledge and agree that we may use the information
                you share with us, to communicate with you through e-mails, text
                messages and calls, in order to provide our product or service
                related information and/or for promotional and marketing
                purposes. All information provided will be secured and processed
                as per our privacy policy. For Service at Doorstep option,
                nominal charges will be applicable.
              </p>

              {/* Terms and Condiition */}
              <input type="checkbox" className="my-2" />
              <span className="terms ps-3 my-2 text-light">
                I Accept the <Link href="./">Terms and Conditions</Link>
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
                <button className=" d-block my-3 px-3 py-2 " disabled>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Redirect />
      <Footer />
    </div>
  );
};

export default ContactUs;
