import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faInbox,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Reveal } from "../Animations/Reaveal";

export const Footer = () => {
  return (
    <footer className="bg-neutral-300/25 bg-opacity-20 p-4 text-black">
      <Reveal>
        <div className="container mx-auto flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          {/* About Section */}
          <div className="flex flex-col space-y-4 w-full md:w-1/3 p-4">
            <h1 className="font-bold text-lg">MAYATIMA</h1>
            <p>
              We warmly welcome all our esteemed partners, supporters, and
              community members to join hands with us in our mission. Together,
              we can create lasting impact, drive meaningful change, and build a
              brighter future for those we serve.
            </p>
          </div>

          {/* Work with Us and About Us Links */}
          <div className="flex flex-col w-full md:w-1/3 p-4 space-y-4">
            <div>
              <h2 className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300 my-2">
                Work with Us
              </h2>
              <ul className="space-y-2">
                <li className="hover:translate-x-2 duration-500">
                  <Link href="/donate" className="flex items-center">
                    <ChevronRight
                      width={20}
                      height={20}
                      className="text-maroon"
                    />
                    Donate
                  </Link>
                </li>
                <li className="hover:translate-x-2 duration-500">
                  <Link
                    href="/get-involved/volunteer"
                    className="flex items-center"
                  >
                    <ChevronRight
                      width={20}
                      height={20}
                      className="text-maroon"
                    />
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300 my-2">
                About Us
              </h2>
              <ul className="space-y-2">
                <li className="hover:translate-x-2 duration-500">
                  <Link href="/about#who-we-are" className="flex items-center">
                    <ChevronRight
                      width={20}
                      height={20}
                      className="text-maroon"
                    />
                    Who we Are
                  </Link>
                </li>
                <li className="hover:translate-x-2 duration-500">
                  <Link href="/about#what-we-do" className="flex items-center">
                    <ChevronRight
                      width={20}
                      height={20}
                      className="text-maroon"
                    />
                    What we Do
                  </Link>
                </li>
                <li className="hover:translate-x-2 duration-500">
                  <Link href="/about#how-we-work" className="flex items-center">
                    <ChevronRight
                      width={20}
                      height={20}
                      className="text-maroon"
                    />
                    How we Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Official Info and Social Media */}
          <div className="flex flex-col w-full md:w-1/3 p-4 space-y-4">
            <h2 className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-yellow-300">
              OFFICIAL INFO
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="text-yellow-300 p-2 w-4 h-4"
                  />
                  Nairobi
                </Link>
              </li>
              <li>
                <Link href="tel:+254111222333" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-yellow-300 p-2 w-4 h-4"
                  />
                  Call us: +254 111 222 333
                </Link>
              </li>
              <li>
                <Link href="mailto:ABC@gmail.com" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faInbox}
                    className="text-yellow-300 p-2 w-4 h-4"
                  />
                  Email us: ABC@gmail.com
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 text-white">
              <Link href="https://wa.me/+254111222333" aria-label="WhatsApp">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="bg-yellow-500 p-2 w-8 h-8 rounded-full"
                />
              </Link>
              <Link href="https://twitter.com/yourprofile" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="bg-yellow-500 p-2 w-8 h-8 rounded-full"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/yourprofile"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="bg-yellow-500 p-2 w-8 h-8 rounded-full"
                />
              </Link>
              <Link
                href="https://facebook.com/yourprofile"
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="bg-yellow-500 p-2 w-8 h-8 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};
