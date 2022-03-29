import React, { useContext } from "react";
import "./Components.css";
import { UserContext } from "../App";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Path from "../constants/path";

const Card = (props) => {
  const navigate = useNavigate();

  const { theme, colors } = useContext(UserContext);
  const {
    title,
    description,
    engagement,
    date,
    w = "230px",
    minHeight = "230px",
    hover = true,
  } = props;

  const onClickHandler = () => {
    navigate(Path.POST);
  };

  return (
    <Box
      className="card"
      style={{
        width: w,
        minHeight: minHeight,
        margin: "10px",
        backgroundColor: theme
          ? "rgba(0, 0, 0, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
      }}
      _hover={
        hover
          ? {
              height: "250px",
              width: "250px",
            }
          : ""
      }
      onClick={onClickHandler}
    >
      <h1 style={{ fontSize: "23px", marginBottom: "10px" }}>{title}</h1>
      <p
        style={{
          fontFamily: "Laila",
          fontSize: "13px",
          padding: "10px 0px",
          color: colors.pink,
        }}
      >
        <i style={{ display: "block" }}>
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
