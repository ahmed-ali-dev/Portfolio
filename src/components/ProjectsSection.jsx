import React from "react";
import ProjectsItems from "../assets/ProjectsItems";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <div className="py-5" id="projects">
      <div className="container">
        <h2 className="mb-5">My Projects</h2>
        <div className="row g-4">
          {ProjectsItems.map((Project) => (
            <ProjectCard
              key={Project.id}
              ProjectImage={Project.projectImg}
              ProjectName={Project.projectTitle}
              ProjectDesc={Project.projectDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
