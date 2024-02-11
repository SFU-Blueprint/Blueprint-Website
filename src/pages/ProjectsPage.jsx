import React from "react";
import ProjectCard from "../components/projects-page/ProjectCard";
import {ParagraphText, ParagraphTitle, PageHeader} from "../components/Common";
import {PROJECT_KEYS} from "../constants/projects";
import {useTranslation} from "react-i18next";

const ProjectsPage = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
      <PageHeader className="my-5">{t('projects.title')}</PageHeader>
      <ParagraphTitle>{t('projects.ongoing')}</ParagraphTitle>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {PROJECT_KEYS.map(
          (project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>
          )
        )}
      </div>
      <ParagraphText className="my-[10%] md:my-[8%] text-center !text-xl">{t('projects.moreComingSoon')}</ParagraphText>
    </div>
  );
};

export default ProjectsPage;
