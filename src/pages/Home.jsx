import React from "react";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Teachers from "../components/Teachers";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Remaining Content */}
      <Packages />
      <Teachers />
    </>
  );
};

export default Home;
