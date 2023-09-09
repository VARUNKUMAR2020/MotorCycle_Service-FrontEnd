import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import WorldRide from "../Assets/Rides/1.avif";
import { Link } from "react-router-dom";
import Redirect from "../Components/Redirect";

const RidesPage = () => {
  return (
    <div>
      <NavBar />

      {/* Head */}
      <div className="head-call text-light p-3">
        <h3>Rides</h3>
      </div>

      {/* World Ride */}
      <div className="row p-5 head">
        <div className="col-md-12">
          <img src={WorldRide} className="img-fluid" />
        </div>
      </div>

      {/* Adventure */}
      <div className="row pt-5 head fs-2 justify-content-center">
        <div className="col-md-3 text-light adventure mx-5 mb-4">ADVENTURE</div>
        <div className="col-md-3 text-light discovery mx-5 mb-4">DISCOVERY</div>
        <div className="col-md-3 text-light training  mx-5 mb-4">TRAINING</div>
      </div>

      {/*Rides*/}

      <div className="head-call pt-4">
        <h3 className="text-center text-light h2 fw-bold">Rides</h3>

        <div className="row pt-4 justify-content-center">
          <div className="col-4 rides ">
            <h3 className="text-light fw-bold">Adventure</h3>
          </div>

          <div className="col-6">
            <div className="row text-center ps-5 justify-content-center">
              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 Himalayan pb-2">
                    Himalayan-Odyssey 2023
                  </h3>
                </div>
              </div>

              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 changthang pb-2">
                    Himalayan adventure changthang
                  </h3>
                </div>
              </div>
            </div>
            <div className="row text-center ps-5 justify-content-center">
              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 Zanskar pb-2">
                    Himalayan adventure Zanskar
                  </h3>
                </div>
              </div>
              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 white-out pb-2">White out</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row text-light justify-content-center pt-3">
          <div className="col-2 Eye1 mx-3 pb-2 fw-bold">
            Eye of the condor | A Anden Adventure
          </div>
          <div className="col-2 Eye2 mx-3 pb-2 fw-bold">
            The Red Dust Adventure | Great Outback
          </div>
          <div className="col-2 Eye3 mx-3 pb-2 fw-bold">
            High Atlas Adventure | Morocco
          </div>
          <div className="col-2 Eye4 mx-3 pb-2 fw-bold">
            Moto Himalayan Mustang
          </div>
        </div>

        {/*  */}
        <div className="row pt-4 justify-content-center ">
          <div className="col-6 me-3">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 Himalayan pb-2 fw-bold north-east">
                    Uncover North East 2023
                  </h3>
                </div>
              </div>

              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 changthang pb-2 fw-bold on-ride">
                    On Ride 2023
                  </h3>
                </div>
              </div>
            </div>
            <div className="row text-center justify-content-center fw-bold">
              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 Zanskar pb-2 fw-bold wave-runner">
                    Wave Runner
                  </h3>
                </div>
              </div>
              <div className="col-6">
                <div className="ride-1">
                  <h3 className="text-light h6 white-out pb-2 fw-bold cosmic">
                    Cosmic Carvan | Rann of Kutch
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 my-discovery">
            <h3 className="text-light fw-bold ">DISCOVERY</h3>
          </div>
        </div>

        <div className="row text-light justify-content-center pt-3 pb-5">
          <div className="col-4 training-bg mx-4 fw-bolder fs-1">Training</div>
          <div className="col-2 trail-1 mx-2 fs-6 fw-bold d-flex align-items-end pb-2">
            Royal Enfield Trial School
          </div>
          <div className="col-2 trail-2 mx-2 fs-6 fw-bold d-flex align-items-end pb-2">
            Royal Enfield Trial School I Level 2
          </div>
        </div>
      </div>

      {/*  */}

      <div className="gallery">
        <div className="row pt-5 justify-content-center">
          {/* Gallery */}
          <div className="col-md-6">
            <h3 className="text-light fw-bold">Gallery</h3>
            {/* row 1 */}
            <div className="row">
              <div className="col-md-6 mx-2 gallery-row-1-1"></div>
              <div className="col-md-6 mx-2 gallery-row-1-2"></div>
            </div>
            {/* row-2 */}
            <div className="row mt-3">
              <div className="col-md-6 mx-2 gallery-row-2-1"></div>
              <div className="col-md-6 mx-2 gallery-row-2-2"></div>
            </div>
            {/* row-3 */}
            <div className="row mt-3 pb-5">
              <div className="col-md-6 mx-2 gallery-row-3-1"></div>
              <div className="col-md-6 mx-2 gallery-row-3-2"></div>
            </div>
          </div>

          {/* Stay-tuned */}
          <div className="col-md-4 stay-tuned mb-5 ">
            <h3 className="text-light fw-bold">Stay Updated</h3>
            <div className="d-flex  mt-5 form-update">
              <div className="updated p-3">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="d-block input-form w-100"
                />
                <input
                  type="text"
                  placeholder="Email Id*"
                  className="d-block input-form w-100"
                />
                <input
                  type="text"
                  placeholder="+91"
                  className="input-form me-5 code"
                />
                <input
                  type="text"
                  placeholder="Mobile*"
                  className="input-form w-50"
                />
                <button className="verify">Verify</button>
                <input
                  type="text"
                  placeholder="Pincode*"
                  className="d-block input-form"
                />
                <p className="text-light form-disclaimer">
                  Disclaimer: By signing this form/checking this box, you
                  acknowledge and agree that we may use the information you
                  share with us, to communicate with you through e-mails, text
                  messages, WhatsApp and calls, in order to provide our product
                  or service related information and/or for promotional and
                  marketing purposes. All information provided will be secured
                  and processed as per our{" "}
                  <Link to="/term">privacy policy.</Link>
                </p>
                <input type="checkbox" className="ms-2 checkbox-form" />
                <p className="text-light form-disclaimer d-inline ms-3">
                  I accept the <Link to="/term" className="text-light fw-bold">terms and conditions</Link> as
                  well as <Link to="/term" className="text-light fw-bold">privacy policy.</Link>
                </p>
                <button className="stay-updated mt-4 mb-4 text-light px-3 py-2">
                  STAY UPDATED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Redirect />
      <Footer />
    </div>
  );
};

export default RidesPage;
