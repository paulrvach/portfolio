"use client";
import About from "./about";
import Intro from "./intro";
import Identity from "./identity";
import Tools from "./tools";

const AboutPage = () => {
  return (
    <div className="mb-24">
      <Intro />
      <Identity />
      <Tools />
    </div>
  );
};

export default AboutPage;
