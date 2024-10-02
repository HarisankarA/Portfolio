import React from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="h-[70vh] bg-primary flex flex-col items-start justify-center gap-7">
      <h1 className="text-white font-semibold">Hi, I am</h1>
      <h1 className="text-5xl sm:text-2xl text-secondary font-semibold">
        Harisankar Arumugam
      </h1>

      <h1 className="text-2xl sm:text-1xl text-white font-semibold">
        <TypeAnimation
          sequence={[
            "Mern Stack Developer",
            1000,
            "Full Stack Developer",
            1000,
            "Enthusiastic Developer",
            1000,
            "Cross Platform Developer",
            1000,
            "I Prefer Coding More Than Coffee",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h1>

      <p className="text-white w-2/3">
        As a dedicated and eager entry-level MERN stack developer, I am seeking
        a position to leverage my strong JavaScript skills and contribute to
        innovative projects.
      </p>

      <button className="border-2 border-tertiary text-tertiary px-8 py-3">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
