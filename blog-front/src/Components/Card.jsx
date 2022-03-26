import React, { useContext } from "react";
import "./Components.css";
import { UserContext } from "../App";
import { Box } from "@chakra-ui/react";

const Card = (props) => {
  const { theme, colors } = useContext(UserContext);
  const { title, description, engagement, date } = props;

  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <Box
      className="card"
      style={{
        margin: "10px",
        backgroundColor: theme
          ? "rgba(0, 0, 0, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
      }}
      onClick={() => onClickHandler}
    >
      <h1 style={{ fontSize: "23px" }}>{title}</h1>
      <p
        style={{
          fontFamily: "Laila",
          fontSize: "13px",
          padding: "10px 0px",
          color: colors.pink,
        }}
      >
        <i>
          {date}.{" "}
          <span style={{ padding: "0px 10px" }}>
            {engagement} {engagement ? "mins read" : ""}
          </span>
        </i>
      </p>
      <p>{description}</p>
    </Box>
  );
};

export default Card;
