import React from "react";
import BackArrow from "../Assets/Icon/Back-Arrow.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
        <input
            type="text"
            className=" value mt-5 w-50 p-2"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <Link to="/">
            <button className=" mt-5 h-50 fs-5 rounded-3 px-3">
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
