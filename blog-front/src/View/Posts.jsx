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
              w={"500px"}
              minHeight={"150px"}
              hover={false}
            />
          );
        })
      : "";

  return (
    <CenteredFlex className={"posts"} direction={"column"}>
      {allPosts}
    </CenteredFlex>
  );
};

export default Posts;
