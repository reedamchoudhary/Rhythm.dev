import React from "react";
import "./Components.css";

const Card = () => {
  const heading = "Title Title Title Title Title ";
  console.log(heading.length);

  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <div className="card" onClick={() => onClickHandler}>
      <h1 style={{ fontSize: heading.length > 71 ? "16px" : "20px" }}>
        {heading}
      </h1>
      <p>This is some text which represents the description of a post</p>
    </div>
  );
};

export default Card;
