import React from "react";

const picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="ImageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Downlaod Image:{" "}
        <a target="_blank" href={data.src.large}>
          Click here
        </a>
      </p>
    </div>
  );
};

export default picture;
