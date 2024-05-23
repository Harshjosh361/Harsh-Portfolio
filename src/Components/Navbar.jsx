import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };
  const closeDialog = (id) => {
    setActive(false); 

    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); 
  };

  return (
    <div className="navbar w-full p-2 py-1  flex justify-between items-center border-b border-neutral-700 bg-nav fixed z-50">
      <div className="nav-start flex">
        <AnchorLink href="#home">
          <img
            src={logo}
            className="w-13 h-13 animate-fade-right animate-once animate-duration-1000 "
            alt="logo"
            loading="lazy"
          />
        </AnchorLink>
      </div>
      <div className="hidden nav-mid lg:flex gap-12 text-white font-sans mr-20 text-xl">
        <AnchorLink
          href="#home"
          className="hover:text-slate-300 hover:cursor-pointer "
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#about"
          className=" hover:text-slate-300 hover:cursor-pointer"
        >
          About
        </AnchorLink>
        <AnchorLink
          href="#skills"
          className="hover:text-slate-300 hover:cursor-pointer"
        >
          Skills
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="hover:text-slate-300 hover:cursor-pointer"
        >
          Contact Me
        </AnchorLink>
      </div>

      <div className="lg:hidden nav-end text-white mr-5 text-2xl">
        <button onClick={ToggleClass} className="cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Nav-dialog */}
      {isActive && (
        <div className="fixed inset-0 p-2 py-1 bg-nav">
          <div className="nav-dialog flex justify-between items-center  w-full">
            <AnchorLink href="#home">
              <img src={logo} alt="logo" loading="lazy" />
            </AnchorLink>
            <button
              className="text-white cursor-pointer mr-5 text-2xl bg-blue-950 w-10"
              onClick={ToggleClass}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="mt-3 flex flex-col bg-web  text-white ">
            <AnchorLink
              href="#home"
              onClick={closeDialog}
              className="font-medium m-3 p-3 text-lg hover:text-gray-300"
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#about"
              onClick={closeDialog}
              className="font-medium m-3 p-3 text-lg hover:text-gray-300"
            >
              About
            </AnchorLink>
            <a
              href="#skills"
              onClick={closeDialog}
              className="font-medium m-3 p-3 text-lg hover:text-gray-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={closeDialog}
              className="font-medium m-3 p-3 text-lg hover:text-gray-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
