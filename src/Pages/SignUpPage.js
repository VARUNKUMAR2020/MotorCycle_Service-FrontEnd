import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="demo container-fluid">
      <h4 className="h4 text-center text-light fs-1 pt-5">
        Sign Up for Royal Enfield
      </h4>

      {/* FirstName & LatName */}
      <section className="row ">
        <div className="col-md-6 text-center">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6 text-start">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Last Name"
          />
        </div>
      </section>

      {/* Gender and DOB */}
      <section className="row pt-3">
        <div className="col-md-6 pt-4 gender">
          <span className="text-light fs-4 d-block text-start">
            Select Your Gender
          </span>
          <div className="text-start pt-2">
            <input type="radio" name="gender" />
            <span className="text-light fs-4 ms-4">Male</span>
            <input type="radio" className="ms-5" name="gender" />
            <span className="text-light fs-4 ms-4">Female</span>
          </div>
        </div>
        <div className="col-md-6 text-start">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Date Of Birth"
          />
        </div>
      </section>

      {/*Email & Password*/}
      <section className="row ">
        <div className="col-md-6 text-center">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Email"
          />
        </div>
        <div className="col-md-6 text-start">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Password"
          />
        </div>
      </section>

      {/* Country code & Mobile Number */}
      <section className="row ">
        <div className="col-md-6 text-center"></div>
        <div className="col-md-6 text-start">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Mobile"
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="ms-5 px-5  pt-3">
        <p className="text-light">
          Disclaimer: By signing this form/checking this box, you acknowledge
          and agree that we may use the information you share with us, to
          communicate with yo mails, text messages and calls, in order to
          provide our product or service related information and/or for
          promotional and marketing purposes. All information be secured and
          processed as per our privacy policy.
        </p>
        <input type="checkbox" />
        <span className="text-light ps-4">
          I accept the{" "}
          <Link to="/term" className="text-decoration-none">
            <span className="fw-bolder ">terms and conditions</span>
          </Link>{" "}
          as well as{" "}
          <Link to="/term" className="text-decoration-none">
            <span className="fw-bolder text-decoration-none">
              privacy policy
            </span>
          </Link>
        </span>
      </section>
    </div>
  );
};

export default SignUpPage;
