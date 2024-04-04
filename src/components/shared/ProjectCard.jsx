import React from "react";
import { ParagraphTitle, ParagraphText } from "../Common";
import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectCard = ({ project, className, onClick }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${className} shadow-lg w-70 min-w-[240px] bg-white rounded-[5px]`}
      onClick={onClick}
    >
      <img
        src={t(`projects.${project}.image`)}
        className="w-full object-contain h-auto"
        alt={t(`projects.${project}.name`)}
      />
      <div className="px-[5%] pb-3 mb-1 ml-[6px] ">
        <div className="flex flex-row place-items-center -translate-y-1/2 ">
          {t(`projects.${project}.tags`).map((tag, index) => (
            <div className=" bg-blue-500 text-white mr-[2%] px-[6%] h-[25px] rounded-md shadow-md !md:text-sm whitespace-normal">
              {" "}
              <ParagraphText
                key={index}
                className="text-white whitespace-nowrap"
              >
                {tag}
              </ParagraphText>
            </div>
          ))}
        </div>
        <div className="flex flex-nowrap">
          <ParagraphTitle className="text-[1.25rem] !text-black shrink">
            {t(`projects.${project}.name`)}{" "}
          </ParagraphTitle>
          <ParagraphTitle className="!text-black ml-1">→</ParagraphTitle>
        </div>

        <ParagraphText className="md:text-sm ">
          {t(`projects.${project}.description`)}
        </ParagraphText>
      </div>
    </div>
  );
};

export default ProjectCard;
