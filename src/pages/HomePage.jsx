import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ParagraphTitle,
  Landing,
  SectionHeader,
  ParagraphText,
} from "../components/Common";
import Notification from "../components/Notification";
import ProjectCard from "../components/shared/ProjectCard";
import { Events } from "../constants/Event";
import OutlineButton from "../components/shared/OutlineButton";
import ProjectModal from "../components/shared/ProjectModal";
import { Projects } from "../constants/projects";
import { navigateToAnchor } from "../utils/navigateToAnchor";
import { Anouncment, Show } from "../constants/Notification";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(Show);
  const [projects, setProjects] = useState(Projects);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

  const LadyTyping = "images/home/lady_typing.webp";
  const HomeBGFull = "images/home/home_bg_full.webp";
  const HomeBGFullLeft = "images/home/home_bg_left.webp";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const backgroundStyle = {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: "",
    filter: "brightness(95%)",
    backgroundSize: "3vmin",
    backgroundRepeat: "repeat repeat",
    maskImage: "radial-gradient(ellipse at right 30% top 50%, black 1%, transparent 50%)",
  };

  const GetInvolvedSection = ({ jsonKey, onClick }) => {
    return (
      <div className="flex flex-col justify-start h-48 gap-2">
        <ParagraphTitle>{t(`home.getinvolved.${jsonKey}.title`)}</ParagraphTitle>
        <ParagraphText>{t(`home.getinvolved.${jsonKey}.content`)}</ParagraphText>
        <OutlineButton onClick={onClick}>{t(`home.getinvolved.${jsonKey}.button`)}</OutlineButton>
      </div>
    );
  };

  return (
    <div className="flex flex-col pt-10 gap-4">
      {showNotification && (
        <Notification message="Add notification message here" onClose={() => setShowNotification(false)} />
      )}
      <div>
        <img
          className={`${isSmallScreen ? "mt-96 block min-w-[400px] w-[400px]" : "min-w-[600px] w-[600px]"} absolute z-[-1] right-0`}
          src={HomeBGFull}
          alt="about us header"
          fetchPriority="high"
          style={{ top: isSmallScreen ? "300px" : "" }}
        />
      </div>

      <img
        className={`${isSmallScreen ? "top-[150px]" : "top-[500px]"} absolute z-[-2] object-contain`}
        src={HomeBGFullLeft}
        alt="about us header"
        fetchPriority="high"
      />
      <div className="mb-[100px] mx-12 px-3 md:px-[15%] overflow-x-none">
        <Landing className={`${isSmallScreen ? "mt-56" : "mt-32"} !font-semibold md:w-[600px]`}>
          {t("home.header.title")}
        </Landing>
        <ParagraphText className="md:w-[400px] mb-3 md:mb-6">
          {t("home.header.text")}
        </ParagraphText>
        <OutlineButton onClick={() => navigateToAnchor("students")}>{t("home.header.button")}</OutlineButton>
      </div>
      <div
        style={{ paddingTop: isSmallScreen ? "500px" : "0" }}
        className={`${isSmallScreen ? "mt-36" : "mt-64"} px-3 md:px-[15%] mt-40`}
      >
        <SectionHeader>{t("home.aboutUs.title")}</SectionHeader>
        <ParagraphText className="md:w-[500px] mb-3 md:mb-6">{t("home.aboutUs.text")}</ParagraphText>
        <OutlineButton onClick={() => navigateToAnchor("about")}>{t("home.aboutUs.button")}</OutlineButton>
      </div>

      <div className="px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 bg-zinc-100 md:px-[15%]">
        <SectionHeader className="mb-10">Get Involved</SectionHeader>
        <div className="flex max-md:flex-col justify-between gap-12">
          <GetInvolvedSection jsonKey="students" onClick={() => navigateToAnchor("students")} />
          <GetInvolvedSection jsonKey="nonprofits" onClick={() => navigateToAnchor("nonprofits")} />
        </div>
      </div>

      <div>
        <div style={backgroundStyle}></div>
        <div className="flex flex-col px-3 md:px-[15%] pt-10">
          <SectionHeader className="md:self-center mb-5">Our Projects</SectionHeader>
          <div className="flex flex-col self-center lg:grid lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="your-class-name m-3"
                onClick={() => handleProjectClick(project)}
              />
            ))}
            <ProjectModal isOpen={showPopup} onClose={() => setShowPopup(false)} project={selectedProject || {}} />
          </div>
          <div className="w-full flex justify-end">
            <OutlineButton onClick={() => navigateToAnchor("projectspage")}>
              {t("projectspage.allprojects")}
            </OutlineButton>
          </div>
        </div>
      </div>

      <div className="px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 md:px-[15%] flex flex-col gap-4">
        <div className="relative w-full">
          <img className="absolute w-[230px] right-0 hidden lg:inline" src={LadyTyping} alt="about us header" />
        </div>
        <SectionHeader>Contact Us</SectionHeader>
        <ParagraphTitle>WE ARE JUST ONE MESSAGE AWAY</ParagraphTitle>
        <ParagraphText>
          Students, get your quick question in through our &nbsp;
          <a href={t("discord.link")} className="font-bold underline">
            Discord server
          </a>
          <br />
          For collaborations or sponsorships, shoot us an email at &nbsp;
          <a href={t("discord.link")} className="font-bold underline">
            sfublueprint@gmail.com
          </a>
        </ParagraphText>
      </div>

      <div className="hidden md:block px-3 md:px-[15%] mb-16">
        <ParagraphTitle>STAY UPDATED WITH OUR EVENTS</ParagraphTitle>
        <div className="flex max-md:flex-col justify-between mt-8">
          {Events.map((items, key) => (
            <div key={key} className="flex flex-col px-5">
              <img
                className="h-48 w-[150px] md:w-[200px] lg:w-[250px] inset-0 object-cover"
                src={items.img}
                alt=""
              />
              <ParagraphText className="mt-[12px]">{items.title}</ParagraphText>
            </div>
          ))}
        </div>
        <ParagraphText className="mt-10 flex justify-center">
          Follow us on&nbsp;
          <a
            href="https://www.instagram.com/sfublueprint/"
            className="hover:text-blueprint-blue hover:font-semibold hover:cursor-pointer underline"
          >
            Instagram
          </a>
        </ParagraphText>
      </div>

      <div className="block md:hidden flex flex-col items-center">
        <div>
          <ParagraphTitle className="mx-5 mt-5">STAY UPDATED WITH OUR EVENTS</ParagraphTitle>
        </div>
        <div className="grid grid-cols-2 items-center justify-center">
          {Events.map((items, key) => (
            <div key={key} className="flex flex-col px-5 pt-1">
              <img
                className="h-48 w-[150px] sm:w-[200px] md:w-[240px] inset-0 object-cover"
                src={items.img}
                alt=""
              />
              <ParagraphText className="mt-[12px] mb-[40px]">{items.title}</ParagraphText>
            </div>
          ))}
        </div>

        <ParagraphText className="my-2">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/sfublueprint/"
            className="hover:text-blueprint-blue hover:font-semibold hover:cursor-pointer underline"
          >
            Instagram
          </a>
        </ParagraphText>
      </div>
    </div>
  );
};

export default HomePage;
