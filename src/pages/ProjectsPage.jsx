import React from "react";
import Footer from "../components/Footer";
const ProjectsPage = () => {
  const content = (title) => ({
    title: title,
    tags: {
      "SMART ASSISTANT": ["Immigration", "AI/Product"],
      "ML FOR HEALTH": ["Health", "Machine Learning"],
      "DATA TRACKING": ["Sustainability", "Data"],
    }[title],
    description: {
      "SMART ASSISTANT": "Aiding New Comers to Canada",
      "ML FOR HEALTH": "Physio Therapy Outside the Clinic",
      "DATA TRACKING": "Volunteer Hour Tracking Platform",
    }[title],
    img_path: {
      "SMART ASSISTANT": "placeholder.png",
      "ML FOR HEALTH": "placeholder.png",
      "DATA TRACKING": "placeholder.png",
    }[title],
  });
  return (
    <body>
      <div className="flex flex-col px-[2%] pt-10 gap-y-4 justify-center">
        {/* Heading */}
        <div>
          <Heading className="!text-5xl h-16 font-[550]">Our Projects</Heading>
        </div>

        {/* ONGOING */}
        <div>
          <h1 className="text-black font-poppins font-[388] text-2xl">
            ONGOING
          </h1>
        </div>

        {/* Rows */}
        <div className="flex flex-row gap-x-6 place-items-stretch">
          <div className=" basis-1/3 ">
            <ProjectCard>{content("SMART ASSISTANT")}</ProjectCard>
          </div>
          <div className="basis-1/3">
            <ProjectCard>{content("ML FOR HEALTH")}</ProjectCard>
          </div>
          <div className="basis-1/3">
            <ProjectCard>{content("DATA TRACKING")}</ProjectCard>
          </div>
        </div>

        <div className=" my-[7%] place-self-center text-black text-xl font-normal font-['Poppins']">
          More coming soon!
        </div>
      </div>
    </body>
  );
};

function Heading({ children, className }) {
  return (
    <p className={`${className} font-anek text-4xl md:text-5xl font-semibold`}>
      {children}
    </p>
  );
}

function ProjectCard({ children, className }) {
  const { title, tags, description, img_path } = children;
  return (
    <div className={" ${className} shadow-md font-['Poppins']"}>
      <div className="">
        <img src={img_path} className="w-full object-cover" alt={title} />
      </div>
      {/* <div className="flex flex-row px-[5%]">
        <div className="bg-sky-500 rounded-md p-[2%]">c1</div>
        <div>c2</div>
        <div>c3</div>
      </div> */}
      <div className="p-3">
        <p className=" text-1xl font-medium  ">{title} → </p>
        <p className=" text-sm leading-5 w-2/3 ">{description}</p>
      </div>
    </div>
  );
}

export default ProjectsPage;
