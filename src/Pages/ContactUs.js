import React from "react";
import NavBar from "../Components/NavBar";
import Redirect from "../Components/Redirect";
import Footer from "../Components/Footer";
import Call from "../Components/Call";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <Call/>
      <Redirect />
      <Footer />
    </div>
  );
};

export default ContactUs;
