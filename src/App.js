import React from "react";
import { Table } from "./components/Table/Table";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Navbar />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
