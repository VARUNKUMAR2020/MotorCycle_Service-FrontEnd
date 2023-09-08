import React from "react";
import NavBar from "../Components/NavBar";
import Service from "../Components/Service";
import Call from "../Components/Call";
import Footer from "../Components/Footer";
import Redirect from "../Components/Redirect";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Service />
      <Call />
      <Redirect/>
      <Footer />
    </div>
  );
};

export default HomePage;
