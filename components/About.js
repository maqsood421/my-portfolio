"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Left Column - Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I am Maqsood Ahmed, a 3rd-year Bachelor of Computer Science student at
          Iqra University, currently maintaining a CGPA of 3.70/4.0. I am
          passionate about frontend development, full-stack projects, and
          constantly exploring new technologies to build real-world solutions.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/assets/my_img.jpeg" 
            alt="Maqsood Ahmed"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
