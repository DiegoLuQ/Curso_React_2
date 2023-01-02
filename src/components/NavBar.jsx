import { useState, useEffect } from "react";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaBars,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    console.log(nav)
    setNav(!nav);
  };

  return (
    <div id="home" className=" w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      {/* Ocultamos por defecto y cuando este en una reSmall mostramos en flex */}
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookSquare size={25} className="mx-4" />
        <FaGithubSquare size={25} className="mx-4" />
        <FaLinkedin size={25} className="mx-4" />
        <FaInstagramSquare size={25} className="mx-4" />
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer hover:hover-style" />
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-500 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in-out duration-150"
        }
      >
        <ul className="h-full w-full pt-12 text-center">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
