import React, { useState } from "react";
import Footer from "../Components/Footer/Index";
import HeroSection2 from "../Components/HeroSection 2/Index";
import HeroSection from "../Components/HeroSection/Index";
import { homeObjectOne, homeObjectTwo, homeObjectThree } from "../Components/InfoSection/Data";
import InfoSection from "../Components/InfoSection/Index";
import WorkSection from "../Components/WorkSection/Index";
import SkillsSection from "../Components/SkillsSection/Index";
import Navbar from "../Components/Navbar/Index";
import Services from "../Components/Services/Index";
import Sidebar from "../Components/Sidebar/Index";
import { workObjectOne, workObjectTwo, workObjectThree } from "../Components/WorkSection/Data";
import { skillObjectOne, skillObjectTwo } from "../Components/SkillsSection/Data";
import HeroSection3 from "../Components/HeroSection 3/Index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjectOne}/>
      <InfoSection {...homeObjectTwo}/>
      <InfoSection {...homeObjectThree}/>
      <HeroSection2 />
      <WorkSection {...workObjectOne}/>
      <WorkSection {...workObjectTwo}/>
      <WorkSection {...workObjectThree}/>
      <HeroSection3 />
      <SkillsSection {...skillObjectOne}/>
      <SkillsSection {...skillObjectTwo}/>
      <Services />
      <Footer />
    </>
  );
};

export default Home;