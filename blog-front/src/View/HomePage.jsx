import React, { useContext, useEffect, useState } from "react";
import "./CommonScreen.css";
// import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import NavigationArrows from "../Components/NavigationArrows";

const HomePage = () => {
  const { data, theme } = useContext(UserContext);
  const [startingIndex, setStartingIndex] = useState(0);
  const [cardGridArray, setCardGridArray] = useState([]);
  console.log(data);

  useEffect(() => {
    changeCardData();
  }, [data]);

  useEffect(() => {
    changeCardData();
  }, [startingIndex]);

  const changeCardData = () => {
    let tempArray = [];
    for (let i = startingIndex; i < startingIndex + 4; i++) {
      tempArray.push(
        <Card
          title={data[i]?.postTitle}
          description={data[i]?.Description}
          date={data[i]?.Date}
          engagement={data[i]?.Engagement}
        />
      );
    }
    setCardGridArray(tempArray);
  };

  console.log(startingIndex);

  return (
    <CenteredFlex direction={"column"} marginTop={"20px"}>
      <CenteredFlex w={"80vw"} h={"260px"} justifyContent={"space-between"}>
        <NavigationArrows
          setStartingIndex={setStartingIndex}
          startingIndex={startingIndex}
        >
          {cardGridArray}
        </NavigationArrows>
      </CenteredFlex>
      <h1 className={"hero-heading"}>RHYTHM.DEV</h1>
      <CenteredFlex w={"80vw"} h={"260px"} justifyContent={"space-between"}>
        <NavigationArrows>{cardGridArray}</NavigationArrows>
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default HomePage;
