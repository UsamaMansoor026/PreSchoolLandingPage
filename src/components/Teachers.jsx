import React from "react";
import { teachersData } from "../constants/constants";

const Teachers = () => {
  return (
    <section
      id="teachers"
      className="subSection"
      style={{ position: "relative" }}
    >
      <div className="section_innerWrapper" style={{ boxShadow: "none" }}>
        <div className="subHeading_wrapper">
          <h2 className="sectionHeading col-5">Meet Our Teachers</h2>
        </div>
      </div>

      <div className="teachers_cards">
        {teachersData?.map((data) => (
          <article key={data.id} className="teacher_card">
            <div>
              <img src={data.profileImg} alt={data.name} />
            </div>
            <div>
              <h3 className="subHeading font-semibold">{data.name}</h3>
              <p>{data.rank}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
