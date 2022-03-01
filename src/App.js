import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Companies from "./components/Companies/Companies";
import DataPage from "./components/DataPage/DataPage";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
<<<<<<< HEAD
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route path="/data" element={<DataPage />}></Route>
        </Routes>
        <Footer />
      </Router>
=======
      <Navbar />
      <main className="w-full my-24 p-12 h-full">
        <Table />
      </main>
      <Footer />
>>>>>>> 9f01255 (changed mock data, columns, style on table)
    </div>
  );
}

export default App;
