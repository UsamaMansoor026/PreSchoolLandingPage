import React from "react";

const InfoCard = ({ data }) => {
  return (
    <article
      className="info_card"
      style={{ "--infoCard-bgColor": data.bgColor }}
    >
      <div className="info_card_img">
        <img src={data.icon} alt="" />
      </div>
      <div className="info_card_content flexCol">
        <p>{data.content}</p>
        <h2 className="subHeading font-semibold">{data.title}</h2>
      </div>
    </article>
  );
};

export default InfoCard;
