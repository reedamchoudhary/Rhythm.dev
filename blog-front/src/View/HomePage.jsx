import React, { useContext, useEffect, useState } from "react";
import "./CommonScreen.css";
// import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";
import Card from "../Components/Card";
import NavigationArrows from "../Components/NavigationArrows";

const HomePage = () => {
  const { data, theme } = useContext(UserContext);
  const [firstGrid, setFirstGrid] = useState({
    start: 0,
    end: 0,
  });
  const [secondGrid, setSecondGrid] = useState({
    start: 0,
    end: 0,
  });
  const [firstGridArray, setFirstGridArray] = useState([]);
  const [secondGridArray, setSecondGridArray] = useState([]);
  const [horizontalCarouselClass, setHorizontalCarouselClass] = useState("");

  useEffect(() => {
    let half = Math.ceil(data?.length / 2);
    setFirstGrid({ ...firstGrid, end: half });
    setSecondGrid({ ...secondGrid, start: half, end: data?.length });
  }, [data]);

  useEffect(() => {
    changeCardData(firstGrid, setFirstGridArray);
    changeCardData(secondGrid, setSecondGridArray);
  }, [firstGrid, secondGrid]);

  const changeCardData = (grid, setCardGridArray) => {
    let tempArray = [];
    let limitingCondition =
      grid.start + 4 < grid.end ? grid.start + 4 : grid.end;
    if (grid.start < grid.end) {
      for (let i = grid.start; i < limitingCondition; i++) {
        tempArray.push(
          <Card
            title={data[i]?.postTitle}
            description={data[i]?.Description}
            date={data[i]?.Date}
            engagement={data[i]?.Engagement}
          />
        );
      }
    }
    setCardGridArray(tempArray);
  };

  return (
    <CenteredFlex direction={"column"}>
      <CenteredFlex w={"80vw"} h={"260px"} justifyContent={"space-between"}>
        <NavigationArrows
          grid={firstGrid}
          setGrid={setFirstGrid}
          horizontalCarouselClass={horizontalCarouselClass}
          setHorizontalCarouselClass={setHorizontalCarouselClass}
        >
          {firstGridArray}
        </NavigationArrows>
      </CenteredFlex>
      <h1 className={"hero-heading"}>RHYTHM.DEV</h1>
      <CenteredFlex w={"80vw"} h={"260px"} justifyContent={"space-between"}>
        <NavigationArrows
          grid={secondGrid}
          setGrid={setSecondGrid}
          horizontalCarouselClass={horizontalCarouselClass}
          setHorizontalCarouselClass={setHorizontalCarouselClass}
        >
          {secondGridArray}
        </NavigationArrows>
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default HomePage;
