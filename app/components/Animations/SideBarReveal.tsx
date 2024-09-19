"use client";
import {
  faLocationArrow,
  faPhone,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Search, Link } from "lucide-react";
import { menuSlide, slide } from "./anim";

export default function SideBarReveal() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="flex flex-col fixed right-0 top-0 w-[80%] h-screen z-10 bg-darkRed text-white p-10 "
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
