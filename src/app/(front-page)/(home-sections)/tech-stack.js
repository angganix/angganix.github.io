import React from "react";
import { FaPhp, FaReact, FaVuejs } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const TechStack = () => {
  const techStacks = [
    {
      name: "React JS",
      icon: FaReact,
    },
    {
      name: "Vue JS",
      icon: FaVuejs,
    },
    {
      name: "PHP",
      icon: FaPhp,
    },
    {
      name: "Firebase",
      icon: RiFirebaseFill,
    },
    {
      name: "GraphQL",
      icon: GrGraphQl,
    },
    {
      name: "Mongo DB",
      icon: SiMongodb,
    },
  ];
  return (
    <section id="tech-stack" className="px-4 lg:px-0 overflow-hidden py-12">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="text-3xl font-medium text-center">Tech Stack</h1>
      </div>
    </section>
  );
};

export default TechStack;
