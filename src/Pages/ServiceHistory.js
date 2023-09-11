import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Redirect from "../Components/Redirect";
import Footer from "../Components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ServiceHistory = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  const [name, setName] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      axios
        .post("https://motorcycle-backend.onrender.com/royalenfield/history", {
          token: window.localStorage.getItem("token"),
        })
        .then((res) => {
          if (res.data.status) {
            setDetails(res.data.data);
            setName(res.data.name);
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        });
    } else {
      alert("Please Login");
      navigate("/login");
    }
  }, []);

  const handleLogOut = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="head-call">
        <div className="row pt-4">
          <div className="col-md-6">
            <h4 className="user ps-3">
              WELCOME <span className="text-light fw-light">{name}</span>
            </h4>
          </div>
          <div className="col-md-6 text-end">
            <button className="log-out me-4 px-3 py-2" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        </div>
        <div className="text-light pt-5">
          <h3 className="ps-3">History of your Services</h3>
        </div>
        {details ? (
          <div className=" px-5 mt-5">
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
            <h3 className="text-danger h4 ">No Motorcycle History</h3>
          </div>
        )}

        <Redirect />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceHistory;
