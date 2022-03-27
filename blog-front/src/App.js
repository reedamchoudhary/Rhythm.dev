import "./App.css";
import HomePage from "./View/HomePage";
import Posts from "./View/Posts";
import SinglePost from "./View/SinglePost";
import NotFound from "./View/NotFound";
import { Route, Routes } from "react-router-dom";
import * as PATHS from "./constants/path";
import Data from "./assets/data";
import { createContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import HeroImage from "./assets/HeroImage.png";
import HeroImageDark from "./assets/HeroImageDark.png";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import Social from "./Components/Social";

export const UserContext = createContext();

function App() {
  const [data, setData] = useState({});
  const [theme, setTheme] = useState(false);
  const [loader, setLoader] = useState(true);

  const colors = {
    lightBgColor: "#dddddd",
    darkBgColor: "#232323",
    pink: "#E9A1B2",
    purple: "#FFD22E",
  };

  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    Data(setData);
  }, []);

  axios.interceptors.request.use(
    (config) => {
      setLoader(true);
      // Do something before request is sent
      return config;
    },
    (error) => {
      setLoader(false);
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      setLoader(false);
      // Any status code from range of 2xx
      // Do something with response data
      return response;
    },
    (error) => {
      setLoader(false);
      // Any status codes outside range of 2xx
      // Do something with response error
      return Promise.reject(error);
    }
  );

  console.log(loader);

  return (
    <div
      className="App"
      style={{
        color: theme ? "white" : "black",
        backgroundColor: theme ? colors.darkBgColor : colors.lightBgColor,
        backgroundImage: theme ? `url(${HeroImageDark})` : `url(${HeroImage})`,
      }}
    >
      <UserContext.Provider value={{ data, theme, setTheme, colors }}>
        <Header />
        <Routes>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.POST} element={<SinglePost />} />
          <Route path={PATHS.POSTS} element={<Posts />} />
          <Route path={PATHS.ANYOTHERPATH} element={<NotFound />} />
        </Routes>
        <Social />
        <div
          className="loader-overlay"
          style={{ display: loader ? "" : "none" }}
        >
          <PuffLoader color={colors.pink} loading={loader} size={150} />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
