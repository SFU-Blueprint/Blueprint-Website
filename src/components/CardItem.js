import React from 'react'

const CardItem = (props) => {
    return (
        <div className="flex flex-col h-21 w-21 m-6 sm:h-48 sm:w-60 mb-5 sm:mb-20">
        <img class= ""
        src={props.img}
        alt=""
        />
       
        <p class="font-poppins font-bold flex items-center justify-center text-[12px] sm:text-base">         
          {props.title}
        </p>

        <a href="/" class="font-poppins flex items-center justify-center text-[12px] sm:text-base">         
          {props.linkedin}
        </a>
        </div>
    )
  }
  
  export default CardItem