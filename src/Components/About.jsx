import React from "react";
import { motion } from "framer-motion";
import myself from "../assets/myself.jpeg";

function About() {
  return (
    <div
      className="p-8 pb-4 text-white  border-b border-gray-300 overflow-x-hidden"
      id="about"
    >
      <h1 className="text-5xl text-center font-bold mb-5">
        About <span className="text-gray-400">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="border border-black rounded-3xl"
              src={myself}
              width={500}
              height={100}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-10"
        >
          <div className="flex justify-center lg:justify-start items-center">
            <p className="text-xl leading-relaxed">
              Hello! I am a passionate Full Stack Developer currently pursuing
              my studies at Dayananda Sagar College of Engineering, specializing
              in Information Science and Engineering. With a keen interest in
              both front-end and back-end development, I thrive on creating
              seamless, efficient, and user-friendly web applications. My
              journey in technology began with a curiosity for how things work,
              which quickly evolved into a full-fledged passion for coding and
              software development. My coursework and projects have provided me
              with a solid foundation in:
              <ul className="grid grid-cols-1 lg:grid-cols-2 list-none gap-5 mt-10">
                <li>
                  <span className="font-bold">Front-End Development: </span>
                  HTML, CSS, JavaScript, React
                </li>
                <li>
                  <span className="font-bold">Back-End Development: </span>
                  Node.js, Express, Python, Java
                </li>
                <li>
                  <span className="font-bold">Database Management: </span>
                   MongoDB
                </li>
                <li>
                  <span className="font-bold">Version Control: </span> Git,
                  GitHub
                </li>
              </ul>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
