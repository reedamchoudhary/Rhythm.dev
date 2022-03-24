import React, { useContext } from "react";
import "./CommonScreen.css";
import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";

const HomePage = () => {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <CenteredFlex>
      <Heading>RHYTHM.DEV</Heading>
    </CenteredFlex>
  );
};

export default HomePage;
