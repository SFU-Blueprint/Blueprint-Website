import React from "react";

const AboutPage = () => {
  return (
    <div>
        <div className="relative">
          <img className="md:h-80 md:w-full" src="/testImage.jpg" alt="Your"/>
          <div className="absolute left-0 bottom-5 mx-5 md:mx-10 md:my-10 justify-center">
            <p className="font-anek text-black text-4xl my-2 font-bold md:text-6xl ">About Us</p>
            <p className="font-poppins font-bold md:text-2xl" >TECH-DRIVEN ADVOCATED FOR SOCIAL GOOD</p>
          </div>
        </div>
      <div className="m-6 md:mx-20 md:mt-20 md:flex-wrap">
        <h1 className="font-anek font-bold text-xl leading-relaxed md:gap-36 md:leading-10 md:text-5xl ">Building innovative, tech-based solutions for communities and public welfare is the mission that brings us together. </h1>
           <div className="mt-5 md:justify-between md:items-start md:gap-36 md:inline-flex md:mt-10 md:ml-20">
            <p className="ml-20 font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal md:flex-2">Our talented members come from diverse cultures, professions, and social backgrounds.
             With a passion for social good and dedication to creating beautiful technology, our project teams work alongside nonprofits to help them better serve their communities.</p>
             <div></div>
             <div className="hidden md:block w-96 h-56 bg-zinc-300 rounded-sm flex-4"></div>
          </div> 
          <div className="ml-20 md:ml-40">
            <h1 className="font-poppins text-base font-medium text-xl text-blueprint-blue mt-5 md:mt-10 mb-2 md:text-2xl"> SFU BLUEPRINT</h1>
            <div className="md:justify-start md:items-start md:gap-36 md:inline-flex">
              <p className="font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal">Blueprint is a multinational community with chapters run by students from different universities. As the third established chapter in Canada, our team is based at <span>
                  <a href="https://www.sfu.ca"className="underline font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal">Simon Fraser University.</a>
                </span>
              </p>
              <div className="md:justify-start md:items-start inline-flex">
                <div className="hidden md:block w-80 h-40 bg-zinc-300 rounded-sm"></div>
                <p className="pl-10 hidden md:block font-sketch text-xl w-36 h-20 leading-none tracking-tight">A design sprint is the best way to get ideas flowing</p>
              </div>
            </div>
            <p className="font-poppins underline text-xs font-bold font-medium md:mt-6 md:text-base">See all Blueprint chapters here</p>
          </div>
       </div>
      <div className="block md:hidden">
        <img className="" src="/testImage.jpg" alt="" />
        <div className="m-5 mt-5 grid grid-cols-2">
          <img src="/testImage.jpg" alt="" />
          <p className="flex-1 font-sketch pl-10">A design sprint is the best way to get ideas flowing</p>
        </div>
      </div>

      

      

    </div>
  );
};

export default AboutPage;
