import Link from "next/link";
import React from "react";

const GetInvolved = () => {
  return (
    <main className="w-full h-full">
      {/* Involvement Section */}
      <div className="relative p-4 m-4">
        <h1 className="m-4 text-justify">
          We deeply value and appreciate every piece of effort we receive. Your
          thoughts and contributions are not taken for granted; they play a
          crucial role in guiding and enhancing our efforts. Thank you for being
          an integral part of our mission.
        </h1>
        <p className="m-4 text-justify">
          If you&apos;d like to have a chat about how you could get involved
          then please email us at
          <Link
            href=""
            target="blank"
            className="font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
          >
            {" "}
            @gmail.com
          </Link>{" "}
          – we&apos;d love to hear from you!
        </p>
        <div className="flex flex-row  flex-wrap gap-5 my-10">
          <div className="0 flex flex-col 300 w-96">
            <div className="bg-[url('/donation.jpg')] bg-cover h-48 shadow-xl"></div>
            <div className="p-2 m-2">
              <h1 className="font-bold text-xl my-2 ">Make A donation</h1>
              <p className="">
                A one-time or monthly donation will help young people in Kenya
                create a financially stable and secure future, free from the
                hardships of poverty.
              </p>
              <Link
                href=""
                className="my-2 font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
              >
                Donate &rarr;
              </Link>
            </div>
          </div>
          <div className=" flex flex-col 300 w-96">
            <div className="bg-[url('/volunteer.jpg')] bg-cover h-48 shadow-xl"></div>
            <div className="p-2 m-2">
              <h1 className="font-bold text-xl my-2">Volunteer with Us</h1>
              <p>
                Skilled, experienced, or have some spare time? Volunteers are
                essential to our team and play a crucial role in keeping our
                efforts moving forward!
              </p>
              <Link
                href="/pages/get-involved/volunteer"
                className="my-2 font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
              >
                Volunteer &rarr;
              </Link>
            </div>
          </div>
          <div className=" flex flex-col 300 w-96">
            <div className="bg-[url('/child-class.jpg')] bg-cover h-48 shadow-xl"></div>
            <div className="p-2 m-2">
              <h1 className="font-bold text-xl my-2">Events</h1>
              <p>
                Join us in children&apos;s home drives, sign up for a marathon
                or host a music competition - there&apos;s lots of different
                events you can get involved to raise money and have fun!
              </p>
              <Link
                href="/pages/get-involved/events"
                className="my-2 font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
              >
                Events &rarr;
              </Link>
            </div>
          </div>
          <div className=" flex flex-col 300 w-96">
            <div className="bg-[url('/child-bro.jpg')] bg-cover h-48 shadow-xl"></div>
            <div className="p-2 m-2">
              <h1 className="font-bold text-xl my-2">Partnerships</h1>
              <p>
                We are looking for companies, schools, colleges or universities
                with similar values to us looking to build meaningful
                partnerships together.
              </p>
              <Link
                href="/pages/get-involved/partnerships"
                className="my-2 font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4"
              >
                Partnerships &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetInvolved;
