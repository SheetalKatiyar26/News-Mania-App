import "./App.css";
import Navbar from "./Components/Navbar.js";
import NewsComponent from "./Components/NewsComponent.js";
import NewsComponentSearch from "./Components/NewsComponentSearch.js";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  let nextPage = 1;
  let apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const handleCall = (searchValue) => {
    setSearchKey(searchValue);
    console.log("handleCall searchValue", searchValue);
  };

  console.log("searchKey APP", searchKey);

  return (
    <div>
      <Router>
        <Navbar SearchTerm={handleCall} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="world"
                nextPage={nextPage}
                country="in"
                category="world"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                nextPage={nextPage}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                nextPage={nextPage}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                nextPage={nextPage}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                nextPage={nextPage}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                nextPage={nextPage}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsComponent
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                nextPage={nextPage}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            path="/search"
            element={
              <NewsComponentSearch
                setProgress={setProgress}
                apiKey={apiKey}
                nextPage={nextPage}
                country="in"
                searchKey={searchKey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
