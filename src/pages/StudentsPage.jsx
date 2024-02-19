import React, {useState} from "react";
// import Footer from "../components/Footer";
// import { PROJECT_KEYS } from "../constants/projects";
import {useTranslation} from "react-i18next";

import {PageHeader, ParagraphText, ParagraphTitle, SectionHeader,} from "../components/Common";

const StudentsPage = () => {
    const {t} = useTranslation();
  const phases = t("students.phases");
  const openPositions = t("students.openPositions");

  const [activePhase, setActivePhase] = useState(0);
  const phasesDesc = t("students.phasesDesc");
  const content = t("content");
  const roles = t("roles");
  const rolesContent = t("rolesContent");

  const navigateToAnchor = (page, section) => {
    // Construct the URL with the page path and the anchor point
    window.location.href = `/${page}#${section}`;
  };
  function ToDiscord() {
    window.open(t("discord.link"), "_blank");
  }

  return (
    <div className="flex flex-col">
      <div className="w-full h-[500px] px-[5%] md:px-[15%] pt-[200px] bg-gray-300">
        <PageHeader className="">Get Involved</PageHeader>
        <ParagraphTitle className="!text-black mt-[6px] mb-[12px]">
          Join us and make your impact as a student
        </ParagraphTitle>
        <PositionsButton
          onClick={() => navigateToAnchor("students", "positions")}
        >
          View Open Positions
        </PositionsButton>
      </div>

      <SectionHeader className="mt-[36px] ml-[6%]">Why Join us?</SectionHeader>

      <div className=" mt-[12px]">
        <ParagraphText className="ml-[6%]">
            {t("students.whyJoinUs1")}
        </ParagraphText>
        <ParagraphText className="list-disc mt-[12px] ml-[10%] pr-[20%]">
            { arrayToUnorderedList(t("students.whyJoinUs2"))}
        </ParagraphText>
        <ParagraphText className="mt-[12px] ml-[6%] pr-[20%]">
            {t("students.whyJoinUs3")}
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
          {openPositions.map((position, index) => (
            <PositionCard
              key={index}
              title={t(position + ".title")}
              tags={t(position + ".tags")}
              description={t(position + ".description")}
              deadline={t(position + ".deadline")}
            />
          ))}
        </div>
      </div>
      <ParagraphText className="mt-[24px] mx-[24px] flex flex-row justify-center">
        Join our Discord or follow us on Instagram to get the latest updates on
        hiring and opportunity posting.
      </ParagraphText>

      <SectionHeader className="my-[36px] ml-[6%]">
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
      <SectionHeader className="mt-[10%] mb-[2%] ml-[6%]">Roles</SectionHeader>
      {roles.map((role) => (
        <div className="px-[3%] md:px-[5%]">
          <RolesCard children={rolesContent[role]} />
        </div>
      ))}
      <div className="bg-blueprint-gray-light w-full h-[450px] mt-[10%]  flex flex-col items-center justify-center px-[15%] ">
        <PageHeader>Stay in Touch</PageHeader>
        <ParagraphText className="text-center whitespace-pre-line mb-3 md:mb-6">
            {t('students.stayInTouch')}
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

const PositionCard = (props) => {
  return (
    <div className="shadow-md">
      <div className="py-[10%] px-[5%]">
        <ParagraphTitle className="text-blue-500font-medium font-poppins text-2xl font-medium uppercase">
          {props.title}
        </ParagraphTitle>
        <ParagraphText className="mt-[4%] mb-[6%] ">
          {props.description} <span className="text-blue-500">Read More</span>
        </ParagraphText>
        <ParagraphText className="font-semibold mb-[7%] ">
          Application Deadline: {props.deadline}
        </ParagraphText>
        <div className="py-[3%] border-blueprint-blue w-3/5 rounded-sm border-2 flex justify-center items-center">
          <button className="px-[3%] text-blueprint-blue font-poppins font-medium">
            View Details and Apply
          </button>
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

function RolesCard({ children, className }) {
  const { title, desc, hiring } = children;
  return (
    <div
      className={`${className} flex flex-col w-full gap-1 border-black shadow-lg`}
    >
      <ParagraphTitle className="mx-[8%] mt-[8%] mb-[3%]">
        {" "}
        {title}
      </ParagraphTitle>
      <div className="text-blueprint-black font-poppins text-[0.75rem] md:text-[1rem] leading-normal mx-[10%] mb-[10%] flex justify-between">
        <ParagraphText className="w-4/5 md:w-3/5">{arrayToUnorderedList(desc)}</ParagraphText>
        <ParagraphTitle
          className={`block max-md:hidden text-center ${
            hiring
              ? "text-blueprint-blue flex justify-center mb-[8%]"
              : "!text-blueprint-gray-dark mb-[8%] ml-[20%]"
          }`}
        >
          {hiring ? (
            <div className="py-[3%] px-[10%] ml-[25%] border-blueprint-blue rounded-sm border-2 flex justify-center items-center">
              <button className=" text-blueprint-blue font-poppins font-medium">
                View Details and Apply
              </button>
            </div>
          ) : (
            "Applications Closed"
          )}
        </ParagraphTitle>
      </div>
      <ParagraphTitle
        className={`hidden max-md:block text-center ${
          hiring
            ? "text-blueprint-blue flex flex-row justify-center items-center mb-[8%]"
            : "!text-blueprint-gray-dark mb-[8%]"
        }`}
      >
        {hiring ? (
          <div className="py-[3%] border-blueprint-blue mx-[20%] rounded-sm border-2">
            <button className="px-[3%] text-blueprint-blue font-poppins font-medium">
              View Details and Apply
            </button>
          </div>
        ) : (
          "Applications Closed"
        )}
      </ParagraphTitle>
    </div>
  );
}

function arrayToUnorderedList(array) {
  return (
    <ul className="list-disc">
      {array.map((str, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: str}}/>
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
