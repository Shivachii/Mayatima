import React from "react";
import Form from "../components/Forms/Form";
import FloatingLabelInput from "../components/Forms/Floatinglabel";
import TextArea from "../components/Forms/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faLocation,
  faLocationArrow,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="">
      <div className="flex flex-wrap gap-3 items-center justify-center m-4 p-4">
        <div className="flex flex-col justify-center items-center gap-2 w-[300px] h-56 bg-slate-100 rounded-md group">
          <FontAwesomeIcon
            icon={faPhone}
            className="flex items-center justify-center p-2 group-hover:rotate-[360deg] w-10 h-10 bg-yellow-300 rounded-full duration-500 transition-all"
          />
          <p className="my-2 ">Call us </p>
          <p className=" font-bold">+254 11 222 333</p>
        </div>{" "}
        <div className="flex flex-col justify-center items-center gap-2 w-[300px] h-56 bg-slate-100   rounded-md  group">
          <FontAwesomeIcon
            icon={faLocationArrow}
            className="flex items-center justify-center p-2 group-hover:rotate-[360deg] w-10 h-10 bg-yellow-300 rounded-full duration-500 transition-all"
          />
          <p className="my-2 ">We are located at </p>
          <p className=" font-bold"> Nairobi</p>
        </div>{" "}
        <div className="flex flex-col  justify-center items-center gap-2 w-[300px]  h-56 bg-slate-100  rounded-md  group">
          <FontAwesomeIcon
            icon={faInbox}
            className="flex items-center justify-center p-2 group-hover:rotate-[360deg] w-10 h-10 bg-yellow-300 rounded-full duration-500 transition-all"
          />
          <p className="my-2 ">Email us </p>
          <p className=" font-bold">ABC@gmail.com</p>
        </div>
      </div>
      <form action="" className="flex flex-col gap-4 p-2 m-2 w-[500px] mx-auto">
        <h1 className="font-bold text-center text-xl my-4">WRITE TO US !</h1>
        <FloatingLabelInput
          type="text"
          id="name"
          name="name"
          label="Enter your Name"
        />
        <FloatingLabelInput
          type="email"
          id="email"
          name="email"
          label="Enter your email"
        />
        <TextArea id="message" name="message" label="Enter your message" />
      </form>
    </main>
  );
};

export default Contact;
