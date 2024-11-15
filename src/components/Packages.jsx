import React from "react";
import { packagesData } from "../constants/constants";
import Button from "./Button";

const Packages = () => {
  return (
    <div className="subSection parallexSection" style={{ minHeight: "500px" }}>
      <div
        className="parallex_img"
        style={{ "--parallexBg": "url('/assets/gallery1.jpg')" }}
      ></div>

      <div className="section_innerWrapper" style={{ boxShadow: "none" }}>
        <div className="subHeading_wrapper">
          <h2 className="sectionHeading col-5">
            Three easy steps to successful future
          </h2>
        </div>
      </div>

      <div className="cards_container" style={{ marginTop: "-40px" }}>
        {packagesData.map((data) => (
          <article key={data.id} className="package_card">
            <div>
              <img src={data.icon} alt="" />
              <h3>{data.title}</h3>
            </div>
            <div>
              <p>{data.desc}</p>
              <div style={{ width: "100%" }}>
                <Button bgColor="var(--pinkish)" textColor="var(--white)">
                  Enroll Child
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Packages;
