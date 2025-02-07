import React from "react";
import {
  FaDocker,
  FaGitAlt,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa6";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import {
  SiApachekafka,
  SiMongodb,
  SiMysql,
  SiNuxtdotjs,
  SiPostgresql,
  SiSocketdotio,
} from "react-icons/si";

const TechStack = () => {
  const techStacks = [
    {
      name: "React JS",
      icon: FaReact,
      color: "text-cyan-500",
    },
    {
      name: "NextJS",
      icon: RiNextjsFill,
    },
    {
      name: "Vue JS",
      icon: FaVuejs,
      color: "text-green-600",
    },
    {
      name: "Nuxt",
      icon: SiNuxtdotjs,
      color: "text-green-500",
    },
    {
      name: "PHP",
      icon: FaPhp,
      color: "text-violet-600",
    },
    {
      name: "Laravel",
      icon: FaLaravel,
      color: "text-red-500",
    },
    {
      name: "NodeJS",
      icon: FaNodeJs,
      color: "text-lime-600",
    },
    {
      name: "Firebase",
      icon: RiFirebaseFill,
      color: "text-amber-500",
    },
    {
      name: "GraphQL",
      icon: GrGraphQl,
      color: "text-pink-600",
    },
    {
      name: "Mongo DB",
      icon: SiMongodb,
      color: "text-green-600",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-blue-600",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-cyan-600",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-500",
    },
    {
      name: "Sass",
      icon: FaSass,
      color: "text-pink-500",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "text-blue-600",
    },
    {
      name: "Kafka",
      icon: SiApachekafka,
    },
    {
      name: "Socket.IO",
      icon: SiSocketdotio,
    },
    {
      name: "Python",
      icon: FaPython,
      color: "text-cyan-600",
    },
  ];
  return (
    <section
      id="tech-stack"
      className="px-4 lg:px-0 overflow-hidden py-16 bg-lime-50"
    >
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="text-3xl font-medium text-center mb-12 block relative">
          <span>Tech Stack</span>
          <span className="w-16 h-1.5 -bottom-4 absolute -translate-x-1/2 left-1/2 bg-lime-600 border block"></span>
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
          {techStacks.map((item, index) => {
            const Icon = item?.icon;
            return (
              <div
                className="flex flex-col gap-y-1 py-4 justify-center items-center cursor-pointer rounded-xl hover:bg-lime-100 transition-all duration-200 ease-in-out"
                key={index}
              >
                <Icon
                  size={36}
                  className={item?.color ? item?.color : "text-black"}
                />
                <span>{item?.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
