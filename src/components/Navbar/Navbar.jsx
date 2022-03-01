import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="w-full top-0 fixed p-4 border-b-2 border-teal-dark flex justify-between items-center">
      <Link to="/">
      <img src="https://barcelonadigitaltalent.com/app/uploads/sites/3/2020/02/BDT-1.1-POSITIU_2-01.jpg" alt="Barcelona Digital Talent" className="h-12"/></Link>
=======
    <div className="w-full top-0 fixed px-12 py-4 border-b-2 border-teal-dark flex justify-between items-center">
      <img
        src="https://barcelonadigitaltalent.com/app/uploads/sites/3/2020/02/BDT-1.1-POSITIU_2-01.jpg"
        alt="Barcelona Digital Talent"
        className="h-12"
      />
>>>>>>> 149cfa8 (accept changes)
      <div className="uppercase font-bold text-teal-dark">
        <span className="mr-2">
          <Link to="/data">Data</Link>
        </span>
        <span>
          <Link to="/companies">Companies</Link>
        </span>
      </div>
    </div>
  );
};
