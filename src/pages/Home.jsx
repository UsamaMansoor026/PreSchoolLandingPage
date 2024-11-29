import React from "react";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Teachers from "../components/Teachers";
import SchoolGallery from "../components/SchoolGallery";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Remaining Content */}
      <Packages />
      <Teachers />
      <SchoolGallery />
      <Contact />
    </>
  );
};

export default Home;
