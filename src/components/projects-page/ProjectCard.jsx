import React from "react";
import {Body, BodyHeader} from "../Common";

/**
 * ProjectCard component to display a card representing a project.
 * @param {Object} project - Object containing project details.
 * @param {string} project.name - The name of the project.
 * @param {Array<string>} project.tags - Array of tags associated with the project.
 * @param {string} project.description - Description of the project.
 * @param {string} project.image - URL of the image to be displayed with the project.
 * @param {string} className - Additional CSS class name(s) for styling purposes.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectCard = ({project, className}) => {
    const { name, tags, description, image } = project;
    return (
        <div className={`${className} shadow-md w-70 min-h-full`}>
            <img src={image} className="w-full" alt={name} />
            <div className="px-[5%] pb-3">
                <div className="flex flex-row place-items-center -translate-y-1/2">
                    {tags.map((tag, index) => (
                        <Body
                            key={index}
                            className="bg-blue-500 text-white mr-[2%] px-[6%] rounded-md shadow-md md:text-sm"
                        >
                            {tag}
                        </Body>
                    ))}
                </div>
                <BodyHeader className="text-[1.25rem]" >{name} → </BodyHeader>
                <Body className="md:text-sm">{description}</Body>
            </div>
        </div>
    );
}

export default ProjectCard;