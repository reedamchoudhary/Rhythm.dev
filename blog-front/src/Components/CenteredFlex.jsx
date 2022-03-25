import { Flex } from "@chakra-ui/react";
import React from "react";

const CenteredFlex = (props) => {
  const {
    children,
    direction = "row",
    w = "100%",
    h = "100%",
    ...rest
  } = props;
  return (
    <Flex
      w={w}
      h={h}
      justifyContent={"center"}
      alignItems={"center"}
      direction={direction}
      margin={"0px"}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default CenteredFlex;
