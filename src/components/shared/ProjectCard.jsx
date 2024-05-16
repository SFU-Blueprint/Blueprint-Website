import React from 'react';
import { ParagraphTitle, ParagraphText } from "../Common";
import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectCard = ({ project, className, onClick }) => {
  if (!project || !project.tags) {
    return null; 
  }

  return (
    <div
      className={`${className} shadow-lg w-70 min-w-[240px] bg-white rounded-[6px] hover:shadow-sm hover:scale-105 hover-drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1))`}
      onClick={onClick}
      style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))',
      }}
    >
      <img
        src={project.image}
        className="w-full object-contain h-auto rounded-[6px]"
        alt={project.name}
      />
      <div className="px-[5%] pb-3 mb-1 ml-[6px] ">
        <div className="flex flex-row flex-wrap mt-5 lg:mt-0  place-items-center -translate-y-1/2 ">
          {project.tags.map((tag, index) => ( // Map directly over the tags array in the project object
            <div key={index} className="flex bg-blue-500 text-white mr-[2%] px-[3%] h-[20px] 2xl:my-[0px] md:px-[6%] md:h-[25px] rounded-md shadow-md !md:text-sm whitespace-normal">
              <ParagraphText className="text-white whitespace-nowrap self-center">
                {tag}
              </ParagraphText>
            </div>
          ))}
        </div>
        <div className="flex flex-nowrap">
          <ParagraphTitle className={`text-[1.25rem] !text-black shrink`}>
            {project.name}{" "}
          </ParagraphTitle>
          <ParagraphTitle className="!text-black ml-1">→</ParagraphTitle>
        </div>

        <ParagraphText className="md:text-sm ">
          {project.description}
        </ParagraphText>
      </div>
    </div>
  );
};

export default ProjectCard;
