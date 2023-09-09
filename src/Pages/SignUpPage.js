import React, { useState } from "react";
import BackArrow from "../Assets/Icon/Back-Arrow.png";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
 
  const Navigate = useNavigate();

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [gender, setGender] = useState();
  const [dob, setdob] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [terms, setTerms] = useState(false);
  const [dobInputField, setdobInputField] = useState("text");

  const handleSubmit = () => {
    if (terms) {
      axios.post("http://localhost:3000/royalenfield/register", {
        firstName,
        lastName,
        gender,
        dob,
        email,
        password,
        mobile,
      }).then((res)=>{
        console.log(res.data.status);
        if(res.data.status){
           toast.success(res.data.message)
           Navigate("/servicepage")
        }else{
          toast.error(res.data.message)
        }
      })
    } else {
      toast.error("Please Check the Terms and Conditions")
    }
  };

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
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6 text-start">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
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
            <input
              type="radio"
              name="gender"
              onChange={() => setGender("Male")}
            />
            <span className="text-light fs-4 ms-4">Male</span>
            <input
              type="radio"
              className="ms-5"
              name="gender"
              onChange={() => setGender("Female")}
            />
            <span className="text-light fs-4 ms-4">Female</span>
          </div>
        </div>
        <div className="col-md-6 text-start">
          <input
            type={dobInputField}
            className=" value mt-5 w-75 p-2 date"
            placeholder="Date Of Birth"
            onFocus={() => setdobInputField("date")}
            onBlur={() => setdobInputField("text")}
            onChange={(e) => setdob(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6 text-start">
          <input
            type="password"
            className=" value mt-5 w-75 p-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </section>

      {/* Country code & Mobile Number */}
      <section className="row ">
        <div className="col-md-6 text-center">
          <input
            type="dropdown"
            className=" value mt-5 w-75 p-2"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="col-md-6 text-start">
          <input
            type="text"
            className=" value mt-5 w-75 p-2"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
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
        <input
          type="checkbox"
          className="check"
          onChange={() => setTerms(!terms)}
        />
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

      {/* Button */}
      <section className="row">
        <div className="col-md-6 text-center">
          <button
            className="d-block mx-auto mt-4 px-5 py-2 rounded-3 fs-5 create"
            onClick={handleSubmit}
          >
            Create a Account
          </button>
        </div>
        <div className="col-md-6 text-center">
          <Link to="/" className="text-decoration-none">
            <button className="d-block mx-auto mt-4 px-5 py-2 rounded-3 fs-5 create">
              <img src={BackArrow} alt="Login" />
              Go Back
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
