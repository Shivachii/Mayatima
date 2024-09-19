import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full">
      <div className="p-4 m-8 mx-20 text-lg text-justify">
        <p className="my-2">
          At [Charity Organization Name], we believe that every child deserves a
          chance to thrive. By becoming a volunteer, you can play a pivotal role
          in transforming the lives of young people in Kenya. Your time, skills,
          and passion can help us provide education, support, and hope to
          children who need it most.
        </p>
        <p className="my-2">
          We&apos;re excited to welcome you to our team and work together
          towards a brighter future for children in Kenya!
        </p>
        <p className="my-2">
          If you have any questions or need more information, feel free to reach
          out to us at{" "}
          <Link
            href="/pages/get-involved/volunteer"
            className="my-2 font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
          >
            @gmail.com
          </Link>{" "}
          or call us at{" "}
          <Link
            href="/pages/get-involved/volunteer"
            className="my-2 font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
          >
            +254 111 222 333
          </Link>
          .
        </p>
      </div>
      <div className="relative flex p-4 m-8 mx-20 ">
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="absolute top-3 left-1/2  w-[30px] h-[30px] text-yellow-400 bg-gray-100 rounded-full p-2 "
        />
        <div className="flex flex-row space-x-8 justify-center shadow-2xl p-8 m-4">
          <div className="rounded-full bg-[url('/man-smile.jpg')] bg-cover bg-center w-28 h-28"></div>
          <div className="w-1/2 flex flex-col">
            <div className="mb-4">
              <p className="leading-relaxed">
                Volunteering with [Charity Organization Name] was a truly
                rewarding experience. The joy and gratitude from the kids and
                the community made every moment worthwhile. If you&apos;re
                looking for a way to make a real difference and connect with a
                passionate group of people, this is the place to be.
              </p>
            </div>
            <div>
              <p className="font-semibold">Mike M</p>
              <p className="text-gray-600">Former Volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
