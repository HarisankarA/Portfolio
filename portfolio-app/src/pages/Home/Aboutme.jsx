import React from "react";
import Sectiontitle from "../../components/Sectiontitle";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Aboutme = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Express JS",
    "Mongo DB",
  ];

  return (
    <div>
      <Sectiontitle title="About Me" />

      <div className="flex w-full items-center sm:flex-col ">
        <div className="h-[50vh] flex-left w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/ccbf027c-74d3-46d9-9ee6-10ef254c8d85/GoegTqVdon.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>

        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            My name is Harisankar, and I'm a passionate and dedicated
            entry-level MERN stack developer with a strong foundation in
            JavaScript, React, Node.js, and MongoDB. I'm eager to apply my
            technical skills and problem-solving abilities to build innovative
            web applications. My enthusiasm for learning and staying up-to-date
            with the latest technologies drives me to continuously improve my
            skills. I'm confident in my ability to contribute meaningfully to a
            team and deliver high-quality projects.
          </p>
          <p className="text-white">
            I've recently completed a Mern stack Certification and am actively
            seeking opportunities to gain hands-on experience and grow my skills
            as a MERN stack developer. I'm excited to collaborate with talented
            individuals and contribute to the development of cutting-edge web
            applications.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skills, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skills}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
