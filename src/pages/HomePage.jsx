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
      <div className="mb-[100px]">
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
      <div>
        <SectionHeader>{t("home.aboutUs.title")}</SectionHeader>
        <ParagraphText className="md:w-[400px] mb-3 md:mb-6">
          {t("home.aboutUs.text")}
        </ParagraphText>
        <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
          {t("home.aboutUs.button")}
        </button>
      </div>

      <div className="flex justify-center items-center px-16 py-12 mt-16 w-full bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-1.5 mb-9 w-full max-w-[999px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base text-gray-800 max-md:mt-10">
                <div className="text-5xl whitespace-nowrap font-[550] max-md:text-4xl">
                  Get Involved
                </div>
                <div className="mt-16 text-2xl font-medium tracking-wider text-center text-sky-600 max-md:mt-10">
                  STUDENTS
                </div>
                <div className="mt-7 tracking-wide">
                  Contribute to building technology for social good. Make new
                  friends and harness your professional skillsets along the
                  away!
                </div>
                <div className="flex gap-2 justify-between px-16 py-5 mt-7 font-bold text-sky-600 rounded border-2 border-sky-600 border-solid max-md:px-5">
                  <div className="flex-auto">Join Us</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33e059d978b5fffdfa0aee910738acc9efee025b87bd18e38b68b85d5bb8cde3?apiKey=15fabc7862b44a279bf94cea7bed8979&"
                    className="self-start aspect-[1.15] w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-24 text-base text-sky-600 max-md:mt-10">
                <div className="text-2xl font-medium tracking-wider text-center">
                  NON-PROFITS
                </div>
                <div className="mt-7 tracking-wide text-gray-800">
                  Collaborate with us to advance your mission for public
                  welfare. Tackle your challenges with fresh and innovative
                  solutions!
                </div>
                <div className="flex gap-2 justify-between px-7 py-5 mt-8 font-bold rounded border-2 border-sky-600 border-solid max-md:px-5">
                  <div className="flex-auto">Collaborate with Us</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c7a6ff4c218992e9f3731db50fad62473a5df216164b0aee1b493bb253daa5?apiKey=15fabc7862b44a279bf94cea7bed8979&"
                    className="self-start aspect-[1.15] w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-24 text-base text-sky-600 max-md:mt-10">
                <div className="text-2xl font-medium tracking-wider text-center">
                  SPONSORS
                </div>
                <div className="mt-7 tracking-wide text-gray-800">
                  Support our operation to become part of the changemakers!
                  Elevate your brand while driving meaningful social impact.
                </div>
                <div className="flex gap-2.5 justify-between px-11 py-5 mt-7 font-bold rounded border-2 border-sky-600 border-solid max-md:px-5">
                  <div className="flex-auto">Sponsor Us</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33e059d978b5fffdfa0aee910738acc9efee025b87bd18e38b68b85d5bb8cde3?apiKey=15fabc7862b44a279bf94cea7bed8979&"
                    className="self-start aspect-[1.15] w-[15px]"
                  />
                </div>
              </div>
            </div>
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
