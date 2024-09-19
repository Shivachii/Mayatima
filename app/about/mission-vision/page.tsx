import {
  faBullseye,
  faHandsHoldingChild,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const MissionVision = () => {
  return (
    <main className="w-full h-full">
      {/* Vision */}
      <div className="relative flex flex-col h-72 md:h-max items-center bg-gradient-to-br from-yellow-300 to-cyan-300 ">
        <div className=" bg-blue-600 w-16 h-0.5 md:w-24 md:h-0.5 m-4 rounded-md"></div>
        <div className="text-center m-1 p-1 md:m-4 md:p-4">
          <h1 className="text-2xl md:text-3xl font-bold">Our Vision</h1>
          <p className="text-xl md:text-3xl text-wrap font-bold m-2 p-2 md:m-4 md:p-4">
            To be a{" "}
            <span className="text-blue-500">
              leading organization in empowering orphaned children and their
              families
            </span>
            , sustainably enhancing their well-being and resilience.
          </p>
        </div>
      </div>
      {/* Mission */}
      <div className="relative flex flex-col md:flex md:flex-row space-x-2 p-4">
        <div className=" p-2 m-2 md:w-1/2 ">
          <h1 className="text-2xl text-center md:text-start md:text-3xl font-bold text-wrap">
            Our Mission
          </h1>
          <div className="flex flex-col items-center leading-relaxed md:leading-normal md:items-start md:flex md:flex-row space-x-4 p-2 my-4 m-2  text-pretty ">
            <FontAwesomeIcon
              icon={faBullseye}
              className=" text-yellow-400 bg-slate-50 p-2 md:p-4 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
            />
            <p className="text-wrap">
              To empower orphaned children in Kenya by providing access to
              quality education, essential resources, and holistic support,
              enabling them to break the cycle of poverty and build a brighter
              future. Through collaborative efforts and community driven
              initiatives, we strive to foster resilience, well-being, and
              self-sufficiency for every child and their family.
            </p>
          </div>
          <h1 className="text-2xl text-center md:text-start md:text-3xl  font-bold text-wrap">
            Our Core Values
          </h1>
          <div className="flex flex-col items-center md:items-start md:flex md:flex-row space-x-4 p-2 my-4 m-2 text-pretty">
            <FontAwesomeIcon
              icon={faHandsHoldingChild}
              className=" text-yellow-400 bg-slate-50 p-2 md:p-4 w-[40px] h-[40px] md:w-[50px] md:h-[50px]  rounded-full"
            />
            <ul className=" list-inside p-2">
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Commitment</li>
              <li>Empowerment</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 p-2 m-2 bg-[url('/child-sit.jpg')] bg-cover h-80 bg-center rounded-md"></div>
      </div>
    </main>
  );
};

export default MissionVision;
