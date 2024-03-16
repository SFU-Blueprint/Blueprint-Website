import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {
  ParagraphTitle,
  Landing,
  SectionHeader,
  ParagraphText,
} from "../components/Common";
import ProjectCard from "../components/shared/ProjectCard";
import { Event1, Event2, Event3 } from "../constants/Event";
import OutlineButton from "../components/shared/OutlineButton";
import ProjectModal from "../components/shared/ProjectModal";

import LadyTyping from "../assets/images/home/lady_typing.png";
import HomeBGFull from "../assets/images/home/home_bg_full.png";
import HomeBGFullLeft from "../assets/images/home/home_bg_left.png";
import { navigateToAnchor } from "../utils/navigateToAnchor";

const HomePage = () => {
  const { t, i18n } = useTranslation();
// Other state and variables
const [selectedProject, setSelectedProject] = useState(null);
const [showPopup, setShowPopup] = useState(false);

const handleProjectClick = (projectKey) => {
  const projectDetails = projects[projectKey];
  setSelectedProject(projectDetails); 
  setShowPopup(true);
};

  const projects = t("projects"); //TODO Put key in a separate file

  const backgroundStyle = {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",

    backgroundImage: "",
    filter: "brightness(95%)",
    backgroundSize: "3vmin",
    backgroundRepeat: "repeat repeat",
    maskImage:
      "radial-gradient(ellipse at right 30% top 50%, black 1%, transparent 50%)",
  };

  const GetInvolvedSection = ({ jsonKey, onClick, children }) => {
    return (
      <div className="flex flex-col justify-start h-48 gap-2">
        <ParagraphTitle>
          {t(`home.getinvolved.${jsonKey}.title`)}
        </ParagraphTitle>
        <ParagraphText>
          {t(`home.getinvolved.${jsonKey}.content`)}
        </ParagraphText>
        <OutlineButton onClick={onClick}>
          {t(`home.getinvolved.${jsonKey}.button`)}
        </OutlineButton>
      </div>
    );
  };

  return (
    <div className="flex flex-col pt-10 gap-4">
      <img
        className="absolute right-0 w-[600px] min-w-[600px] z-[-1]"
        src={HomeBGFull}
        alt="about us header"
      />

      <img
        className="absolute top-[500px] md:w-[1500px] min-w-[100vw] z-[-2] object-contain"
        src={HomeBGFullLeft}
        alt="about us header"
      />
      <div className="mb-[100px] mx-12 px-3 md:px-[15%] ">
        <Landing className="!font-semibold md:w-[600px] pt-32">
          {t("home.header.title")}
        </Landing>
        <ParagraphText className="md:w-[400px] mb-3 md:mb-6">
          {t("home.header.text")}
        </ParagraphText>
        <OutlineButton onClick={() => navigateToAnchor("students")}>
          {t("home.header.button")}
        </OutlineButton>
      </div>
      <div className="mt-60 px-3 md:px-[15%] ">
        <SectionHeader>{t("home.aboutUs.title")}</SectionHeader>
        <ParagraphText className="md:w-[500px] mb-3 md:mb-6">
          {t("home.aboutUs.text")}
        </ParagraphText>
        <OutlineButton onClick={() => navigateToAnchor("about")}>
          {t("home.aboutUs.button")}
        </OutlineButton>
      </div>

      <div className="px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 bg-zinc-100 px-3 md:px-[15%] ">
        <SectionHeader className="mb-10">Get Involved</SectionHeader>
        <div className="flex max-md:flex-col justify-between gap-12 mb-16 ">
          <GetInvolvedSection
            jsonKey="students"
            onClick={() => navigateToAnchor("students")}
          ></GetInvolvedSection>

          <GetInvolvedSection
            jsonKey="nonprofits"
            onClick={() => navigateToAnchor("nonprofits")}
          ></GetInvolvedSection>

          <GetInvolvedSection
            jsonKey="sponsors"
            onClick={() => console.log("Page not defined")}
          ></GetInvolvedSection>
        </div>
      </div>

      <div>
        <div style={backgroundStyle}></div>
        <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
          <SectionHeader className="md:self-center mb-5">
            Our Projects
          </SectionHeader>
          {/* <SectionHeader>Ongoing</SectionHeader> */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">

            {Object.keys(projects)
              .map((projectKey, index) => (
                <ProjectCard
                key={index}
                project={projectKey}
                className="your-class-name"
                onClick={() => handleProjectClick(projectKey)}
              />
              ))}
            <ProjectModal
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
              project={selectedProject || {}}
            />

          </div>
          <div className="w-full flex justify-end">
            <OutlineButton onClick={() => navigateToAnchor("projectspage")}>
              {t("projectspage.allprojects")}
            </OutlineButton>
          </div>
        </div>
      </div>

      {/*Contact us*/}
      <div className="px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 md:px-[15%] flex flex-col gap-4">
        <div className="relative w-full">
          <img
            className="absolute w-[230px] right-0 hidden lg:inline"
            src={LadyTyping}
            alt="about us header"
          />
        </div>
        <SectionHeader>Contact Us</SectionHeader>
        <ParagraphTitle>WE ARE JUST ONE MESSAGE AWAY</ParagraphTitle>
        <ParagraphText>
          Students, get your quick question in through our Discord server
          <br />
          For collaborations or sponsorships, shoot us an email at
          sfublueprint@gmail.com
        </ParagraphText>
      </div>

      {/* Desktop Photos */}
      <div className="hidden md:block px-3 md:px-[15%] mb-16">
        <ParagraphTitle>STAY UPDATED WITH OUR EVENTS</ParagraphTitle>
        <div className="flex max-md:flex-col justify-between mt-8 ">
          {Event1.map((items, key) => (
            <div className="flex flex-col">
              <img
                className="h-48 w-[150px] sm:w-[200px] md:w-[240px] inset-0 object-cover"
                src={items.img}
                // style={{ width: "250px" }}
                alt=""
              />
              <ParagraphText className="">{items.title}</ParagraphText>
            </div>
          ))}
        </div>
        <ParagraphText className="mt-10">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/sfublueprint/"
            className="underline"
          >
            Instagram
          </a>
        </ParagraphText>
      </div>

      {/* Mobile photos */}
      <div className="block md:hidden flex flex-col align-center content-center justify-center justify-items-center items-center">
        <div>
          <ParagraphTitle>STAY UPDATED WITH OUR EVENTS</ParagraphTitle>

          <div className="relative block group">
            <img
              className="absolute inset-0 object-cover group-hover:opacity-50"
              src={Event3.img}
              // style={{ "min-width": "12rem" }}
              alt=""
            />
            <div className="relative ">
              <div className="mt-10 mb-40">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                >
                  <div className="p-1">
                    {/* <p className="text-sm text-start text-black">
                      {Event3.date}
                    </p> */}
                    <p className="text-sm text-start text-black ">
                      {Event3.title}
                    </p>
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between space-between content-between px-7 my-5">
          {Event2.map((items, key) => (
            <div className="relative block group " key={key}>
              <img
                className="absolute h-32 w-48 inset-0 object-cover group-hover:opacity-50"
                src={items.img}
                alt=""
              />
              <div className="relative ">
                <div className="mt-11">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                  >
                    <div className="p-1">
                      {/* <p className="text-sm text-start text-black">
                        {items.date}
                      </p> */}
                      <p className="text-sm text-start text-black ">
                        {items.title}
                      </p>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ParagraphText className="mt-5">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/sfublueprint/"
            className="underline"
          >
            Instagram
          </a>
        </ParagraphText>
      </div>
    </div>
  );
};
export default HomePage;
