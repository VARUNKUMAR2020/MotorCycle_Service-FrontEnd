import React from "react";
import Logo from "../Assets/Logo/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" container-fluid head p-2">
      <div className="row">
        <div className="col-md-2 col-xl-2">
          <img src={Logo} alt="RE" />
        </div>
        <div className="col-md-8 col-xl-8 text-end pt-3 ">
           <Link className="mx-3 text-decoration-none my-nav">Motorcycle</Link>
           <Link className="mx-3 text-decoration-none my-nav">Service</Link>
           <Link className="mx-3 text-decoration-none my-nav">Locate Us</Link>
           <Link to="/rides" className="mx-3 text-decoration-none my-nav">Ride</Link>
           <Link className="mx-3 text-decoration-none my-nav">Support</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
