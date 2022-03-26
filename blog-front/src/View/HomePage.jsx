import React, { useContext } from "react";
import "./CommonScreen.css";
// import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

const HomePage = () => {
  const { data, theme } = useContext(UserContext);
  console.log(data);
  return (
    <CenteredFlex direction={"column"} marginTop={"20px"}>
      {/* <Carousel /> */}
      <CenteredFlex w={"80vw"} justifyContent={"space-between"}>
        <Card
          title={data[0]?.postTitle}
          description={data[0]?.Description}
          date={data[0]?.Date}
          engagement={data[0]?.Engagement}
        />
        <Card />
        <Card />
        <Card />
      </CenteredFlex>
      <h1 className={"hero-heading"}>RHYTHM.DEV</h1>
      {/* <Carousel /> */}
    </CenteredFlex>
  );
};

export default HomePage;
