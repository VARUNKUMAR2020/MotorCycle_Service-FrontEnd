import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Redirect from "../Components/Redirect";
import Footer from "../Components/Footer";

const MotorGarage = () => {
  const [addMotor, setAddMotor] = useState(false);
 
  useEffect(()=>{
    
  })

  const handleButton = () => {
    setAddMotor(true);
  };
  const handleBack=()=>{
    setAddMotor(false);
  }

  return (
    <div>
      <NavBar />
      <div className="head-call">
        <h5 className="text-light text-center pt-5 pb-4 h3">
          Welcome to Your Motorcycle Garage
        </h5>
        {!addMotor && (
          <div className="text-end ">
            <button
              className="me-4 motor-garage-btn add py-1 px-3"
              onClick={handleButton}
            >
              Add Motorcycle
            </button>
            <button className="me-4 motor-garage-btn add py-1 px-3">
              Ongoing Service
            </button>
          </div>
        )}
        {addMotor ? (
          <div className="d-flex align-items-start justify-content-center service-div pt-5">
            <input
              type="text"
              placeholder="Register Number"
              className="motor-input py-1 px-4 me-4 fw-bold"
            />
            <input
              type="text"
              placeholder=""
              className="motor-input py-1 px-4 me-2 fw-bold"
              value="8870187077"
              disabled
            />
            <button className="mx-5 motor-garage-btn py-1 px-3 add fw-bold">Add</button>
            <button className="motor-garage-btn py-1 px-3 add fw-bold" onClick={handleBack}>Back</button>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center service-div">
            <h3 className="text-light h4 ">No Motorcycle Added</h3>
          </div>
        )}
        <Redirect />
      </div>
      <Footer />
    </div>
  );
};

export default MotorGarage;
