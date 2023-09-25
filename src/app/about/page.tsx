"use client";
import About from "./about";
import Intro from "./intro";
import Identity from "./identity";
import Tools from "./tools";
import { ImageModal } from "ui";

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
