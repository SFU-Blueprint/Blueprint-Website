import React from "react";
// import CardItem from "./CardItem";
import { ParagraphTitle } from "../Common";
import { ParagraphText } from "../Common";
/**
 * AlumniCard component to display a grid of cards.
 * @param {Object} props - The props object.
 * @param {string} props.gridName - The name of the grid section.
 * @param {Array} props.cardList - The list of card items to display.
 * @returns {JSX.Element} JSX representation of the AlumniCard component.
 */
const AlumniCard = (props) => {
  return (
    <div>
      <ParagraphTitle className="!text-blueprint-black !font-bold mb-2">
        {props.gridName}
      </ParagraphTitle>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
        {props.cardList.map((card) => (
			<div className="flex flex-col justify-between p-3 text-start md:w-[80%] md:h-28 shadow-[0px_0px_50px_0px_rgba(0,0,0,0.2)]">
				<div>
					<ParagraphText className="!font-bold">
					  {card.title}
					</ParagraphText>

					<ParagraphText className="">
					  {card.position}
					</ParagraphText>
				</div>

				<ParagraphText className="!text-blueprint-blue underline">
					<a
						href={card.linkedin}
						target="_blank"
						className="flex items-center"
						>
						LinkedIn
						<img className="ml-[5%]" src="/svgs/share.svg" alt="" />
					</a>
				</ParagraphText>
			</div>
        ))}
      </div>
    </div>
  );
};

export default AlumniCard;
