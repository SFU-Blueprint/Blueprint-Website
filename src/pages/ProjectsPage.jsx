import React from "react";
import {PROJECTS} from "../constants/projects";
import ProjectCard from "../components/projects-page/ProjectCard";
import {Body, BodyHeader, PageHeader, SectionHeader} from "../components/Common";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
      <PageHeader className="my-5">Our Projects</PageHeader>
      <BodyHeader>Ongoing</BodyHeader>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {PROJECTS.map(
          (project, index) => (
            <ProjectCard project={project}></ProjectCard>
          )
        )}
      </div>
      <Body className="my-[10%] md:my-[8%] text-center !text-xl">More coming soon!</Body>
    </div>
  );
};

export default ProjectsPage;
