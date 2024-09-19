"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import SearchBtn from "../Buttons/Search";
import NavLinks from "../Navbar/NavLinks";

type NavProps = {
  className?: string;
};

export default function FloatingNav({ className }: NavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Ensure that both current and the previous scrollYProgress are defined
    const previous = scrollYProgress.getPrevious();
    if (typeof current === "number" && typeof previous === "number") {
      let direction = current - previous;

      if (scrollYProgress.get() < 0.09) {
        setVisible(false); // Hide navbar when near the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show navbar when scrolling up
        } else {
          setVisible(false); // Hide navbar when scrolling down
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`flex fixed w-full z-[9999] bg-maroonDark text-black  h-[150px] top-0 ${className}`}
      >
        <div className=" flex flex-1 gap-7 justify-around items-center p-2 text-white">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-bold text-lg ">
              BIK ADVOCATES
            </Link>
          </div>
          <div className="flex flex-row space-x-8">
            <NavLinks />
          </div>
          <div className="flex flex-row space-x-4 p-2  items-center text-white">
            <SearchBtn />
            <div className="h-4 w-0.5 bg-white"></div>
            <Link href="/Contact">Contact Us</Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
