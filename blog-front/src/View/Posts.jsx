import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../App";
import Card from "../Components/Card";
import CenteredFlex from "../Components/CenteredFlex";
import "./CommonScreen.css";

const Posts = () => {
  const { data } = useContext(UserContext);

  const allPosts =
    data.length > 0
      ? data?.map((item, index) => {
          return (
            <Card
              title={item?.postTitle}
              description={item?.Description}
              date={item?.Date}
              engagement={item?.Engagement}
              w={"700px"}
              minHeight={"150px"}
              hover={false}
            />
          );
        })
      : "";

  return (
    <CenteredFlex className={"posts"} direction={"column"}>
      <InputGroup
        marginBottom={"30px"}
        w={"900px"}
        backgroundColor={"white"}
        borderRadius={"10px"}
      >
        <Input autoFocus />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>

      {allPosts}
    </CenteredFlex>
  );
};

export default Posts;
