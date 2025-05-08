"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import java from "../assets/java.png";
import python from "../assets/python.png";
import git from "../assets/git.png";
import docker from "../assets/docker.png";
import github from "../assets/github.png";

const images = [
  { src: java, alt: "java" },
  { src: python, alt: "python" },
  { src: git, alt: "git" },
  { src: docker, alt: "docker" },
  { src: github, alt: "github" },
  { src: java, alt: "java" },
  { src: python, alt: "python" },
  { src: git, alt: "git" },
  { src: docker, alt: "docker" },
  { src: github, alt: "github" },
  { src: java, alt: "java" },
  { src: python, alt: "python" },
  { src: git, alt: "git" },
  { src: docker, alt: "docker" },
  { src: github, alt: "github" },
  { src: java, alt: "java" },
  { src: python, alt: "python" },
  { src: git, alt: "git" },
  { src: docker, alt: "docker" },
  { src: github, alt: "github" },
  { src: java, alt: "java" },
  { src: python, alt: "python" },
  { src: git, alt: "git" },
  { src: docker, alt: "docker" },
  { src: github, alt: "github" },
  { src: java, alt: "java" },
  { src: python, alt: "python" },
  { src: git, alt: "git" },
  { src: docker, alt: "docker" },
  { src: github, alt: "github" },
];

const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image: linear-gradient(to_right, _transparent, _black_25%, _black_75%, _transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%"
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {images.map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} height={40} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
