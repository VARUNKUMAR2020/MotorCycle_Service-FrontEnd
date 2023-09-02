import React from "react";
import Logo from "../Assets/Logo/logo.png";

const NavBar = () => {
  return (
    <div className=" container-fluid head p-2">
      <div className="row">
        <div className="col-md-2 col-xl-2">
          <img src={Logo} alt="RE" />
        </div>
        <div className="col-md-8 col-xl-8">
        </div>
      </div>  
    </div>
  );
};

export default NavBar;
