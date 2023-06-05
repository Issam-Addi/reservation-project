import React from "react";
import HeroSection from "../components/home/HeroSection";
import SearchBar from "../components/home/SearchBar";
import FeaturesSection from "../components/home/FeaturesSection";
import Recommended from "../components/home/Recommended";
import OffersSection from "../components/home/OffersSection";
import DropdownNav from "../components/home/DropdownNav";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <HeroSection />
      </div>
      <SearchBar />
      <FeaturesSection />
      <Recommended />
      <OffersSection />
    </>
  );
};

export default Home;
