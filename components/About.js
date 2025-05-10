"use client";

import Image from "next/image";
import myProfile from "../assets/my_img.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-indigo-400 relative after:absolute after:w-1/2 after:h-1 after:bg-indigo-600 after:left-1/4 after:-bottom-4"
        >
          About Me
        </motion.h2>

        {/* Content Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-800 hover:border-indigo-500/50 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hello, I&apos;m{" "}
                <span className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                  Maqsood Dev
                </span>
              </h3>

              <div className="space-y-4 text-gray-300 text-lg">
                <motion.p variants={itemVariants}>
                  I&apos;m currently in my 3rd year pursuing a Bachelor&apos;s
                  degree in Computer Science at{" "}
                  <span className="text-indigo-400 text-bold">
                    Iqra University Islamabad
                  </span>{" "}
                  with a CGPA of 3.70/4.0.
                </motion.p>
                <motion.p variants={itemVariants}>
                  As a passionate full-stack developer, I&apos;ve honed my
                  problem-solving skills by solving over 250+ LeetCode problems.
                </motion.p>
                <motion.p variants={itemVariants}>
                  My expertise spans across both frontend and backend
                  technologies, enabling me to build complete, robust web
                  applications.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I&apos;m constantly exploring new technologies and frameworks
                  to enhance my skills and create efficient, scalable solutions
                  for real-world problems.
                </motion.p>
              </div>
            </motion.div>

            {/* Image Container */}
            <motion.div
              variants={itemVariants}
              className="md:w-1/2 flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative w-100 h-100 md:w-96 md:h-96 rounded-3xl cursor-pointer overflow-hidden border-4 border-indigo-500/50 shadow-lg hover:border-indigo-400 transition-all duration-300 group">
                <Image
                  src={myProfile}
                  alt="Maqsood Ahmed"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectPosition: "top center" }}
                />
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Resume Button */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center pb-8"
          >
            <Link
              href="/documents/My_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2"
            >
              <span>View Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
