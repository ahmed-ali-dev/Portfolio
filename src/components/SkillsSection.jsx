import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb"; // من Tabler Icons

const skills = [
  { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss3 size={32} color="#1572B6" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={32} color="#7952B3" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
  { name: "Sass", icon: <SiSass size={32} color="#CC6699" /> },
  { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
  // { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
  { name: "React-js", icon: <SiReact size={32} color="#61DAFB" /> },
  // { name: "Next-Js", icon: <TbBrandNextjs size={32} color="#ffffff" /> },
  // { name: "Redux", icon: <SiRedux size={32} color="#764ABC" /> },
  // { name: "Three-js", icon: <TbBrandThreejs size={32} color="#ffffff" /> },
  { name: "Git", icon: <FaGitAlt size={32} color="#F05032" /> },
  { name: "Github", icon: <DiGithubBadge size={32} color="#ffffff" /> },
];

function SkillsSection() {
  return (
    <div className="bg-dark text-light py-5" id="skills">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="d-flex flex-column align-items-center border border-secondary rounded py-3 h-100 bg-secondary bg-opacity-10">
                {skill.icon}
                <span className="mt-2 fw-semibold text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
