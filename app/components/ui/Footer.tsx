import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInbox, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-slate-200 ">
      {/* LAYOUT CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* QUICK LINKS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* CONTACT & PARTICIPATION CONTAINER */}
          <div className="flex flex-col p-4 m-4">
            {/* PARTICIPATION */}
            <div className="flex-col">
              <h1 className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300 my-2">
                Work with Us
              </h1>
              <ul className="list-inside m-2 p-2">
                <li className="my-2">
                  <Link href="">Donate</Link>
                </li>
                <li className="my-2">
                  <Link href="/get-involved/volunteer">Volunteer</Link>
                </li>
              </ul>
            </div>
            {/* ABOUT US*/}
            <div className="flex-col">
              <h1 className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300 my-2">
                About Us
              </h1>
              <ul className="list-inside m-2 p-2">
                <li className="my-2">
                  <Link href="/about#who-we-are">Who we Are</Link>
                </li>
                <li className="my-2">
                  <Link href="/about#what-we-do">What we Do</Link>
                </li>
                <li className="my-2">
                  <Link href="/about#how-we-work">How we Work</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* CONTACT US AND    */}
          <div className="flex flex-col p-4 m-4">
            {/* CONTACTS*/}
            <div className="flex-col">
              <h1 className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300 my-2">
                Contact Us
              </h1>
              <ul className="list-inside m-2 p-2">
                <li className="my-2">
                  <Link href="">
                    <FontAwesomeIcon icon={faPhone} /> +254 111 222 333
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="">
                    <FontAwesomeIcon icon={faInbox} /> ABC@gmail.com
                  </Link>
                </li>
              </ul>
              <div className="flex flex-row space-x-3 m-2 p-2">
                <Link href="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
              </div>
            </div>

            {/* LEGAL */}
            {/* <div className="flex-col">
                                            <h1 className='text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300 my-2'>Legal</h1>
                                            <ul className='list-inside m-2 p-2'>
                                                <li className='my-2'>
                                                    <Link href=''>Privacy Policy</Link>
                                                </li>
                                                <li className='my-2'>
                                                    <Link href=''>Terms and conditions</Link>
                                                </li>
                                            </ul>
                                        </div> */}
          </div>
        </div>
        <div className="p-4 m-4 text-wrap">
          <p>
            We warmly welcome all our esteemed partners, supporters, and
            community members to join hands with us in our mission. Together, we
            can create lasting impact, drive meaningful change, and build a
            brighter future for those we serve. Your collaboration and
            dedication are invaluable to us, and we are excited to work
            alongside you to achieve our shared goals.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative p-2  bg-black text-white text-center">
        ©COPYRIGHT 2024. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
