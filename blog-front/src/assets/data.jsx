import axios from "axios";

const Data = (setData) => {
  axios
    .get("https://rhythmdev-f2352-default-rtdb.firebaseio.com/blog.json")
    .then((response) => {
      // console.log(response.data);
      var arrResponse = Object.values(response.data).map((key) => {
        return key;
      });
      console.log("arrResponse=", arrResponse);
      setData(arrResponse);
    });
};

export default Data;
