import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import React, { useContext } from "react";
import CenteredFlex from "./CenteredFlex";
import { UserContext } from "../App";

const NavigationArrows = (props) => {
  const { colors } = useContext(UserContext);
  const {
    children,
    direction = "row",

    ...rest
  } = props;

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

              boxShadow: "10px 10px 10px #B2B1B9",
            }}
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

              boxShadow: "10px 10px 10px #B2B1B9",
            }}
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

              boxShadow: "10px 10px 10px #B2B1B9",
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

              boxShadow: "10px 10px 10px #B2B1B9",
            }}
          />
        </CenteredFlex>
      )}
    </>
  );
};

export default NavigationArrows;
