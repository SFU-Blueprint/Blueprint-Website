import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  PageHeader,
  ParagraphText,
  ParagraphTitle,
  SectionHeader,
} from "../components/Common";

import { Roles } from "../constants/Hiring";

const StudentsPage = () => {
  const { t } = useTranslation();
  const phases = t("students.phases");
  const Header = "images/student/studentPage_header.webp";

  const [activePhase, setActivePhase] = useState(0);
  const [roles, setRoles] = useState(Roles);
  const [hiringRoles, setHiringRoles] = useState(Roles.filter(role => role.Hiring));
  const phasesDesc = t("students.phasesDesc");
  const content = t("content");


  const navigateToAnchor = (page, section) => {
    // Construct the URL with the page path and the anchor point
    window.location.href = `/${page}#${section}`;
  };
  function ToDiscord() {
    window.open(t("discord.link"), "_blank");
  }

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          className="w-full h-[35vh] sm:h-[45vh] object-cover"
          src={Header}
          alt="student header"
        />
        <div className="absolute bottom-5 md:my-10">
          <PageHeader id="Begin" className="!text-blueprint-black sm:!text-blueprint-white ml-10 md:ml-16 md:text-6xl xl:ml-36">
            Get Involved
          </PageHeader>
          <ParagraphTitle className="!text-blueprint-black sm:!text-blueprint-white mt-[6px] mb-[12px] ml-10 md:ml-16 md:text-6xl xl:ml-36">
            Join us and make your impact as a student
          </ParagraphTitle>
          <PositionsButton
            className="!border-blueprint-black !text-blueprint-black sm:!border-blueprint-white sm:!text-blueprint-white font-semibold rounded-sm my-5 ml-10 md:ml-16  xl:ml-36"
            onClick={() => navigateToAnchor("students", "positions")}
          >
            View Open Positions
          </PositionsButton>
        </div>
      </div>

      <SectionHeader className="mt-[36px] ml-[6%]">Why Join us?</SectionHeader>

      <div className=" mt-[12px]">
        <ParagraphText className="ml-[6%]">
          {t("students.whyJoinUs.header")}
        </ParagraphText>
        <ParagraphText className="list-disc mt-[12px] ml-[10%] pr-[20%]">
          {arrayToUnorderedList(t("students.whyJoinUs.list"))}
        </ParagraphText>
        <ParagraphText className="mt-[12px] ml-[6%] pr-[20%]">
          {t("students.whyJoinUs.text")}
        </ParagraphText>
      </div>

      <SectionHeader
        id="positions"
        className="mt-[36px] ml-[6%] flex flex-row justify-start"
      >
        Open Positions
      </SectionHeader>
      <div className="mb-[24px] px-[5%]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
          {hiringRoles.length > 0 ? (
            hiringRoles.map((role, index) => (
              <PositionCard key={index} role={role} />
            ))
          ) : (
            <div className="text-center my-[10%]">
              <ParagraphText className="text-blue-500 font-medium">
                [ Currently, there are no open positions. Please check back later. ]
              </ParagraphText>
            </div>
          )}
        </div>
      </div>
      <ParagraphText className="mt-[24px] mx-[24px] flex flex-row justify-center">
        Join our Discord or follow us on Instagram to get the latest updates on
        hiring and opportunity posting.
      </ParagraphText>

      <SectionHeader id="Our-Semester" className="my-[36px] ml-[6%]">
        A Typical Semester
      </SectionHeader>
      {/* <SectionHeader className="mt-16 mb-5">Our Process</SectionHeader> */}
      <div className="flex max-md:flex-col gap-24 mx-[12px] ml-[6%]">
        <div className="flex flex-col w-full md:w-[420px] gap-2">
          {phases.map((phase, index) => (
            <div key={index}>
              <button
                className={`flex flex-col justify-center items-start w-full h-[100px] gap-2 px-[10%] rounded-sm shadow-md text-left transition duration-300 ease-in-out transform hover:shadow-2xl ${
                  index === activePhase && "bg-blueprint-blue"
                }`}
                onClick={() => setActivePhase(index)}
              >
                <ParagraphTitle
                  className={`${
                    index === activePhase && "text-blueprint-white"
                  } !text-2xl`}
                >
                  {phases[index]}
                </ParagraphTitle>
                <ParagraphText
                  className={`${
                    index === activePhase && "text-blueprint-white"
                  } !tracking-normal`}
                >
                  {phasesDesc[index]}
                </ParagraphText>
              </button>
              <ContentCard
                className={`${
                  index !== activePhase && "hidden"
                } md:hidden w-full py-8`}
              >
                {content[phasesDesc[activePhase]]}
              </ContentCard>
            </div>
          ))}
        </div>
        <ContentCard className="max-md:hidden pt-32 whitespace-pre-line">
          {content[phasesDesc[activePhase]]}
        </ContentCard>
      </div>
      <SectionHeader id="Apply" className="mt-[10%] mb-[2%] ml-[6%]">Roles</SectionHeader>
      {roles.map((role, index) => (
        <div key={index} className="px-[3%] md:px-[5%]">
          <RolesCard role={role} />
        </div>
      ))}
      <div className="bg-blueprint-gray-light w-full h-[450px] mt-[10%] flex flex-col items-center justify-center px-[15%] ">
        <PageHeader>Stay in Touch</PageHeader>
        <ParagraphText className="text-center whitespace-pre-line mb-3 md:mb-6">
          {t("students.stayInTouch")}
        </ParagraphText>
        <PositionsButton
          className="!border-blueprint-blue !text-blueprint-blue font-semibold rounded-sm mt-[4%]"
          onClick={ToDiscord}
        >
          Join the Discord
        </PositionsButton>
      </div>
    </div>
  );
};

