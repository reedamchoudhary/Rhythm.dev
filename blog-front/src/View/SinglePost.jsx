import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { postName } = useParams();
  console.log(postName);

  return <h1>=ji</h1>;
};

export default SinglePost;
