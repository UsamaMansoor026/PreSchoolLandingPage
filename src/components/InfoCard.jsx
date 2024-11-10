import React from "react";

const InfoCard = ({ data }) => {
  return (
    <article style={{ backgroundColor: data.bgColor }}>
      <img src={data.icon} alt="" />
    </article>
  );
};

export default InfoCard;
