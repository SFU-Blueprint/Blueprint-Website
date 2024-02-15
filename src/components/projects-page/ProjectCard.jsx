import React from "react";
import { ParagraphTitle, ParagraphText } from "../Common";
import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectCard = ({ project, className }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${className} shadow-md w-70 min-h-full min-w-[240px] bg-white`}
    >
      <img
        src={t(`projects.${project}.image`)}
        className="w-full"
        alt={t(`projects.${project}.name`)}
      />

      <div className="px-[5%] pb-3 ">
        <div className="flex flex-row place-items-center -translate-y-1/2">
          {t(`projects.${project}.tags`).map((tag, index) => (
            <ParagraphText
              key={index}
              className="white-space-nowrap bg-blue-500 text-white mr-[2%] px-[6%] rounded-md shadow-md !md:text-sm whitespace-normal"
            >
              {tag}
            </ParagraphText>
          ))}
        </div>
        <ParagraphTitle className="text-[1.25rem] ">
          {t(`projects.${project}.name`)} →{" "}
        </ParagraphTitle>
        <ParagraphText className="md:text-sm ">
          {t(`projects.${project}.description`)}
        </ParagraphText>
      </div>
    </div>
  );
};

export default ProjectCard;
