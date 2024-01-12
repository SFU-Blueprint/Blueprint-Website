import React from "react";
import GearSection from "../components/GearSection";

const AboutPage = () => {
  return (
    <div>
      {/* About us */}
        <div className="relative">
          <img className="md:h-80 md:w-full" src="/testImage.jpg" alt="Your"/>
          <div className="absolute left-0 bottom-5 ml-5 justify-center md:mx-10 md:my-10">
            <p className="font-anek text-black text-4xl my-2 font-bold md:text-6xl ">About Us</p>
            <p className="font-poppins font-bold md:text-2xl">TECH-DRIVEN ADVOCATED FOR SOCIAL GOOD</p>
          </div>
        </div>
      {/* Description */}
      <div className="m-6 md:mx-20 md:mt-20 md:flex-wrap">
        {/* Header */}
        <h1 className="font-anek text-xl leading-relaxed md:gap-36 md:leading-10 md:text-5xl ">Building innovative, tech-based solutions for communities and public welfare is the mission that brings us together. </h1>
        {/* Desc 1 */}
        {/* <div className="mt-5 md:justify-between md:items-start md:gap-36 md:inline-flex md:mt-10 md:mr-20">
          <p className="ml-20 font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal md:flex-2">Our talented members come from diverse cultures, professions, and social backgrounds.
            With a passion for social good and dedication to creating beautiful technology, our project teams work alongside nonprofits to help them better serve their communities.</p>
            <div></div>
            <div className="hidden md:block w-96 h-56 bg-zinc-300 rounded-sm flex-4"></div>
        </div>  */}
        <div className="flex flex-col ml-[20%] md:w-4/5 md:ml-[11%] md:flex-row mt-[24px] md:mt-[64px] md:justify-between ">
          <p className="md:w-2/5 text-xs font-poppins tracking-tight md:tracking-wide md:text-base md:font-normal">
            Our talented members come from diverse cultures, professions, and
            social backgrounds. With a passion for social good and dedication to
            creating beautiful technology, our project teams work alongside
            nonprofits to help them better serve their communities.
          </p>
          <div className="hidden md:block ml-[10%] w-96 h-56 bg-zinc-300 rounded-sm"></div>
        </div>
        {/* Desc 2 */}
        <div className="ml-[20%] flex flex-col mt-[24px] md:ml-[11%] md:w-4/5 md:justify-start">
          <h1 className="font-poppins text-base font-medium text-xl text-blueprint-blue mt-5 md:mt-10 mb-2 md:text-2xl"> SFU BLUEPRINT</h1>
          <div className="flex flex-row md:justify-between md:items-start md:gap-36 md:inline-flex">
            <p className="font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal">Blueprint is a multinational community with chapters run by students from different universities. As the third established chapter in Canada, our team is based at <span>
                <a href="https://www.sfu.ca"className="underline font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal">Simon Fraser University.</a>
              </span>
            </p>
            <div className="md:justify-start md:items-start inline-flex">
              <div className="hidden md:block w-80 h-40 bg-zinc-300 rounded-sm"></div>
              <p className="pl-10 hidden md:block font-sketch text-xl w-36 h-20 leading-none tracking-tight">A design sprint is the best way to get ideas flowing</p>
            </div>
          </div>
          <p className="font-poppins underline text-xs font-bold mt-4 md:mt-6 md:text-base">See all Blueprint chapters here</p>
        </div>
       </div>
      <div className="block mt-15 flex flex-col items-center md:hidden">
        <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
        <div className="m-[10%] flex flex-row">
          <div className="block basis-4/6 md:hidden w-64 h-32 bg-zinc-300 rounded-sm "></div>
          <p className="basis-2/6 font-sketch pl-[10%]">A design sprint is the best way to get ideas flowing</p>
        </div>
      </div>

      <GearSection></GearSection>

    </div>
  );
};

export default AboutPage;
