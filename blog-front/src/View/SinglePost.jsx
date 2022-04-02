import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import Page from "../Components/Page";

const SinglePost = () => {
  const { postName } = useParams();
  const { data } = useContext(UserContext);

  const [post, setPost] = useState("");

  useEffect(() => {
    if (data?.length > 0) {
      let auxData = data?.filter((item) => item.postTitle.trim() === postName);
      setPost(auxData[0]);
    }
  }, [data]);

  return <Page post={post} />;
};

export default SinglePost;
