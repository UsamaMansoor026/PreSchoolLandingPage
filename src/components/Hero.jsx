import React from "react";
import Button from "./Button";
import { cardsData } from "../constants/constants";
import InfoCard from "./InfoCard";

const Hero = () => {
  return (
    <>
      <section id="home" className="parallexSection">
        <div
          className="parallex_img"
          style={{ "--parallexBg": "url('/assets/heroBg.jpg')" }}
        ></div>
        <div className="heroSection_content">
          <div className="heroSection_content_wrapper">
            <div className="leftPortion">
              <h1>Welcome to PreSchool</h1>
              <div className="flexRow">
                <Button bgColor="var(--white)" textColor="var(--grayish)">
                  Learn More
                </Button>
                <Button bgColor="var(--pinkish)" textColor="var(--white)">
                  Let's go!
                </Button>
              </div>
            </div>
            <div className="rightPortion">
              <div>
                <img src="/assets/greenStar.svg" alt="" />
                <h3 className="subHeading">Welcoming Place For Every Child</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Sub Section */}
      <section id="about" className="subSection">
        <div className="section_innerWrapper">
          <div className="subHeading_wrapper">
            <h2 className="sectionHeading col-5">
              Unique Learning Environment
            </h2>
          </div>

          <div className="cards_container">
            {cardsData?.map((data) => {
              return <InfoCard data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
