import axios from "axios";

const Data = (setData) => {
  axios
    .get("https://rhythmdev-f2352-default-rtdb.firebaseio.com/blog.json")
    .then((response) => {
      console.log("response=", response);
      setData(response);
    });
};

export default Data;
