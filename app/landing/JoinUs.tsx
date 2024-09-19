import Link from "next/link";

import React from "react";

const JoinUs = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-200 to-yellow-400">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-max">
        <div className="bg-[url('/child-friends.jpg')] bg-center bg-cover h-96"></div>
        <div className="relative justify-center items-center p-4 m-4 md:p-8 md:m-8">
          <p className=" text-lg">
            We&apos;d like you to join our journey in making the lives of many
            orphaned children worthwhile
          </p>
          <Link
            href="/get-involved"
            className="bg-blue-400 hover:-translate-y-1 duration-300 px-2 py-2 hover:bg-blue-400 rounded-md"
          >
            Learn More
          </Link>
          <p className="my-4 p-2 m-2">
            &quot;Small deeds done are better than great deeds planned.&quot;{" "}
            <span className="font-semibold">Peter Marshall</span>{" "}
          </p>
        </div>
      </div>
      <div className="relative flex flex-row justify-end space-x-0 p-2 md:p-8">
        <div className="bg-black text-slate-100 text-center justify-center items-center p-4 h-max lg:h-56 w-64 ">
          <h1 className="font-bold text-xl my-4 md:text-xl md:my-8">
            LATEST NEWS
          </h1>
          <p className="text-start px-2 text-sm my-4">
            A sneak peek at what we have been up to
          </p>
          <Link
            href="/projects"
            className="bg-blue-400 text-black hover:-translate-y-2 duration-300 px-2 py-2 hover:opacity-85 rounded-md"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-[url('/child-sit.jpg')] bg-center bg-cover h-96 w-96"></div>
      </div>
    </div>
  );
};

export default JoinUs;
