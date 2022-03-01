<<<<<<< HEAD
import React from 'react'
import {Link} from "react-router-dom"
=======
import React from "react";
>>>>>>> 9f01255 (changed mock data, columns, style on table)

export const Navbar = () => {
  return (
    <div className="w-full top-0 fixed px-12 py-4 border-b-2 bg-white border-teal-dark flex justify-between items-center">
      <img
        src="https://barcelonadigitaltalent.com/app/uploads/sites/3/2020/02/BDT-1.1-POSITIU_2-01.jpg"
        alt="Barcelona Digital Talent"
        className="h-12"
      />
      <div className="uppercase font-bold text-teal-dark">
<<<<<<< HEAD
      <span className="mr-2"><Link to="/data">Data</Link></span>
      <span><Link to="/companies">Companies</Link></span>
=======
        <span className="mr-2">Data</span>
        <span>Companies</span>
>>>>>>> 9f01255 (changed mock data, columns, style on table)
      </div>
    </div>
  );
};
