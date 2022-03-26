import React, { useContext } from "react";
import "./Components.css";
import { UserContext } from "../App";

const Card = () => {
  const { theme } = useContext(UserContext);
  const heading = "Title Title Title Title Title ";

  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <div
      className="card"
      style={{
        padding: "10px",
        backgroundColor: theme
          ? "rgba(0, 0, 0, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
      }}
      onClick={() => onClickHandler}
    >
      <h1 style={{ fontSize: heading.length > 71 ? "16px" : "20px" }}>
        {heading}
      </h1>
      <p>This is some text which represents the description of a post</p>
    </div>
  );
};

export default Card;
