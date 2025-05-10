"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black text-white py-6 mt-16 border-t border-gray-700"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between gap-2 flex-wrap">
        {/* Left Text */}
        <div className="flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
          <span>Design and Developed with</span>
          <FaHeart className="text-red-500" />
          <span>by</span>
          <div className="text-sm md:text-base font-semibold whitespace-nowrap text-purple-300">
            Maqsood Dev
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-5 text-gray-400">
          <a
            href="https://github.com/Maqsood421"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/maqsood-ahmed1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/maqsoodnasirani421"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="https://www.instagram.com/maqsood.__.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
