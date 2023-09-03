import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="demo container-fluid">
      <div className="row ms-5 login align-items-end ">
        <h5 className="text-light text-center fs-1">
          Log in to your Royal Enfield account
        </h5>
        <div className="col-sm-6 text-end">
          <input
            type="text"
            placeholder="Email"
            className="px-2 py-2 fs-5 value w-75"
          />
        </div>
        <div className="col-sm-6 ">
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-2 fs-5 w-50 value"
          />
        </div>
      </div>
      <div className="row ms-5 pt-4 login">
        <div className="col-md-6 text-end">
          <button className="w-75 h-25 fs-5 rounded-3">Login</button>
        </div>
        <div className="col-md-6 pt-4 p-5">
          <Link to="/forgotPassword" className="text-decoration-none"><h6 className="fs-4 forgot">
            Forgot Password?
          </h6></Link>
        </div>
      </div>
      <div>
        <h4 className="text-center fs-2 text-light">
          New to royalenfield.com?
        </h4>
       <Link to="/signup" className="text-decoration-none"><button className="d-block mx-auto mt-4 px-5 py-2 rounded-3 fs-5 create">
          Create a Account
        </button></Link>
      </div>
    </div>
  );
};

export default Login;
