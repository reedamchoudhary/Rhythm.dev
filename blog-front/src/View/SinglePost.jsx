import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import Page from "../Components/Page";
import Card from "../Components/Card";
import CenteredFlex from "../Components/CenteredFlex";
import { Heading } from "@chakra-ui/react";
import Carousel, { CarouselItem } from "../Components/Carousel";

const SinglePost = () => {
  const { postName } = useParams();
  const { data } = useContext(UserContext);

  const [post, setPost] = useState("");
  const [firstGridArray, setFirstGridArray] = useState([]);
  const [horizontalCarouselClass, setHorizontalCarouselClass] = useState("");
  const [firstGrid, setFirstGrid] = useState({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    if (data?.length > 0) {
      let auxData = data?.filter((item) => item.postTitle.trim() === postName);
      setPost(auxData[0]);
    }
    setFirstGrid({ ...firstGrid, end: data.length });
    changeCardData();
  }, [data]);

  const changeCardData = () => {
    let tempArray = [];
    let limitingCondition =
      firstGrid.start + 4 < firstGrid.end ? firstGrid.start + 4 : firstGrid.end;

    tempArray =
      data.length > 0
        ? data?.map((item, index) => {
            return (
              <CarouselItem>
                <Card
                  title={item?.postTitle}
                  description={item?.Description}
                  date={item?.Date}
                  engagement={item?.Engagement}
                />
              </CarouselItem>
            );
          })
        : "no data";
    setFirstGridArray(tempArray);
  };
  console.log(firstGridArray);

  return (
    <CenteredFlex flexDirection={"column"}>
      <Page post={post} />

      <Heading marginTop={"50px"}>More Posts...</Heading>
      <CenteredFlex
        w={"80vw"}
        h={"260px"}
        marginBottom={"40px"}
        justifyContent={"space-between"}
      >
        <Carousel
          limitingModulo={4}
          translatePercent={20}
          itemArrayLength={firstGridArray.length}
        >
          <CenteredFlex>{firstGridArray}</CenteredFlex>
        </Carousel>
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default SinglePost;
