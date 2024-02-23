import React from "react";
import ProjectCard from "../components/projects-page/ProjectCard";
import {
  PageHeader,
  SectionHeader,
  ParagraphTitle,
  ParagraphText,
} from "../components/Common";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  // Assuming this is your projects object
  const projects = t("projects", { returnObjects: true });
  const backgroundStyle = {
    // outline: "1px solid black",
    position: "absolute",
    overflowX: "hidden",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("grid.png")',
    filter: "brightness(200%)",
    backgroundSize: "2rem",
    backgroundRepeat: "repeat", // Corrected
    maskImage:
      "radial-gradient(ellipse at right 20% top 40vh, black 1%, transparent 45%)",
  };

  return (
    <div className="overflow-x-hidden">
      <div style={backgroundStyle}></div>
      <div className="flex flex-col px-20 md:px-[15%] pt-10 gap-4">
        <PageHeader className="my-5">Our Projects</PageHeader>
        <SectionHeader>Ongoing</SectionHeader>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {Object.keys(projects)
            .filter(
              (key) =>
                key !== "name" &&
                key !== "anchors" &&
                key !== "title" &&
                key !== "ongoing" &&
                key !== "moreComingSoon"
            )
            .map((projectKey, index) => (
              <ProjectCard
                key={index}
                project={projectKey}
                className="your-class-name"
              />
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
