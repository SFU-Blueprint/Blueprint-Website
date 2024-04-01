import React, { useState } from "react";
import { ReactComponent as MenuXIcon } from "../assets/icons/x_gray.svg";
import SpeakerIcon from "../assets/images/home/speaker.png";
import { ParagraphText } from "./Common";

const Notification = ({ message }) => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 mx-5 lg:mx-80 mt-16 lg:mt-24 p-6 rounded-sm bg-blueprint-white shadow-2xl border border-blueprint-gray-light flex justify-between items-center duration-700 transition-opacity ${
        closed ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-10 h-10">
        <img src={SpeakerIcon} alt="Speaker Icon" />
      </div>
      <ParagraphText>{message}</ParagraphText>
      <button onClick={handleClose}>
        <MenuXIcon stroke="gray"/>
      </button>
    </div>
  );
};

export default Notification;
