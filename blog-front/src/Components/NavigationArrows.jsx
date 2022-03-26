import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import CenteredFlex from "./CenteredFlex";
import { UserContext } from "../App";

const NavigationArrows = (props) => {
  const { colors, theme } = useContext(UserContext);
  const [shadowColor, setShadowColor] = useState("");
  const [shadow, setShadow] = useState("");
  const {
    children,
    direction = "row",
    setStartingIndex,
    startingIndex,
    ...rest
  } = props;

  useEffect(() => {
    setShadowColor(theme ? "#161616" : "#B2B1B9");
  }, [theme]);

  console.log("theme=", shadow);

  return (
    <>
      {direction === "row" ? (
        <CenteredFlex w={"100%"} justifyContent={"space-between"}>
          <ChevronLeftIcon
            cursor={"pointer"}
            w={"10"}
            h={"10"}
            color={"white"}
            borderRadius={"50%"}
            transitionProperty={"all"}
            transitionDuration={"0.3s"}
            transitionTimingFunction={"linear"}
            // transitionDelay={"1s"}
            _hover={{
              color: colors.pink,
              w: "12",
              h: "12",

              boxShadow: "10px 10px 10px " + shadowColor,
            }}
            onClick={() => setStartingIndex(startingIndex - 4)}
          />
          {children}
          <ChevronRightIcon
            cursor={"pointer"}
            w={"10"}
            h={"10"}
            color={"white"}
            borderRadius={"50%"}
            transitionProperty={"all"}
            transitionDuration={"0.3s"}
            transitionTimingFunction={"linear"}
            // transitionDelay={"1s"}
            _hover={{
              color: colors.pink,
              w: "12",
              h: "12",

              boxShadow: "10px 10px 10px " + shadowColor,
            }}
            onClick={() => setStartingIndex(startingIndex + 4)}
          />
        </CenteredFlex>
      ) : (
        <CenteredFlex direction={"column"}>
          <ChevronUpIcon
            cursor={"pointer"}
            w={"10"}
            h={"10"}
            color={"white"}
            borderRadius={"50%"}
            transitionProperty={"all"}
            transitionDuration={"0.3s"}
            transitionTimingFunction={"linear"}
            // transitionDelay={"1s"}
            _hover={{
              color: colors.pink,
              w: "12",
              h: "12",

              boxShadow: "10px 10px 10px " + shadowColor,
            }}
          />
          {children}
          <ChevronDownIcon
            cursor={"pointer"}
            w={"10"}
            h={"10"}
            color={"white"}
            borderRadius={"50%"}
            transitionProperty={"all"}
            transitionDuration={"0.3s"}
            transitionTimingFunction={"linear"}
            // transitionDelay={"1s"}
            _hover={{
              color: colors.pink,
              w: "12",
              h: "12",

              boxShadow: "10px 10px 10px " + shadowColor,
            }}
          />
        </CenteredFlex>
      )}
    </>
  );
};

export default NavigationArrows;