const PositionCard = ({role}) => {
  const { Role, Description = [], Link, Deadline } = role; // Set a default empty array if Description is undefined
  const [showMore, setShowMore] = useState(false);

  // Ensure Description has content before attempting to display it
  const hasDescription = Description && Description.length > 0;

  return (
    <div className="shadow-md">
      <div className="py-[10%] px-[5%]">
        <ParagraphTitle className="text-blue-500font-medium font-poppins text-2xl font-medium uppercase">
          {Role}
        </ParagraphTitle>
        <ParagraphText className="mt-[4%] mb-[6%] ">
          {showMore ? Description.join(" ") : Description[0]}
            {Description.length > 1 && (
              <a href="#" className="text-blue-500" onClick={(e) => {e.preventDefault(); setShowMore(!showMore);}}>
                {showMore ? " Show Less" : " Read More"}
              </a>
            )}
        </ParagraphText>
        <ParagraphText className="font-semibold mb-[7%] ">
          Application Deadline: {Deadline}
        </ParagraphText>
        <div className="py-[3%] border-blueprint-blue w-3/5 rounded-sm border-2 flex justify-center items-center">
          <a href={Link} className="px-[3%] text-blueprint-blue font-poppins font-medium">
            View Details and Apply
          </a>
        </div>
      </div>
    </div>
  );
};

function ContentCard({ children, className }) {
  const { title, text } = children;
  return (
    <div className={`${className} flex flex-col w-full md:w-[420px] gap-1`}>
      <ParagraphTitle>{title}</ParagraphTitle>
      <ParagraphText>{text}</ParagraphText>
    </div>
  );
}

function RolesCard({ role, className }) {
  const { Role, Description, Hiring, Link } = role;
  return (
    <div
      className={`${className} flex flex-col w-full gap-1 border-black shadow-lg`}
    >
      <ParagraphTitle className="mx-[8%] mt-[6%] mb-[3%]">
        {" "}
        {Role}
      </ParagraphTitle>
      <div className="text-blueprint-black font-poppins text-[0.75rem] md:text-[1rem] leading-normal mx-[10%] mb-[5%] flex justify-between">
        <ParagraphText className="w-4/5 md:w-3/5">
          {arrayToUnorderedList(Description)}
        </ParagraphText>
        {/* PC */}
        <ParagraphTitle
          className={`block max-md:hidden text-center ${
            Hiring
              ? "text-blueprint-blue flex justify-center mb-[8%]"
              : "!text-blueprint-gray-dark mb-[8%]"
          }`}
        >
          {Hiring ? (
            <div className="py-[3%] px-[10%] border-blueprint-blue rounded-sm border-2 flex justify-center items-center">
              <a href={Link} className=" text-blueprint-blue font-poppins font-medium">
                View Details and Apply
              </a>
            </div>
          ) : (
            <div className="text-center">Applications Closed</div>
          )}
        </ParagraphTitle>
      </div>
      {/* Mobile */}
      <ParagraphTitle
        className={`hidden max-md:block text-center ${
          Hiring
            ? "text-blueprint-blue flex flex-row justify-center items-center mb-[8%]"
            : "!text-blueprint-gray-dark mb-[8%]"
        }`}
      >
        {Hiring ? (
          <div className="py-[3%] border-blueprint-blue mx-[20%] rounded-sm border-2">
            <button className="px-[3%] text-blueprint-blue font-poppins font-medium">
              View Details and Apply
            </button>
          </div>
        ) : (
          <div className="text-center">Applications Closed</div>
        )}
      </ParagraphTitle>
    </div>
  );
}

function arrayToUnorderedList(array) {
  return (
    <ul className="list-disc">
      {array.map((str, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: str }} />
      ))}
    </ul>
  );
}

function PositionsButton({ className, onClick, children }) {
  return (
    <button
      className={`${className} border-gray-800 text-gray-800 flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default StudentsPage;
