import React from "react";
import ThemeToggler from "./ThemeToggler";
import Search from "./Search";
import CenteredFlex from "./CenteredFlex";

const Header = () => {
  return (
    <CenteredFlex padding={"10px"} h={"7%"} justifyContent={"end"}>
      <Search />
      <ThemeToggler />
    </CenteredFlex>
  );
};

export default Header;
