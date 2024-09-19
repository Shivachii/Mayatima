"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NavLinks() {
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define the main navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who we Are" },
    { href: "/projects", label: "Projects" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
  ];

  // Define dropdown links for "Who we Help"
  const whoWeAre = [
    { href: "/about", label: "About us" },
    { href: "/about/mission-vision", label: "Mission and Vision" },
  ];

  // Define dropdown links for "Other Services"
  const getInvolved = [
    { href: "/get-involved", label: "Find out how to" },
    {
      href: "/donate",
      label: "Donate",
    },
    { href: "/get-involved/volunteer", label: "Volunteer" },
    { href: "/get-involved/events", label: "Events" },
  ];

  // Helper function to check if link is active
  const isActiveLink = (href: string) => pathName === href;

  if (!isMounted) {
    return null; // Prevent rendering until after client-side hydration
  }

  return (
    <div className="flex items-center gap-4 transition-all ">
      {/* Map over navLinks for the main navigation */}
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative group px-2 py-3 transition-all"
        >
          <p
            className={`flex cursor-pointer items-center gap-2 group-hover:text-blue-400 ${
              isActiveLink(link.href)
                ? "text-blue-400 font-bold underline underline-offset-8 decoration-2 decoration-gold"
                : "text-black"
            }`}
          >
            <span>{link.label}</span>
            {/* Display ChevronDown only for dropdown items */}
            {link.label === "Who we Help" || link.label === "Other Services" ? (
              <ChevronDown
                width={15}
                height={15}
                className="rotate-180 transition-all group-hover:rotate-0 duration-300"
              />
            ) : null}
          </p>

          {/* Dropdown for "Who we Are" */}
          {link.label === "Who we Are" && (
            <div className="absolute hidden gap-1 w-auto flex-col rounded-lg py-3  transition-all group-hover:flex bg-white right-0 top-10 text-black z-50">
              {whoWeAre.map((subLink) => (
                <Link
                  key={subLink.href}
                  href={subLink.href}
                  className={`flex cursor-pointer items-center py-1 pl-6 pr-8 ${
                    isActiveLink(subLink.href)
                      ? "text-blue-400 font-bold underline underline-offset-8 decoration-2 decoration-blue-400  "
                      : "text-neutral-400"
                  } hover:text-black`}
                >
                  <span className="whitespace-nowrap pl-3">
                    {subLink.label}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Dropdown for "Get Involved" */}
          {link.label === "Get Involved" && (
            <div className="absolute hidden gap-1 w-auto flex-col rounded-lg py-3 shadow-md transition-all group-hover:flex bg-white right-0 top-10 text-black z-50">
              {getInvolved.map((subLink) => (
                <Link
                  key={subLink.href}
                  href={subLink.href}
                  className={`flex cursor-pointer items-center py-1 pl-6 pr-8 ${
                    isActiveLink(subLink.href)
                      ? "text-blue-400 font-bold underline underline-offset-8 decoration-2 decoration-blue-400"
                      : "text-neutral-400"
                  } hover:text-black`}
                >
                  <span className="whitespace-nowrap pl-3">
                    {subLink.label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
