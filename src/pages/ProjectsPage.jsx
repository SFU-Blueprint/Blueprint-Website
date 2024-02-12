import React from "react";
import ProjectCard from "../components/projects-page/ProjectCard";
import {PageHeader, SectionHeader, ParagraphTitle, ParagraphText} from "../components/Common";
import {useTranslation} from "react-i18next";

const ProjectsPage = () => {
  const {t, i18n} = useTranslation()
  // Assuming this is your projects object
  const projects = ["smartAssistant", "aiForHealth", "dataTracking"];//TODO Put key in a separate file
  const backgroundStyle = {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("grid.png")',
    filter: "brightness(95%)",
    backgroundSize: "3vmin",
    backgroundRepeat: "repeat repeat",
    maskImage:
      "radial-gradient(ellipse at right 30% top 50%, black 1%, transparent 50%)",
  };
  return (
    <div>
      <div style={backgroundStyle}></div>
      <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
        <PageHeader className="my-5">Our Projects</PageHeader>
        <SectionHeader>Ongoing</SectionHeader>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {Object.keys(projects).map((projectKey, index) => (
            <div key={index} className="">
              <ProjectCard project={projects[projectKey]} className="your-class-name" />
            </div>
        ))}
        </div>
        <ParagraphText className="my-[10%] md:my-[8%] text-center !text-xl">
          More coming soon!
        </ParagraphText>
      </div>
    </div>
  );
};




export default ProjectsPage;
