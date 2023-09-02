import React, { useState } from "react";
import Images from "../Data/Images.json";

const MotorCycle = () => {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);

  const handleData =()=>{
      
  }
  return (
    <div className="MotorCycle">
      <h3 className="h2 text-light text-center pt-5 pb-3">
        SELECT YOUR <span className="high">MOTORCYCLE</span>
      </h3>
      <div className="row backgroundColor">
        {Images.map((img) => (
          <div className="col-md-3 imgbg">
            <a href="./" className="text-decoration-none" onClick={handleData}>
              <img className="img-fluid" src={img.src} />
              <p className="text-light text-center">{img.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotorCycle;
