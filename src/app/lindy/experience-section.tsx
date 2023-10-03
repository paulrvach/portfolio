import { useLayoutEffect, useRef, useState } from "react";
import Video from "./video";
import ExperienceSlide from "./experience-slide";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Avatar, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Logo } from "../ui";
import { HomeIcon } from "@radix-ui/react-icons";

const experiences = [
  {
    heading: "Frontend Experinece",
    experiences: (
      <div className="flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4" key={"figma-to-product"}>
          <Text size={"8"}>From Figma to Product.</Text>
          <Link
            href="/projects/0a5d71f3-83bd-4011-b14c-adfcb0101db6#designing-the-user-flow-in-figma"
            className="flex gap-1"
          >
            <Avatar
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/kafka_x8ok4n.png"
              fallback="P"
              radius="none"
              size={"1"}
            />
            Building out Kafka Nimbus UI
          </Link>
        </div>
        <div className="flex flex-col w-full gap-4" key={"reusable-components"}>
          <Text size={"8"}>Building Really Reusable Components.</Text>
          <Link
            href="/projects/990ef71f-f207-4318-b267-cb5746571f37#operability-scalability-maintainability"
            className="flex gap-1"
          >
            <Avatar
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1692744161/ButtonIcon-gray_yae3pe.png"
              fallback="P"
              radius="none"
              size={"1"}
            />
            Operability, Scalability, Maintainability
          </Link>
        </div>
      </div>
    ),

    video:
      "https://res.cloudinary.com/dxmqknhgj/video/upload/v1696362019/Badge_paperplane-ui_-_Google_Chrome_2023-10-03_12-38-38_o9j9uf.mp4",
  },
  {
    heading: "Backend Experinece",
    experiences: (
      <div className="flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4" key={"figma-to-product"}>
          <Text size={"8"}>NextJs Server Components</Text>
          <Link
            href="/projects/0a5d71f3-83bd-4011-b14c-adfcb0101db6#leveraging-nextjs-app-router-framework-for-performance"
            className="flex gap-1"
          >
            <Avatar
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/kafka_x8ok4n.png"
              fallback="P"
              radius="none"
              size={"1"}
            />
            Optimizing Client-Server Relationship
          </Link>
        </div>
        <div className="flex flex-col w-full gap-4" key={"reusable-components"}>
          <Text size={"8"}>Node.js Asynchronous Backend</Text>
          <Link
            href="/projects/f9472791-b72a-4d2c-b853-05dcf3170df6#converting-a-python-automation-script-to-a-full-stack-application"
            className="flex gap-1"
          >
            <HomeIcon className="w-5 h-5" />
            Converting from Python Script to FullStack Application
          </Link>
        </div>
      </div>
    ),
    video:
      "https://res.cloudinary.com/dxmqknhgj/video/upload/v1696201056/backend_rqb9lz.mp4",
  },
  {
    heading: "DevOps Experinece",
    experiences: (
      <div className="flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4" key={"figma-to-product"}>
          <Text size={"8"}>Streamlined Multi-Container Deployment</Text>
          <Link
            href="/projects/0a5d71f3-83bd-4011-b14c-adfcb0101db6#streamlined-multi-container-application-deployment"
            className="flex gap-1"
          >
            <Avatar
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/kafka_x8ok4n.png"
              fallback="P"
              radius="none"
              size={"1"}
            />
            Containerizing Micro Services
          </Link>
        </div>
      </div>
    ),
    video:
      "https://res.cloudinary.com/dxmqknhgj/video/upload/v1696200094/devops_ovdfby.mp4",
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
            experiences={experience.experiences}
            heading={experience.heading}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </div>
      <div className=" flex justify-center items-center h-screen w-1/2">
        <Video src={currentVideo} className="w-full h-2/3" ref={videoRef} />
      </div>
    </div>
  );
};

export default ExperienceSection;
