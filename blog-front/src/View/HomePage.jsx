import React, { useContext } from "react";
import "./CommonScreen.css";
// import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

const HomePage = () => {
  const data = useContext(UserContext);
  return (
    <CenteredFlex direction={"column"} marginTop={"20px"}>
      <Carousel />
      <h1 className={"hero-heading"}>RHYTHM.DEV</h1>
      <Carousel />
    </CenteredFlex>
  );
};

export default HomePage;
