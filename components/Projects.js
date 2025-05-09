"use client";

import React, { useState, useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate
} from "framer-motion";
import Image from "next/image";
import project1 from "../assets/proj6.png";
import project2 from "../assets/proj7.png";
import project3 from "../assets/proj8.png";

const projects = [
  {
    id: 1,
    year: 2025,
    title: "IMS-Connect",
    image: project1,
    description:
      "Built a feature-rich innovation management system using the MVC architecture, improving code maintainability and handling a 35% traffic increase. Integrated real-time collaboration via WebSockets, added offline access, and implemented multilingual UI, improving user engagement by 40%."
  },
  {
    id: 2,
    year: 2024,
    title: "MHz Socio",
    image: project2,
    description:
      "Developed a social platform enabling real-time user interaction and post sharing, with 50% faster authentication response time using token-based security. Implemented end-to-end encryption for user messages, enhancing data security and trust."
  },
  {
    id: 3,
    year: 2024,
    title: "Social App Simulator",
    image: project3,
    description:
      "Simulated user behavior and engagement metrics in a virtual social media model using OOP and modular design. Achieved 60% accuracy in predicting community growth patterns by modeling complex interactions."
  }
];

const COLORS_TOP = ["#CE84CF", "#1E67C6", "#DD335C", "#13FFAA"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage
      }}
      id="projects"
      className="px-4 py-16 sm:px-8 sm:py-20 lg:px-32 lg:py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            My <span className="text-purple-400">Projects</span>
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-bold group-hover:text-purple-400 transition-colors ${
                  selectedProject.id === project.id ? "text-purple-400" : ""
                } duration-300`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-auto rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};

export default Projects;
