import Header from "@/app/components/get-involved/events/Header";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full">
      {/* Header Section */}
      <Header />
      {/* Events Section */}
      <div className="m-4 p-4">
        <h1 className="text-justify">
          We organize and participate in a variety of events throughout the year
          aimed at raising funds and bolstering cooperation to help us achieve
          our goals. Below is our calendar with details and sign-up links,{" "}
          <span className="font-bold">if applicable, </span>for such upcoming
          events.
        </h1>
        <div className="flex flex-col">
          <div className="p-2 m-2 text-justify ">
            <h1 className="font-bold text-lg my-2">
              Children&apos;s Home drive
            </h1>
            <ul className="text-gray-600">
              <li className="my-2">Venue: Thomas Bernados</li>
              <li className="my-2">
                Date & Time: August 20, 2024, 6:00 PM - 8:00 PM
              </li>
              <li className="my-2">
                Ticketing Information: Free entry, sign-up required via email at{" "}
                <span>
                  <Link
                    href=""
                    target="blank"
                    className="font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
                  >
                    events@charity.org
                  </Link>{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="p-2 m-2 bg-slate-100 text-justify">
            <h1 className="font-bold text-lg my-2">Fun Run for Education</h1>
            <ul className="text-gray-600">
              <li className="my-2">Venue: Karura Forest, Nairobi</li>
              <li className="my-2">
                Date & Time: October 5, 2024, 8:00 AM - 11:00 AM
              </li>
              <li className="my-2">
                Ticketing Information: Ksh 1,000 registration fee, sign-up
                through email at{" "}
                <span>
                  <Link
                    href=""
                    target="blank"
                    className="font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
                  >
                    events@charity.org
                  </Link>{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="p-2 m-2 text-justify">
            <h1 className="font-bold text-lg my-2">Family Picnic and Games</h1>
            <ul className="text-gray-600">
              <li className="my-2">Venue: Uhuru Park, Nairobi</li>
              <li className="my-2">
                Date & Time: November 10, 2024, 12:00 PM - 4:00 PM
              </li>
              <li className="my-2">
                Ticketing Information: Free entry, no sign-up needed
              </li>
            </ul>
          </div>
          <div className="p-2 m-2 bg-slate-100 text-justify">
            <h1 className="font-bold text-lg my-2">Music for Change Evening</h1>
            <ul className="text-gray-600">
              <li className="my-2">
                Venue: The Junction Mall Rooftop, Nairobi
              </li>
              <li className="my-2">
                Date & Time: September 15, 2024, 7:00 PM - 10:00 PM
              </li>
              <li className="my-2">
                Ticketing Information: Ksh 500 per ticket, purchase at the venue
                or via email request
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
