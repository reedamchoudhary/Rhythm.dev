import React, { useContext } from "react";
import "./CommonScreen.css";
import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";
import Card from "../Components/Card";

const HomePage = () => {
  const data = useContext(UserContext);
  return (
    <CenteredFlex direction={"column"} w="100%" h="96%">
      <Card />
      <h1 className={"hero-heading"}>RHYTHM.DEV</h1>
      <Card />
    </CenteredFlex>
  );
};

export default HomePage;
