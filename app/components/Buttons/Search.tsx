"use client";
import React, { useState } from "react";
import Modal from "../Modal/SearchModal";
import { Search } from "lucide-react";
import Button from "./Btn";

export default function SearchBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center ">
      <button
        onClick={() => setIsModalOpen(true)}
        className="  px-4 py-2 rounded"
      >
        <Search />
      </button>

      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-4 p-2 m-2 text-black">
          <h1 className="font-bold text-xl">Search Here</h1>
          <form action="">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter to Search"
              className="w-full h-[50px] p-2 flex items-center justify-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-900 placeholder:text-neutral-400"
            />

            <div className="flex  flex-row justify-between mt-8">
              <Button className="w-[100px] text-white px-4 py-2 rounded">
                Search
              </Button>
              <Button
                onClick={() => setIsModalOpen(false)}
                className=" bg-maroon w-[100px] text-white px-4 py-2 rounded"
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
