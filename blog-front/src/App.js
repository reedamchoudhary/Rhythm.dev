import "./App.css";
import HomePage from "./View/HomePage";
import Posts from "./View/Posts";
import SinglePost from "./View/SinglePost";
import Search from "./Components/Search";
import NotFound from "./View/NotFound";
import { Route, Routes } from "react-router-dom";
import * as PATHS from "./constants/path";
import Data from "./assets/data";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    Data(setData);
  }, []);
  console.log("data=", data);
  return (
    <div className="App">
      <UserContext.Provider value={data}>
        <Search />

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
