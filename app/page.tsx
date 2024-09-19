import About from "./components/landing/About";
import Facts from "./components/landing/Facts";
import Subscribe from "./components/landing/Subscribe";
import Hero from "./components/landing/Hero/Hero";
import Donate from "./components/landing/Donate";
import JoinUs from "./components/landing/JoinUs";

export default function Home() {
  return (
    <main className="relative w-full h-full mx-auto">
      {/* HERO SECTION */}
      <Hero />
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
  );
}
