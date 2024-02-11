import React from "react";
import CardItem from "./CardItem";
import { ParagraphTitle } from "../Common";
/**
 * CardGrid component to display a grid of cards.
 * @param {Object} props - The props object.
 * @param {string} props.gridName - The name of the grid section.
 * @param {Array} props.cardList - The list of card items to display.
 * @returns {JSX.Element} JSX representation of the CardGrid component.
 */
const CardGrid = (props) => {
  return (
    <>
      <ParagraphTitle className="!text-blueprint-black !font-bold mb-2">
        {props.gridName}
      </ParagraphTitle>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
        {props.cardList.map((card, index) => (
          <CardItem
            key={index}
            img={card.img}
            title={card.title}
            linkedin={card.linkedin}
          />
        ))}
      </div>
    </>
  );
};

export default CardGrid;
