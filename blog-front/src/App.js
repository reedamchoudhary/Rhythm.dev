import "./App.css";
import HomePage from "./View/HomePage";
import Posts from "./View/Posts";
import SinglePost from "./View/SinglePost";
import Search from "./Components/Search";
import NotFound from "./View/NotFound";
import { Route, Routes } from "react-router-dom";
import * as PATHS from "./constants/path";

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.POST} element={<SinglePost />} />
        <Route path={PATHS.POSTS} element={<Posts />} />
        <Route path={PATHS.ANYOTHERPATH} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
