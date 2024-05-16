import React, { useState } from "react";
import ProjectCard from "../components/shared/ProjectCard";
import { PageHeader, SectionHeader, ParagraphText } from "../components/Common";
import { useTranslation } from "react-i18next";
import ProjectModal from "../components/shared/ProjectModal";
import { Projects } from "../constants/projects";

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  // Other state and variables
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [projects, setProjects] = useState(Projects);

  const handleProjectClick = (projectKey) => {
    const projectDetails = projects.find((project) => project.name === projectKey);
    setSelectedProject(projectDetails);
    setShowPopup(true);
  };

  const backgroundStyle = {
    position: "absolute",
    overflowX: "hidden",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("grid.png")',
    filter: "brightness(200%)",
    backgroundSize: "3.5vmin",
    backgroundRepeat: "repeat",
    maskImage: "radial-gradient(ellipse at right 20% top 40vh, black 1%, transparent 60%)",
  };

  return (
    <div className="overflow-x-hidden">
      <div style={backgroundStyle}></div>
      <div>
        <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
          <SectionHeader className="md:self-center mb-5">Our Projects</SectionHeader>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="your-class-name m-3"
                onClick={() => handleProjectClick(project.name)}
              />
            ))}
            <ProjectModal
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
              project={selectedProject || {}}
            />
          </div>
        </div>
      </div>
      <ParagraphText className="my-[10%] md:my-[8%] text-center !text-xl">
        More coming soon!
      </ParagraphText>
    </div>
  );
};

export default ProjectsPage;
