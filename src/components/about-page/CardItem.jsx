import React from "react";
import { ParagraphText } from "../Common";
import { headshots } from "../../index.js";

/**
 * CardItem component to display an individual card item.
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.img - The URL of the image to be displayed.
 * @param {string} props.title - The title of the card item.
 * @param {string} props.linkedin - The URL for the LinkedIn profile.
 * @returns {JSX.Element} - Returns the JSX for the CardItem component.
 */
const CardItem = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col h-fit w-fit m-6 mb-5 sm:mb-20">
      {/* Member's Headshot */}
      <img
        className="h-48 w-48 object-cover overflow-hidden"
        src={headshots[props.img]}
        style={{ minWidth: "12rem" }}
        alt=""
      />
      {/* Member's Name */}
      <ParagraphText className="!font-bold flex  justify-center">
        {props.title}
      </ParagraphText>

      {props.lastPosition !== "" && (
        <ParagraphText className="font-poppins text-blueprint-gray-dark flex  justify-center">
          {props.lastPosition}
        </ParagraphText>
      )}

      {/* Member's LinkedIn profile */}
      {/* Copied the same style from alumni cards in Aboutpage.jsx */}
      <ParagraphText className="!text-blueprint-blue underline flex ml-5 mb-3 mr-5 justify-center">
        {props.linkedin && (
          <a
            href={props.linkedin}
            target="_blank"
            className="flex items-center"
          >
            LinkedIn
            <img className="ml-[5%]" src="/svgs/share.svg" alt="" />
          </a>
        )}
      </ParagraphText>
    </div>
  );
};

export default CardItem;
