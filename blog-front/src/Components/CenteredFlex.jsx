import { Flex } from "@chakra-ui/react";
import React from "react";

const CenteredFlex = (props) => {
  const { children, direction = "row" } = props;
  return (
    <Flex justifyContent={"center"} alignItems={"center"} direction={direction}>
      {children}
    </Flex>
  );
};

export default CenteredFlex;
