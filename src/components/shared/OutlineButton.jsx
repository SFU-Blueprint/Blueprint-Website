import React from 'react';

/**
 * OutlineButton component renders a button with outlined style.
 * @param {Object} props - The props object.
 * @param {function} props.onClick - The function to be executed when the button is clicked.
 * @param {*} props.children - The content to be displayed inside the button.
 * @returns {JSX.Element} - The rendered button component.
 */
const OutlineButton = (
  {
    className,
    onClick = ()=>console.log("On click not defined"),
    children
  }
) => {
    return (
      <button
        className={`btn hover:bg-blueprint-blue hover:text-white text-blueprint-blue outline-blueprint-blue w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default OutlineButton;