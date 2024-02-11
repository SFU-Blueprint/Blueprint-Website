import React from "react";
import { ParagraphText } from "../Common";

const CardItem = (props) => {
  return (
    <div className="flex flex-col h-fit w-fit m-6 mb-5 sm:mb-20">
      <img
        class="h-48 w-48"
        src={props.img}
        style={{ "min-width": "12rem" }}
        alt=""
      />

      <ParagraphText className="!font-bold flex items-center justify-center">
        {props.title}
      </ParagraphText>

      <a href="/">
        <ParagraphText className="flex items-center justify-center">
          {props.linkedin}
        </ParagraphText>
      </a>
    </div>
  );
};

export default CardItem;
