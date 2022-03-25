import React, { useContext } from "react";
import { UserContext } from "../App";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { theme, setTheme, lightBgColor, darkBgColor } =
    useContext(UserContext);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  console.log("theme=", theme);

  return (
    <Box
      backgroundColor={theme ? lightBgColor : darkBgColor}
      position={"fixed"}
      top={"0"}
      padding={"7px"}
      borderBottomRadius={"10px"}
      cursor={"pointer"}
    >
      {!theme ? (
        <MoonIcon
          onClick={toggleTheme}
          color={"white"}
          w={6}
          h={6}
          marginTop={"10px"}
        />
      ) : (
        <SunIcon
          onClick={toggleTheme}
          marginTop={"10px"}
          color={"black"}
          w={6}
          h={6}
        />
      )}
    </Box>
  );
};

export default ThemeToggler;
