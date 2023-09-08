import React from "react";
import facebook from "../Assets/Icon/facebook.svg";
import twitter from "../Assets/Icon/twitter.svg";
import youtube from "../Assets/Icon/youtube.svg";
import instagram from "../Assets/Icon/instagram.svg";
import linkedin from "../Assets/Icon/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="text-end p-3 ">
        <h6 className="d-inline-block px-2 pt-2 h6">Join the conversation</h6>
        <span className="px-2">
          <a href="https://www.facebook.com/RoyalEnfield" target="_blank" rel="noreferrer">
            <img alt="social-media" src={facebook} className="social-logo" />
          </a>
        </span>
        <span className="px-2">
          <a href="https://twitter.com/royalenfield?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer">
            <img alt="social-media" src={twitter} className="social-logo" />
          </a>
        </span>
        <span className="px-2">
          <a href="https://www.youtube.com/@royalenfield" target="_blank" rel="noreferrer">
            <img alt="social-media" src={youtube} className="social-logo" />
          </a>
        </span>
        <span className="px-2">
          <a href="https://www.instagram.com/royalenfield/?hl=en" target="_blank" rel="noreferrer">
            <img alt="social-media" src={instagram} className="social-logo" />
          </a>
        </span>
        <span className="px-2">
          <a href="https://www.linkedin.com/company/royal-enfield/" target="_blank" rel="noreferrer">
            <img alt="social-media" src={linkedin} className="social-logo" />
          </a>
        </span>
        <hr />
      </div>
      <div className="row pt-4 mx-5">
        <div className="col-md-2   col-sm-6   text-start">
          <h6 className="">MotoroCycles</h6>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            Super Meteor 650
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            Hunter 350
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            Scram 411
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            Classic 350
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            Meteor 350
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor pb-3">
            Interceptor 650
          </Link>
        </div>
        <div className="col-md-2   col-sm-6  ">
          <h6>Rides & Events</h6>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor pb-3 ">
            Rides
          </Link>
        </div>
        <div className="col-md-2 col-sm-6  ">
          <h6>Support</h6>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor pb-3">
            Contact Us
          </Link>
        </div>
        <div className="col-md-2  col-sm-6  ">
          <h6>About Us</h6>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor pb-3">
            Since 1901
          </Link>
        </div>
        <div className="col-md-2 col-sm-6 ">
          <h6>News & Media</h6>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            News
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor ">
            Press Releases
          </Link>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor pb-3">
            Media Kit
          </Link>
        </div>
        <div className="col-md-2 col-sm-6 ">
          <h6>Our World</h6>
          <Link to="/motorcycle" className="text-decoration-none pt-2 d-block anchor pb-3">
            Royal EnField Web
          </Link>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="d-flex justify-content-between">
        <p className="px-4">&copy; 2023 Designed by Varun</p>
        <p className="px-4">
          <a href="./" className="text-decoration-none anchor">
            Term and Conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
