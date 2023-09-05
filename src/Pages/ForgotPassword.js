import React, { useState } from "react";
import BackArrow from "../Assets/Icon/Back-Arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [sendOtp, setsendOtp] = useState(true);
  const [OTP, setOTP] = useState("");
  console.log(OTP);
  const handleSendOTP = () => {
    setsendOtp(false);
    axios
      .post("http://localhost:3000/royalenfield/forgotPassword", { email })
      .then((res) => {
        console.log(res.data.status,res.data.message)
        if (res.data.status) {
          toast(res.data.message);
        } else {
          toast(res.data.message);
        }
      });
  };

  return (
    <div className="demo container-fluid">
      {sendOtp ? (
        <h4 className="h4 text-center text-light fs-1 pt-5">
          Enter your Email
        </h4>
      ) : (
        <h4 className="h4 text-center text-light fs-1 pt-5">
          Please Enter Your OTP
        </h4>
      )}

      <div className="row text-center">
        {sendOtp ? (
          <div className="col">
            <input
              type="text"
              className=" value mt-5 w-50 p-2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="col pt-5">
            <input
              type="text"
              className=" value otp text-center mx-3"
              placeholder="_"
              maxLength="1"
              onChange={(e) => setOTP(OTP + e.target.value)}
            />
            <input
              type="text"
              className=" value otp text-center mx-3"
              placeholder="_"
              maxLength="1"
              onChange={(e) => setOTP(OTP + e.target.value)}
            />
            <input
              type="text"
              className=" value otp text-center mx-3"
              placeholder="_"
              maxLength="1"
              onChange={(e) => setOTP(OTP + e.target.value)}
            />
            <input
              type="text"
              className=" value otp text-center mx-3"
              placeholder="_"
              maxLength="1"
              onChange={(e) => setOTP(OTP + e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="row text-center">
        {sendOtp ? (
          <div className="col">
            <button
              className="w-25 mt-5 h-50 fs-5 rounded-3"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div className="col">
            <button className="w-25 mt-5 h-50 fs-5 rounded-3">Verify</button>
          </div>
        )}
      </div>
      <div className="row text-center">
        <div className="col">
          <Link to="/">
            <button className=" mt-5 h-50 fs-5 rounded-3 px-3">
              <img src={BackArrow} alt="Login" />
              Go Back
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-center fs-2 text-light pt-5">
          New to royalenfield.com?
        </h4>
        <Link to="/signup" className="text-decoration-none">
          <button className="d-block mx-auto mt-4 px-5 py-2 rounded-3 fs-5 create">
            Create a Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
