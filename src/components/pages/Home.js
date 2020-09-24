import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
// import Cards from "../Cards";
import Footer from "../Footer";
import Icons from "../Icons";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      <Icons />
      <Footer />
    </>
  );
}

export default Home;
