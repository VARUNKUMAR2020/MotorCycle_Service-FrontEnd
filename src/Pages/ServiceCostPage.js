import React from "react";
import NavBar from "../Components/NavBar";
import {  useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Playstore from "../Assets/Icon/googlePlay.webp";
import Appstore from "../Assets/Icon/appStore.webp";
import Redirect from "../Components/Redirect";
import arrow from "../Assets/Icon/Forward-arrow.svg"

const ServiceCostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.name;
  const State = location.state.State;
  const City = location.state.city;
  const Interval = location.state.interval;

  const handleService=()=>{
     navigate("/login")
  }

  return (
    <div>
      <NavBar />
      <div className="cal-bg pb-4">
        <h3 className="h2 text-light pt-5 ps-4 fw-bold">
          ESTIMATED <span className="high">SERVICE COST</span>
        </h3>
        <p className="ps-4 fs-4 sub-text">
          Cost estimated based on your inputs.
        </p>

        {/* details of the vechicle */}
        <div className="row">
          <div className="col-md-5 mx-4">
            <div className="model ">
              <div>
                <h3 className="text-light ps-3 pt-2 h4 fw-bold">{name}</h3>
                <span className="sub-text ps-3 ">500 CC</span>
              </div>

              <div className="ps-3 pt-3">
                <h6 className="sub-text">Location:</h6>
                <h5 className="text-light">
                  {State},{City}
                </h5>
              </div>

              <div className="ps-3 pt-3  pb-4">
                <h6 className="sub-text">Service Interval</h6>
                <h5 className="text-light">{Interval}</h5>
              </div>
            </div>

            <div className="model mt-3">
              <h4 className="text-light ps-3 pt-2 h4 fw-bold">
                Repair and replacement add on's
              </h4>

              <div className="text-light ms-3">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th>Part Name</th>
                      <th>Price (In INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BRAKE OIL DOT 4-100 ML</td>
                      <td>₹536.00</td>
                    </tr>
                    <tr>
                      <td>ADAPTOR-WITH PAV CONNECTION</td>
                      <td>₹536.00</td>
                    </tr>
                    <tr>
                      <td>LIQUID GUN SEMI SYNTHETIC-15W50- 210 LTS</td>
                      <td>₹260.00</td>
                    </tr>
                    <tr>
                      <td>CHAIN LUBE & CLEANER KIT- 500ML</td>
                      <td>₹120.00</td>
                    </tr>
                    <tr>
                      <td>60K Kit C500/TB500-BS4 & B500-BS4</td>
                      <td>₹604.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="col-md-6 ">
            <div className="text-light ps-5 fs-5 model ms-3 pb-3">
              <h4 className="text-light ps-3 pt-2 h4 fw-bold">Total</h4>
              <table className="table table-dark table-striped mt-4">
                <tbody>
                  <tr>
                    <td>Parts charges</td>
                    <td>₹2,542.00</td>
                  </tr>
                  <tr>
                    <td>Labour charge</td>
                    <td>₹944.00</td>
                  </tr>
                  <tr>
                    <td>Grand Total</td>
                    <td>₹3,486.00</td>
                  </tr>
                </tbody>
              </table>
              <p className="discliamer">
                <span className="sub-text fs-6">Disclaimer: </span> The
                above-mentioned estimated maintenance service cost is inclusive
                of GST and has been calculated based on the information you have
                provided. The actual service cost may vary depending upon the
                assessment of your vehicle, availability of the spare parts,
                cost of labour deployed, repairs carried out on your vehicle and
                additional items used that are not included in the maintenance
                service.
              </p>
              <div className="text-end">
              <button className=" fs-5 p-2 cal" onClick={handleService}>
                Book Service
                <span className="f-arrow py-3">
                  <img src={arrow} alt="symbol" />
                </span>
              </button>
              </div>
            </div>

            <div className="model p-4 text-light  text-center ms-3 mt-4">
              <h3 className="fw-bold h4">Download Royal Enfield App</h3>
              <p className="discliamer">
                Booking your Royal Enfield service is now even easier with the
                Royal Enfield App.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.royalenfield.reprime&hl=en&pli=1"
                target="_blank" rel="noreferrer"
              >
                <img src={Playstore} alt="download" className="mx-3" />
              </a>
              <a
                href="https://apps.apple.com/app/royal-enfield-app/id1472963660"
                target="_blank" rel="noreferrer"  
              >
                <img src={Appstore} alt="download" />
              </a>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <Redirect />
      <Footer />
    </div>
  );
};

export default ServiceCostPage;
