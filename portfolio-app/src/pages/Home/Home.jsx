import React from "react";
import Header from "../../components/Header.jsx";
import Intro from "./Intro.jsx";
import Aboutme from "./Aboutme.jsx";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-primary px-40 sm:px-5 ">
        <Intro></Intro>
        <Aboutme></Aboutme>
      </div>
    </div>
  );
};

export default Home;
