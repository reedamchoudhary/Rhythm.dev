import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div
        class="carousel-inner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80vw",
        }}
      >
        <div class="carousel-item active">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </div>
        <div class="carousel-item">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </div>
        <div class="carousel-item">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </div>
      </div>
      <a
        style={{
          position: "fixed",
          bottom: "500px",
          left: "-70px",
        }}
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        style={{
          position: "fixed",
          bottom: "500px",
          right: "-70px",
        }}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
