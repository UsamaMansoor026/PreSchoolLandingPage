import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="heroSection">
        <div className="parallex_img"></div>
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
      <section className="subSection">
        <div>
          <h2 className="sectionHeading">Unique Learning Environment</h2>

          <div className="cards_container"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
