import React from "react";
import AboutImg from "../assets/images/About.jpg";
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img
              className="img-fluid w-75 shadow"
              src={AboutImg}
              alt="about img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">About me</h2>
            <p className="text-start">
              I'm Ahmed Ali Eldesoky, a Front-End Developer skilled in HTML,
              CSS, JavaScript, Sass, and React.
            </p>
            <p className="text-start mb-5 ">
              I build clean, responsive, and modern web interfaces with a focus
              on performance and user experience.
            </p>
            <ViewMyWorkBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
