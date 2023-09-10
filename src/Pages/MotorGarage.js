import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Redirect from "../Components/Redirect";
import Footer from "../Components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MotorGarage = () => {
  const navigate = useNavigate();

  const [addMotor, setAddMotor] = useState(false);
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [RegNum, setRegNum] = useState("");
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3000/royalenfield/userdata", {
        token: window.localStorage.getItem("token"),
      })
      .then((res) => {
        setUser(res.data.data.firstName);
        setMail(res.data.data.email);
        setDetails(res.data.motorData);
        toast.success(`Hi ${user} , Welcome to Motor Garage`);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/royalenfield/addMotor", {
        token: window.localStorage.getItem("token"),
        RegNum,
      })
      .then((res) => {
        toast.success(res.data.message);
        setDetails(res.data.data);
        console.log("hiii", res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleLogOut = () => {
    window.localStorage.clear();
    navigate("/");
  };
  const handleButton = () => {
    setAddMotor(true);
  };
  const handleBack = () => {
    setAddMotor(false);
  };

  return (
    <div>
      <NavBar />
      <div className="head-call">
        <div className="row pt-4">
          <div className="col-md-6">
            <h4 className="user">
              WELCOME <span className="text-light fw-light">{user}</span>
            </h4>
          </div>
          <div className="col-md-6 text-end">
            <button className="log-out me-4 px-3 py-2" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        </div>

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
              onChange={(e) => setRegNum(e.target.value)}
            />
            <input
              type="text"
              placeholder=""
              className="motor-input py-1 px-4 me-2 fw-bold"
              value={mail}
              disabled
            />
            <button
              className="mx-5 motor-garage-btn py-1 px-3 add fw-bold"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              className="motor-garage-btn py-1 px-3 add fw-bold"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        ) : details ? (
          <div className="pt-5 px-5">
            <table className="table table-dark table-striped ">
              <thead>
                <tr>
                  <th>Registration Number</th>
                  <th>Customer Name</th>
                  <th>Customer Phone Number</th>
                  <th>Status of Service</th>
                </tr>
              </thead>
              <tbody>
                {details.map((detail, index) => (
                  <tr key={index} className="">
                    <td>{detail.reg_no}</td>
                    <td>Varunkumar</td>
                    <td>8870187077</td>
                    <td className="status">{detail.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
