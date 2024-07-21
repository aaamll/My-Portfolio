"use client";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div className={`navbar ${isOpen ? 'responsive' : ''}`} id="navbar">
        <span className="menu-icon p-3 lg:hidden md:hidden md:overflow-x-hidden text-blue-600 my-5 text-3xl bg-white" onClick={toggleMenu}>&#9776;</span>
        <a href="/about" className="text-3xl  hover:bg-slate-700 hover:text-black hover:rounded  ">About</a>
        <a href="/services" className="text-3xl  hover:bg-slate-700 hover:text-black hover:rounded  ">Services</a>
        <a href="/projects" className="text-3xl  hover:bg-slate-700 hover:text-black hover:rounded  ">Projects</a>
        <a href="/blog" className="text-3xl  hover:bg-slate-700 hover:text-black hover:rounded  ">Blog</a>
      </div>
      <hr />
    </>
  );
}
