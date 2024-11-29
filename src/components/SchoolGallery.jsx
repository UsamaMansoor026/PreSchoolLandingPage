import React, { useEffect, useState } from "react";
import { schoolPhotos } from "../constants/constants";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const SchoolGallery = () => {
  const [imageSlider, setImageSlider] = useState();

  useEffect(() => {
    const slider = document.querySelector(".sliderImages");
    setImageSlider(slider);
  }, []);

  const nextSlide = () => {
    imageSlider?.append(imageSlider.querySelector("img:first-child"));
  };

  const prevSlide = () => {
    imageSlider?.prepend(imageSlider.querySelector("img:last-child"));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="subSection">
      <h1 className="sectionHeading textCenter">Our School Photos</h1>

      {/* Image Slider */}
      <div className="imageSlider_container">
        <div className="sliderImages">
          <img src={schoolPhotos.one} alt="" />
          <img src={schoolPhotos.two} alt="" />
          <img src={schoolPhotos.three} alt="" />
          <img src={schoolPhotos.four} alt="" />
          <img src={schoolPhotos.five} alt="" />
          <img src={schoolPhotos.six} alt="" />
        </div>

        <div className="slider_controlls">
          <button id="prev" onClick={prevSlide}>
            <HiOutlineArrowSmLeft />
          </button>
          <button id="next" onClick={nextSlide}>
            <HiOutlineArrowSmRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolGallery;
