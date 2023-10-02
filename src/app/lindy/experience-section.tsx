import { useLayoutEffect, useRef, useState } from "react";
import Video from "./video";
import ExperienceSlide from "./experience-slide";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const experiences = [
  {
    heading: "Frontend Experinece",
    experience:
      "Wake up to an inbox with pre-drafted replies, personalized with your voice for each recipient. Simply review, edit if needed, and send — streamlining your email like never before.",
    video: "https://res.cloudinary.com/dpqdqryvo/video/upload/v1685814776/test-demo-kafka_szbixp.mov",
  },
  {
    heading: "Backend Experinece",
    experience:
      "Wake up to an inbox with pre-drafted replies, personalized with your voice for each recipient. Simply review, edit if needed, and send — streamlining your email like never before.",
    video: "https://res.cloudinary.com/dxmqknhgj/video/upload/v1696201056/backend_rqb9lz.mp4",
  },
  {
    heading: "DevOps Experinece",
    experience:
      "Wake up to an inbox with pre-drafted replies, personalized with your voice for each recipient. Simply review, edit if needed, and send — streamlining your email like never before.",
    video: "https://res.cloudinary.com/dxmqknhgj/video/upload/v1696200094/devops_ovdfby.mp4",
  },
];

const ExperienceSection = () => {
  const [currentVideo, setCurrentVideo] = useState(experiences[0].video);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const video = videoRef.current;

    if (container && video) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          pin: video,
        },
      });

      // Add your animations or timeline actions here
      // For example:

      // Don't forget to update the dependencies array if needed
    }
  }, []);

  return (
    <div className="w-full flex flex-row justify-center items-start">
      <div className="w-1/2 pnpm  z-20" ref={containerRef}>
        {experiences.map((experience) => (
          <ExperienceSlide
            video={experience.video}
            key={experience.heading}
            description={experience.experience}
            heading={experience.heading}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </div>
      <div className=" flex justify-center items-center h-screen w-1/2">
        <Video
          src={currentVideo}
          className="w-full h-2/3"
          ref={videoRef}
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
