"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4 overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 "
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-400">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel: +99999999999"
                className="text-2xl font-bold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +92 325 2770 421
                <span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto: maqsoodnasirani421@gmail.com"
                className="text-2xl lg:text-3xl font-bold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                dev.maqsood.1@gmail.com
                <span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Address</p>
              <address className="text-xl not-italic leading-relaxed">
                I 11/2, street 1 <br />
                Islamabad <br />
                Pakistan
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6643.156815181164!2d73.00964354662655!3d33.642171775180366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95c7c708bc6d%3A0x60382849e94ff7b6!2sI-11%2F2%20I%2011%2F2%20I-11%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746805053598!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
