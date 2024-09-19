"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { AnimatePresence } from "framer";
import {
  faLocationArrow,
  faPhone,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search } from "lucide-react";
import { menuSlide, slide } from "../Animations/anim";

export const Hamburgerbtn = () => {
  return (
    <div className="flex h-10 items-center">
      <AnimatedHamburgerButton />
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: [0, 45],
      y: [0, 8],
      transition: { duration: 0.3 },
    },
  };

  const middleLineVariants = {
    closed: { opacity: 1, transition: { duration: 0.3 } },
    open: { opacity: 0, transition: { duration: 0.3 } },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: [0, -45],
      y: [-8],
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.button
      onClick={toggleMenu}
      className="relative z-50 flex h-12 w-12 flex-col items-center justify-center lg:hidden"
    >
      {/* Top line */}
      <motion.span
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        className="block h-1 w-8 bg-gold rounded-full"
      />
      {/* Middle line */}
      <motion.span
        variants={middleLineVariants}
        animate={isOpen ? "open" : "closed"}
        className="block h-1 w-8 bg-gold my-2 rounded-full"
      />
      {/* Bottom line */}
      <motion.span
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
        className="block h-1 w-8 bg-gold rounded-full"
      />
      {isOpen && <SideBar />}
    </motion.button>
  );
};

function SideBar() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="flex flex-col fixed right-0 top-0 w-[80%] h-screen z-10 bg-maroonDark text-white p-10 "
    >
      <div className="flex items-center justify-center mt-8 p-4">
        <form action="" className="relative flex items-center p-2">
          <Search className="absolute left-3 w-4 h-4 text-amber-900" />
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Type to Search"
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-900"
          />
        </form>
      </div>
      <motion.div
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex flex-col p-2 text-xl  "
      >
        <div className="flex flex-col gap-4 items-start justify-start">
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Who we Help</Link>

          <Link href="">Contact</Link>
        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="mt-36">
        <h1 className="font-medium  text-base">HEKIMA ADVOCATES</h1>
        <div className="bg-slate-400 w-full h-0.5 m-2"></div>
        <div className="text-sm">
          <ul className="space-y-2 list-inside">
            <li>
              <Link href="" className="flex items-center">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="text-gold p-2 w-4 h-4"
                />
                Nairobi
              </Link>
            </li>
            <li>
              <Link href="tel:+254111222333" className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gold p-2 w-4 h-4"
                />
                Call us: +254 111 222 333
              </Link>
            </li>
            <li>
              <Link
                href="mailto:ABC@gmail.com"
                target="_blank"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  icon={faInbox}
                  className="text-gold p-2 w-4 h-4"
                />
                Email us: ABC@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
