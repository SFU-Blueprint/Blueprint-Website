import React from "react";
import { ParagraphText } from "../Common";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
/**
 * CardItem component to display an individual card item.
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.img - The URL of the image to be displayed.
 * @param {string} props.title - The title of the card item.
 * @param {string} props.linkedin - The URL for the LinkedIn profile.
 * @returns {JSX.Element} - Returns the JSX for the CardItem component.
 */
const CardItem = (props) => {
    return (
        <div className="flex flex-col h-fit w-fit m-6 mb-5 sm:mb-20">
            <img
                className="h-48 w-48"
                src={props.img}
                style={{'minWidth':'12rem'}}
                alt=""
            />
       
            

      <ParagraphText className="!font-bold flex items-center justify-center">
        {props.title}
      </ParagraphText>

      <a href={props.linkedin}>
        <ParagraphText className="!text-blueprint-blue underline flex flex-row ml-5 mb-3 mr-5">
            <a>LinkedIn </a>
                <img className="ml-[5%]" src="/svgs/share.svg" alt="" />
            </ParagraphText>
      </a>
    </div>
  );
};

export default CardItem;
