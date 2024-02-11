import React from 'react'

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
                style={{'min-width':'12rem'}}
                alt=""
            />
       
            <p className="font-poppins font-bold flex items-center justify-center text-[12px] sm:text-base">
                {props.title}
            </p>

            <a href="/" className="font-poppins flex items-center justify-center text-[12px] sm:text-base">
                {props.linkedin}
            </a>
        </div>
    )
  }
  
  export default CardItem