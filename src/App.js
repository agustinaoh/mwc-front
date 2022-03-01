import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Companies from "./components/Companies/Companies";
import DataPage from "./components/DataPage/DataPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route path="/data" element={<DataPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
