import React from 'react'

const CardItem = (props) => {
    return (
        <div className="flex flex-col h-fit w-fit m-6 mb-5 sm:mb-20">
            <img
                class="h-48 w-48"
                src={props.img}
                style={{'min-width':'12rem'}}
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