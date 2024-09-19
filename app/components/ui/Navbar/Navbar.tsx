"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Navbarstyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faChevronDown,
  faTimes,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isAboutOpen, setisAboutOpen] = useState(false);
  const [isGetInvolved, setisGetInvolved] = useState(false);

  // Handle menu toggle
  const menuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };
  const handleClose = () => {
    // Close the menu
    setisMenuOpen(false);
  };

  // Handle About dropdown
  const handleAbout = () => {
    setisAboutOpen(!isAboutOpen);
    setisGetInvolved(false);
  };
  const handleGetInvolved = () => {
    setisGetInvolved(!isGetInvolved);
    setisAboutOpen(false);
  };

  return (
    <nav className="relative flex w-screen md:w-full p-4 max-h-80 bg-gradient-to-r from-cyan-300 to-blue-400">
      {/* CONTAINER FOR LINKS and LOGO */}
      <div className="hidden md:flex flex-row items-center justify-between w-full ">
        {/* LOGO CONTAINER */}
        <div
          className="bg-[url('/child-friends.jpg')] bg-center bg-cover h-[80px] w-[80px] rounded-full cursor-pointer"
          onClick={() => router.push("/")}
        ></div>
        {/* MAIN LINKS */}
        <div className="flex-1 flex justify-center px-4">
          <div className="navbar">
            <Link href="/">Home</Link>
            <div className="dropdown">
              <button className="dropbtn">Who we Are</button>
              <div className="dropdown-content z-50">
                <Link href="/pages/about/mission-vision">
                  Mission and Vision
                </Link>
                <Link href="/pages/about">About us</Link>
              </div>
            </div>
            <Link href="#projects">Projects</Link>
            <div className="dropdown">
              <button className="dropbtn">Get Involved</button>
              <div className="dropdown-content z-50">
                <Link href="/pages/get-involved">Find out how to</Link>
                <Link href="#">Donate</Link>
                <Link href="/pages/get-involved/events">Events</Link>
                <Link href="/pages/get-involved/volunteer">Volunteer</Link>
              </div>
            </div>
            <Link href="/pages/contact">Contact</Link>
            <Link href="#news">News</Link>
          </div>
        </div>

        {/* DONATE BUTTON */}
        <div className="flex">
          <button
            onClick={() => router.push("")}
            className="bg-yellow-500 hover:-translate-y-2 duration-300 px-2 py-2 hover:opacity-85 rounded-md"
          >
            Donate
          </button>
        </div>
      </div>
      {/* CONTAINER FOR SMALL SCREEN NAV */}
      <div className="relative flex sm:flex-row md:hidden  items-center justify-between w-full">
        {/* Image container */}
        <div
          className="bg-[url('/child-friends.jpg')] bg-center bg-cover h-[60px] w-[60px] rounded-full cursor-pointer"
          onClick={() => router.push("/")}
        ></div>
        {/* Menu toggler */}
        <button className="relative" onClick={menuToggle}>
          <FontAwesomeIcon icon={faBars} className="relative " />
        </button>
        {/* Side menu */}
        <div
          className={`p-4 absolute max-w-lg ${
            isMenuOpen ? "block" : "hidden"
          } mt-16 bg-slate-100 rounded-lg top-5 right-0 z-50 animate-appearance-in h-max overflow-auto max-h-96`}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 text-gray-600 hover:text-gray-900 p-2 m-2"
          >
            <FontAwesomeIcon icon={faTimes} className="w-[20px] h-[20px]" />
          </button>
          <div className="relative flex flex-col space-y-4 p-2 mt-5 m-2">
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex items-center space-x-2">
                <p className="flex-1">Who we Are</p>
                <button
                  onClick={handleAbout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform duration-500 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isAboutOpen && (
                <div className="flex flex-col space-y-2  transform-all ease-in duration-500 max-h-40 overflow-hidden bg-gray-100 p-2 mt-2">
                  <Link href="">About</Link>
                  <Link href="">Mission and Vision</Link>
                </div>
              )}
            </div>
            <div className="bg-blue-400 w-64 h-0.5"></div>
            <Link href="">Projects</Link>
            <div className="bg-blue-400 w-64 h-0.5"></div>

            <div className="flex flex-col space-y-2 w-full">
              <div className="flex items-center space-x-2">
                <p className="flex-1">Get involved</p>
                <button className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={handleGetInvolved}
                    className={`transition-transform duration-500  ${
                      isGetInvolved ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isGetInvolved && (
                <div className="flex flex-col space-y-2  transform-all ease-in duration-500 max-h-40 overflow-hidden bg-gray-100 p-2 mt-2">
                  <Link href="">Donate</Link>
                  <Link href="">Volunteer</Link>
                  <Link href="">Events</Link>
                </div>
              )}
            </div>
            <div className="bg-blue-400 w-64 h-0.5"></div>

            <Link href="">News</Link>
            <div className="bg-blue-400 w-64 h-0.5"></div>

            <Link href="/pages/contact">Contact</Link>
            <div className="bg-blue-400 w-64 h-0.5"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
