import React from "react";

const Call = () => {

  let v;
  //Function for Mobile NUmber check 
   const handleNumbers = (value) =>{
     v = value.length
   }

  return (
    <div>
      <div className="call">
        <h4 className="h3 text-center text-white head-call p-3">
          Royal Enfield Service
        </h4>
        {/* Side-Content */}
        <div className="container-fluid">
          <div className="row">
            {/*Toll-free number  */}
            <div className="col-md-5">
              <div className="sidebar-content text-start ps-5">
                <h3>Service Booking</h3>
                <p>
                  Make an appointment for Royal Enfield service from the safety
                  and comfort of your home.
                </p>
                <h5>Toll Free Number :</h5>
                <h4>1800 210 0007</h4>
              </div>
            </div>

            {/* Input Form */}
            <div className="col-md-7 pt-3">
              <h5>Please fill in your details</h5>
              <input
                type="text"
                placeholder="Full Name*"
                className="p-2 my-4 w-100 d-block"
              />
              <input
                type="text"
                placeholder="Email*"
                className="p-2  my-4 d-block w-100"
              />

              {/* Dropdowns State & City */}
              <div className="row ">
                <div className="col-md-6">
                  <select className=" p-2 my-1 w-100">
                    <option value="">State*</option>
                  </select>
                </div>
                <div className="col-md-6 text-start">
                  <select className=" p-2 my-1 w-100">
                    <option value="">City*</option>
                  </select>
                </div>
              </div>

              {/*Select Service Center-dropdown*/}
              <select className="p-2 d-block my-3 w-100">
                <option value="">Select Service Center*</option>
              </select>

              {/* Radio Buttons */}
              <div className="row ps-2">
                <div className="col-md-6 form-check">
                  <input
                    type="radio"
                    name="service"
                    value="Self-Drop-Pickup"
                    className="form-check-input my-3"
                  />
                  <label className="form-check-label my-3">
                    Self Drop & Pick-Up
                  </label>
                </div>
                <div className="col-md-6 form-check">
                  <input
                    type="radio"
                    name="service"
                    value="Service-Doorstep"
                    className="form-check-input my-3"
                  />
                  <label className="form-check-label my-3">
                    Service At Door-Step
                  </label>
                </div>
              </div>

              {/* Date and Model */}
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="date"
                    placeholder="Full Name*"
                    className="p-2 my-3 w-100"
                  />
                </div>
                <div className="col-md-6">
                  <select className="p-2 my-3 d-block w-100">
                    <option value="" disabled selected>
                      Select MotorCycle Model*
                    </option>
                  </select>
                </div>
              </div>

              {/* Mobile - OTP */}
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Mobile Number*"
                    className="p-2 my-3 w-75 d-inline"
                    onChange={(e)=>handleNumbers(e.target.value)}
                  />
                  <button type="button" className="my-3 w-25 p-2 otp">
                    OTP
                  </button>
                </div>
                {v===10 && <div className="col-md-6">Hii</div>}
              
              </div>

              {/* Disclaimer */}
              <p className="disclaimer">
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
              <span className="terms ps-3 my-2">
                I Accept the <a href="./">Terms and Conditions</a>
              </span>

              {/* Submit BUtton */}
              <button className="btn btn-outline-dark d-block my-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
