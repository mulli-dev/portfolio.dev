"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1UlYLw3ebZqhUvJmkY1Key7yEQWGnXgDc/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleClickGithub = () => {
    window.open(
      "https://github.com/mulli-dev",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#ffff00] mr-[10px] h-5 w-5" />

          <h1 className="Welcome-text text-[13px] text-[#ffff00] ">
            Welcome To Mulli&apos;s Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold  text-[#ffff00] max-w--[600px] w-auto h-auto"
        >
          <span>
            I&apos;m Jacob Mulli
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Providing the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          As a Full Stack Software Engineer, I bring a wealth of experience in
          web, mobile, and software development. Explore my diverse projects and
          skills to see my work in action. Additionally, I am a skilled
          cybersecurity analyst with expertise in data visualization through
          Power BI.
        </motion.p>
        <div className="flex space-x-4">
          <motion.button
            onClick={handleClick}
            variants={slideInFromLeft(1)}
            className=" relative flex items-center justify-center py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg min-w-[150px] border-2 border-transparent "
            whileHover={{ color: "#39ff14", transition: { duration: 0.3 } }}
            style={{
              transition: "border-color 0.3s ease-in-out", // Smooth transition for the border color change
            }}
          >
            Download CV
            <span className="absolute inset-0 border-2 border-yellow-500 rounded-lg animate-border"></span>
          </motion.button>
          <motion.button
            onClick={handleClickGithub}
            variants={slideInFromLeft(1.2)}
            initial="hidden"
            animate="visible"
            className=" relative flex items-center justify-center py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg min-w-[150px] border-2 border-transparent"
            whileHover={{
              color: "#39ff14",
              transition: { duration: 0.3 },
            }}
            style={{
              transition: "border-color 0.3s ease-in-out",
            }}
          >
            Github Profile
            <span className="absolute inset-0 border-2 border-yellow-500 rounded-lg animate-border"></span>
          </motion.button>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
