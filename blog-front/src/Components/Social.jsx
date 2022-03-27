import { Box } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { UserContext } from "../App";

const Social = () => {
  const { colors, theme } = useContext(UserContext);
  const [showSocial, setShowSocial] = useState(false);
  const socialColor = colors.pink;

  return (
    <Box backgroundColor={"red"}>
      <Box
        position={"fixed"}
        bottom={"0px"}
        right={"0px"}
        w={"300px"}
        h={"300px"}
        borderTopLeftRadius={"100%"}
        backgroundColor={"rgba(255, 210, 46, 0.7)"}
        display={showSocial ? "" : "none"}
      >
        <Box position={"fixed"} bottom={"190px"} right={"60px"}>
          <GrInstagram
            size={"35px"}
            cursor={"pointer"}
            color={socialColor}
            onClick={() => window.open("https://www.instagram.com/geekydrama/")}
          />
        </Box>
        <Box position={"fixed"} bottom={"140px"} right={"150px"}>
          <FiTwitter
            size={"35px"}
            cursor={"pointer"}
            color={socialColor}
            onClick={() => window.open("https://twitter.com/ReedamChoudhary")}
          />
        </Box>
        <Box position={"fixed"} bottom={"60px"} right={"180px"}>
          <GrLinkedinOption
            size={"35px"}
            cursor={"pointer"}
            color={socialColor}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/reedam-choudhary-295124154/"
              )
            }
          />
        </Box>
      </Box>
      <Box
        position={"fixed"}
        bottom={"30px"}
        right={"30px"}
        onClick={() => setShowSocial(!showSocial)}
      >
        <FaUserAstronaut size={"35px"} cursor={"pointer"} color={socialColor} />
      </Box>
    </Box>
  );
};

export default Social;
