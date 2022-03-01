import React from 'react'

export const Navbar = () => {
  return (
    <div className="w-full top-0 fixed p-4 border-b-2 border-teal-dark flex justify-between items-center">
      <img src="https://barcelonadigitaltalent.com/app/uploads/sites/3/2020/02/BDT-1.1-POSITIU_2-01.jpg" alt="Barcelona Digital Talent" className="h-12"/>
      <div className="uppercase font-bold text-teal-dark">
      <span className="mr-2">Data</span>
      <span>Companies</span>
      </div>
    </div>
  )
};