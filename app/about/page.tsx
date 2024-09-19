import Header from "@/app/components/about/Header";
import React from "react";

const About = () => {
  return (
    <main className="w-full h-full">
      {/* Header section */}
      <Header />
      {/* Intro section */}
      <div
        id="who-we-are"
        className="relative flex flex-col m-2 p-2 md:m-8 md:p-8 items-center justify-center text-center"
      >
        <div className=" bg-blue-600 w-16 h-0.5 md:w-24 md:h-0.5 m-4 rounded-md "></div>
        <p className="p-2 m-2 text-justify font-sans leading-normal md:leading-6 text-lg md:text-xl">
          [Charity Name] is a Kenyan-based organization devoted to making a
          profound difference in the lives of orphans. We believe in the power
          of community and compassion to transform lives. By fostering a sense
          of belonging and hope, we aim to empower these children to rise above
          their circumstances and build a brighter future for themselves.
        </p>
      </div>
      {/* What we do section */}
      <div
        id="what-we-do"
        className="flex flex-col md:flex md:flex-row space-x-2 p-2 m-2 md:p-4 md:m-8"
      >
        <div className="font-medium items-center text-center text-yellow-400 text-3xl md:text-4xl lg:text-5xl w-full md:w-1/3 my-8">
          <h1 className="">What We Do</h1>
        </div>
        <div className="w-full md:w-2/3 text-pretty mx-4 leading-relaxed">
          <p>
            Simply put we believe every child deserves an equal shot at life no
            matter their circumstance given many lack this chance due to being
            orphaned, our commitment is to empower and uplift orphans through a
            comprehensive range of services designed to meet their needs and
            nurture their potential.
          </p>
          <ul className="list-inside list-disc p-2 m-2">
            Our key initiatives include:
            <li className="my-2">
              Nutritional Support: Ensuring that every child has access to
              nutritious meals that support their growth and development.
            </li>
            <li className="my-2">
              Life Skills Training: Equipping children with essential skills and
              knowledge to prepare them for independent living and future
              success.
            </li>
            <li className="my-2">
              Emotional and Psychological Support: Delivering counseling and
              mentoring to help children navigate their emotions and build
              self-esteem.
            </li>
            <li className="my-2">
              Providing Clothing: Ensuring every child has access to
              well-fitting clothing and shoes that foster comfort, dignity, and
              confidence as they go on with their day to day activities.
            </li>
          </ul>
          We have a long-term future initiative that will seek to empower the
          wider family unit and collaborate with our partners on infrastructure
          projects, such as garment workshops and spaces for small businesses.
          These efforts are designed to foster sustainable economic growth and
          self-sufficiency, transforming local communities and creating enduring
          opportunities for families to thrive.
          <p className="my-2">
            Our holistic approach aims to foster a sense of belonging and hope,
            empowering each child to overcome their challenges and achieve their
            dreams. Through collaboration with our dedicated team and
            supporters, we strive to create a positive and lasting impact on the
            lives of the children we serve.
          </p>
        </div>
      </div>
      {/* How we work section */}
      <div
        id="how-we-work"
        className="flex flex-col md:flex md:flex-row space-x-2 p-2 m-2 md:p-4 md:m-8"
      >
        <div className="font-medium items-center text-center text-yellow-400 text-3xl md:text-4xl lg:text-5xl w-full md:w-1/3 my-8">
          <h1>How we Work</h1>
        </div>
        <div className="w-full md:w-2/3 text-pretty mx-4 leading-relaxed">
          <p className="my-2 leading-7 md:leading-normal">
            Our approach is collaborative and community-focused. Aside from our
            own funding, we rely on the generosity of donors and the success of
            fundraisers to fuel our initiatives, ensuring we can provide
            essential support to the children we serve. Our work involves close
            collaboration with children&apos;s homes and other organizations
            dedicated to orphan care, allowing us to maximize our impact and
            resources.
          </p>
          <p className="my-2 leading-7 md:leading-normal">
            Our team meets regularly to discuss and delegate responsibilities,
            reaching consensus on where and when to hold fundraising drives
            based on our current vision and priorities. These strategic
            decisions are made to align with our overarching goals and respond
            to the evolving needs of the communities we support. Through this
            coordinated effort, we strive to effectively address immediate needs
            and foster long-term sustainable change.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
