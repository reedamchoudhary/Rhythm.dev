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

export const UserContext = createContext();

function App() {
  const [data, setData] = useState({});
  const [theme, setTheme] = useState(false);
  const colors = {
    lightBgColor: "#dddddd",
    darkBgColor: "#232323",
  };

  useEffect(() => {
    Data(setData);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? colors.darkBgColor : colors.lightBgColor,
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
