import React from "react";
import Images from "../Data/Images.json";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Redirect from "../Components/Redirect";

const MotorCyclePage= () => {
  const navigate = useNavigate();

  const handleImage = (name, img) => {
    console.log(name,img)
    navigate("/calculator", { state: { name, img } });
  };

  return (
    <div>
      <NavBar />
      <div className="MotorCycle pb-4">
        <h3 className="h2 text-light text-center pt-5 pb-3 fw-bold">
          SELECT YOUR <span className="high">MOTORCYCLE</span>
        </h3>
        <div className="row backgroundColor">
          {Images.map((imgData, index) => (
            <div
              className="col-md-3 col-sm-6 imgbg"
              key={index}
              onClick={() => {
                handleImage(imgData.name, imgData.src);
              }}
            >
              <a className="text-decoration-none">
                <img className="img-fluid" src={imgData.src} alt={imgData.name} />
                <p className="text-light text-center">{imgData.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Redirect/>
      <Footer />
    </div>
  );
};

export default MotorCyclePage;
