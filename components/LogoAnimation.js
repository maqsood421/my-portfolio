"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import cLogo from "../assets/c.png";
import cppLogo from "../assets/cpp.png";
import javaLogo from "../assets/java.png";
import asmLogo from "../assets/assembly.png";
import pythonLogo from "../assets/python.png";

const images = [
  { src: cLogo, alt: "C" },
  { src: cppLogo, alt: "C++" },
  { src: javaLogo, alt: "Java" },
  { src: asmLogo, alt: "Assembly" },
  { src: pythonLogo, alt: "Python" },
  // Repeating to make animation longer
  { src: cLogo, alt: "C" },
  { src: cppLogo, alt: "C++" },
  { src: javaLogo, alt: "Java" },
  { src: asmLogo, alt: "Assembly" },
  { src: pythonLogo, alt: "Python" },
  // Repeating to make animation longer
  { src: cLogo, alt: "C" },
  { src: cppLogo, alt: "C++" },
  { src: javaLogo, alt: "Java" },
  { src: asmLogo, alt: "Assembly" },
  { src: pythonLogo, alt: "Python" },
  // Repeating to make animation longer
  { src: cLogo, alt: "C" },
  { src: cppLogo, alt: "C++" },
  { src: javaLogo, alt: "Java" },
  { src: asmLogo, alt: "Assembly" },
  { src: pythonLogo, alt: "Python" },
  // Repeating to make animation longer
  { src: cLogo, alt: "C" },
  { src: cppLogo, alt: "C++" },
  { src: javaLogo, alt: "Java" },
  { src: asmLogo, alt: "Assembly" },
  { src: pythonLogo, alt: "Python" }
];

const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
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
