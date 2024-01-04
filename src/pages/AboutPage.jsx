import React from "react";

const AboutPage = () => {
  return (
    <div>
        <div className="relative">
          <img src="/testImage.jpg" alt="Your" class="w-full h-auto"/>
          <div className="absolute left-0 bottom-5 mx-5 md:mx-10 md:my-10 justify-center">
            <p className="font-anek text-black text-4xl my-1.5 font-bold md:text-5xl ">About Us</p>
            <p className="font-poppins font-bold md:text-2xl" >TECH-DRIVEN ADVOCATED FOR SOCIAL GOOD</p>
          </div>
        </div>
      <div className="m-6 md:m-10">
        <h1 className="font-anek font-bold text-2xl md:text-5xl">Building innovative, tech-based solutions for communities and public welfare is the mission that brings us together. </h1>
        <div className="ml-20 mt-5 md:m-10 md:grid md:grid-cols-2">
          <div>
            <p className="font-poppins">Our talented members come from diverse cultures, professions, and social backgrounds.
             With a passion for social good and dedication to creating beautiful technology, our project teams work alongside nonprofits to help them better serve their communities.</p>
             <h1 className="font-poppins text-xl text-blueprint-blue font-bold mt-10 mb-7"> SFU BLUEPRINT</h1>
             <p>Blueprint is a multinational community with chapters run by students from different universities. As the third established chapter in Canada, our team is based at <span>
                <a href="https://www.sfu.ca"className="underline font-poppins">Simon Fraser University.</a>
              </span>
            </p>
            <p className="font-poppins underline font-bold mt-6">See all Blueprint chapters here</p>
          </div>
          <div className="hidden md:block md:space-y-20 flex">
            <div className="flex">
              <img className="ml-20 size-4/5" src="/testImage.jpg" alt="" />
            </div>
            <div className="flex">
              <img className="bottom-0 size-3/5 " src="/testImage.jpg" alt="" />
              <p className="flex-1 font-sketch pl-10">A design sprint is the best way to get ideas flowing</p>
            </div>
          </div>
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
