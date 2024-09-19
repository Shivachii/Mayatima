"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Hamburgerbtn } from "../Buttons/Hamburger";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import SearchBtn from "../Buttons/Search";
import FloatingNav from "./FloatingNav";
import NavLinks from "../Navbar/NavLinks";

function NavMotion() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      if (previous && current < 0.05) {
        setVisible(true); // Show navbar when near the top
      } else {
        setVisible(false); // Hide navbar when scrolling down
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.nav
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative w-full bg-blue-300 bg-opacity-50 "
      >
        {/* Larger screen container */}
        <div className=" ">
          {/* Top section with social media icons */}
          <div className="relative  hidden lg:flex flex-row justify-end items-center">
            <div className="flex flex-row space-x-4 p-2 text-white">
              <Link
                href="https://twitter.com/yourprofile"
                aria-label="Twitter"
                className="bg-blue-300 rounded-full p-2 flex justify-center items-center"
              >
                <Twitter fill="#ffff" strokeWidth={0} width={20} height={20} />
              </Link>
              <Link
                href="https://facebook.com/yourprofile"
                aria-label="Facebook"
                className="bg-blue-300 rounded-full p-2 flex justify-center items-center"
              >
                <Facebook fill="#ffff" strokeWidth={0} width={20} height={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/yourprofile"
                aria-label="LinkedIn"
                className="bg-blue-300 rounded-full p-2 flex justify-center items-center"
              >
                <Linkedin fill="#ffff" strokeWidth={0} width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Sticky navbar section */}
          <div className="flex flex-1 gap-7 justify-between lg:justify-around items-center p-2">
            {/* Logo container and Title */}
            <div className="flex items-center space-x-4">
              <div className="rounded-full w-20 h-20 lg:w-16 lg:h-16">
                <Link href="/">
                  <Image
                    src="/child-bro.jpg"
                    alt="nairobi"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full rounded-full"
                  />
                </Link>
              </div>
              <Link href="/" className="hidden lg:block font-bold text-lg">
                MAYATIMA
              </Link>
            </div>
            {/* Small Screen container */}
            <div className="">
              <Hamburgerbtn />
            </div>
            {/* Nav links */}
            <div className=" hidden lg:flex flex-row space-x-8">
              <NavLinks />
            </div>
            {/* Contact and Search Modal */}
            <div className="hidden lg:flex flex-row space-x-4 p-2 items-center text-black">
              <SearchBtn />
              <div className="h-4 w-0.5 bg-black"></div>
              <Link href="/donate">Donate</Link>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

export default NavMotion;
