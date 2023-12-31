import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="border-black border-2 p-40 text-center text-3xl font-bold underline">About Page Image</div>
      <div className="m-32">
        <h1 className="text-5xl font-bold ">Building innovative, tech-based solutions for communities and public welfare is the mission that brings us together. </h1>
        <div className="m-20 grid grid-cols-2">
          <div>
            <p>Our talented members come from diverse cultures, professions, and social backgrounds.
             With a passion for social good and dedication to creating beautiful technology, our project teams work alongside nonprofits to help them better serve their communities.</p>
             <h1 className="text-xl text-blueprint-blue font-bold mt-10 mb-7"> SFU BLUEPRINT</h1>
             <p>Blueprint is a multinational community with chapters run by students from different universities. As the third established chapter in Canada, our team is based at <span>
                <a href="https://www.sfu.ca"className="underline">Simon Fraser University.</a>
              </span>
            </p>
            <p className="underline font-bold mt-6">See all Blueprint chapters here</p>
          </div>
          <div>
            <img className="float-right" src="" alt="" />
            <img className="float-left" src="" alt="" />
          </div>
        </div>
        
      </div>
      

    </div>
  );
};

export default AboutPage;
