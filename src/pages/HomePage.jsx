import React from "react";
import {useTranslation} from "react-i18next";
import { ParagraphTitle, ButtonText, Landing, Annotation, PageHeader, SectionHeader, ParagraphText } from "../components/Common";
import ProjectCard from "../components/projects-page/ProjectCard";

const HomePage = () => {
  const {t, i18n} = useTranslation()

  //Favorite projects for home page
  const projects = ["smartAssistant", "aiForHealth", "dataTracking"];
  
  const backgroundStyle = {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("grid.png")',
    filter: "brightness(95%)",
    backgroundSize: "3vmin",
    backgroundRepeat: "repeat repeat",
    maskImage:
      "radial-gradient(ellipse at right 30% top 50%, black 1%, transparent 50%)",
  };

  return (
    <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
      <div className="mb-[100px] mx-12">
        <Landing className="!font-semibold md:w-[600px]">
          {t("home.header.title")}
        </Landing>
        <ParagraphText className="md:w-[400px] mb-3 md:mb-6">
          {t("home.header.text")}
        </ParagraphText>
        <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
          {t("home.header.button")}
        </button>
      </div>
      <div className="mt-60">
        <SectionHeader>{t("home.aboutUs.title")}</SectionHeader>
        <ParagraphText className="md:w-[500px] mb-3 md:mb-6">
          {t("home.aboutUs.text")}
        </ParagraphText>
        <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
          {t("home.aboutUs.button")}
        </button>
      </div>
    
    
      <div className="px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 bg-zinc-100">
        <SectionHeader className="mb-10">Get Involved</SectionHeader>
        <div className="flex max-md:flex-col justify-between gap-9 mb-16 ">
          <div className="flex flex-col justify-start h-48 gap-2">
          <ParagraphTitle>STUDENTS</ParagraphTitle>
          <ParagraphText>Contribute to building technology for social good. Make new friends and harness your professional skillsets along the away!</ParagraphText>
          <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
            Join us
          </button>        
          </div>

          <div className="flex flex-col justify-start h-48 gap-2">
            <ParagraphTitle>NON-PROFITS</ParagraphTitle>
            <ParagraphText> Collaborate with us to advance your mission for public
                    welfare. Tackle your challenges with fresh and innovative
                    solutions!</ParagraphText>
            <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
              Collaborate with Us
            </button>        
          </div>

          <div className="flex flex-col justify-start h-48 gap-2">
            <ParagraphTitle>SPONSORS</ParagraphTitle>
            <ParagraphText>Support our operation to become part of the changemakers!
                    Elevate your brand while driving meaningful social impact.</ParagraphText>
            <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
              Sponsor Us
            </button>        
          </div>     
        </div>
      </div>

    <div>
      
      <div style={backgroundStyle}></div>
      <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
        <PageHeader className="my-5">Our Projects</PageHeader>
        <SectionHeader>Ongoing</SectionHeader>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {Object.keys(projects).map((projectKey, index) => (
            <div key={index} className="">
              <ProjectCard project={projects[projectKey]} className="your-class-name" />
            </div>
        ))}
        </div>
        <ParagraphText className="my-[10%] md:my-[8%] text-center !text-xl">
          More coming soon!
        </ParagraphText>
      </div>
    </div>
    

      <h2 className="mt-7 text-2xl font-medium tracking-wider text-center text-sky-600 max-md:max-w-full">
      <ParagraphTitle>STAY UPDATED WITH OUR EVENTS</ParagraphTitle>
      </h2>
      
      <div className="px-0.5 mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
        </div>
      </div>
    
    </div>
    
  );
};
export default HomePage;
