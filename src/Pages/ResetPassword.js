import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPasswod] = useState();

  const handleReset = () => {
    axios
      .post("http://localhost:3000/royalenfield/changePassword", {
        password,
        confirmPassword,
        token: window.localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      });
  };

  return (
    <div className="demo container-fluid">
      <h4 className="h4 text-center text-light fs-1 pt-5">
        Reset Your Password To Explore
      </h4>
      <div className="row text-center">
        <div className="col">
          <input
            type="text"
            className=" value mt-5 w-50 p-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <input
            type="text"
            className=" value mt-5 w-50 p-2"
            placeholder="Confirm Password"
            onChange={(e) => setconfirmPasswod(e.target.value)}
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <Link to="/">
            <button
              className=" mt-5 h-50 fs-5 rounded-3 px-3"
              onClick={handleReset}
            >
              Reset Password
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

export default ResetPassword;
