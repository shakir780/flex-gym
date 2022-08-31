import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import WhyUs from "./Components/WhyUs/WhyUs";
import Offer from "./Components/Offer/Offer";
import Register from "./Components/Register/Register";
import Plan from "./Components/Plan/Plan";
import Intro from "./Components/intro/intro";
import OurTeam from "./Components/OurTeam/OurTeam";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5800);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Hero />
          <WhyUs />
          <Offer />
          <Register />
          <Plan />
          <Intro />
          <OurTeam />
          <Testimonial />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
