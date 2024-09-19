import React from "react";
import About from "./About";
import Donate from "./Donate";
import Facts from "./Facts";

import JoinUs from "./JoinUs";
import Subscribe from "./Subscribe";
import LandingLayout from "./layout";

const Landing = () => {
  return (
    <LandingLayout>
      <main className="">
        {/* DONATE SECTION */}
        <Donate />
        {/* ABOUT US SECTION */}
        <About />
        {/* COUNTER SECTION */}
        <Facts />
        {/* JOIN US SECTION */}
        <JoinUs />
        {/* NEWSLETTER SECTION */}
        <Subscribe />
      </main>
    </LandingLayout>
  );
};

export default Landing;
