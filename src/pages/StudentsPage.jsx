import React, { useState } from "react";
import Footer from "../components/Footer";
// import { PROJECT_KEYS } from "../constants/projects";
import { useTranslation } from "react-i18next";

import {
  PageHeader,
  ParagraphText,
  ParagraphTitle,
  SectionHeader,
} from "../components/Common";
const StudentsPage = () => {
  // const phases = [
  //   "Application Open",
  //   "Info Session",
  //   "Applications Due",
  //   "Interviews",
  // ];
  const openPositions = [
    {
      title: "Project Manager (3)",
      tags: ["Immigration", "AI/Product"],
      description:
        "The Project Manager will be responsible for overseeing the successful completion of projects with our NPO partern.",
      deadline: "Jan 10th, 2024",
    },
    {
      title: "Product Designer (3)",
      tags: ["Health", "Machine Learning"],
      description:
        "Product Designers are responsible for delivering high-quality UI/UX work for the non-profit projects we build.",
      deadline: "Jan 10th, 2024",
    },
  ];

  const [activePhase, setActivePhase] = useState(0);
  const phasesDesc = [
    "Applying for a Position",
    "Working on a Project",
    "Mingling with Bleuprinters",
    "Exams and Semesters End",
  ];
  const phases = ["Begin", "Contribute", "Socialize", "Scheduling"];
  const content = (title) => ({
    title: title,
    text: {
      "Applying for a Position":
        "Application forms for new  members are posted at the start of each semester. Resume review and interview usually take 1-2 weeks. One can apply for multiple roles and choose a preferred role if they are qualified for more than one role. Project members from the previous semester do not need to apply if they are staying at the same team.",
      "Working on a Project":
        "Project members meet weekly to collaborate and discuss as a team. Product manager and tech lead make key decisions that move the team forward, while project manager keeps team members on the same page and ensure action items for design and development are completed in time.",
      "Mingling with Bleuprinters":
        "There will be one to two club-wise activities each semester for members to meet, have fun, and make new friends. We also encourage project teams to get together outside of project. ",
      "Exams and Semesters End":
        "Workload  will be adjusted during exam periods for members to prioritize their academic studying. At the end of the semester, project members will inform the leads whether they will continue on the project for the next semester. If a project is completed, we will set up celebration and showcase within our community. Members from the project can apply for roles in new projects afterwards. ",
    }[title],
  });
  const rolesContet = (title) => ({
    title: {
      "Applying for a Position":
        "Application forms for new  members are posted at the start of each semester. Resume review and interview usually take 1-2 weeks. One can apply for multiple roles and choose a preferred role if they are qualified for more than one role. Project members from the previous semester do not need to apply if they are staying at the same team.",
      "Working on a Project":
        "Project members meet weekly to collaborate and discuss as a team. Product manager and tech lead make key decisions that move the team forward, while project manager keeps team members on the same page and ensure action items for design and development are completed in time.",
      "Mingling with Bleuprinters":
        "There will be one to two club-wise activities each semester for members to meet, have fun, and make new friends. We also encourage project teams to get together outside of project. ",
      "Exams and Semesters End":
        "Workload  will be adjusted during exam periods for members to prioritize their academic studying. At the end of the semester, project members will inform the leads whether they will continue on the project for the next semester. If a project is completed, we will set up celebration and showcase within our community. Members from the project can apply for roles in new projects afterwards. ",
    },
  });
  const rolesContent = [
    {
      title: "Developer",
      desc: "",
    },
    {
      title: "Product Desinger",
    },
    {
      title: "Project Manager",
    },
    {
      title: "Tech Lead / Specialist",
    },
    {
      title: "Operational",
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="w-full h-[500px] px-[5%] md:px-[15%] pt-[200px] bg-gray-300">
        <PageHeader className="">Get Involved</PageHeader>
        <ParagraphTitle className="!text-black mt-[6px] mb-[12px]">
          Join us and make your impact as a student
        </ParagraphTitle>
        <PositionsButton>View Open Positions</PositionsButton>
      </div>

      <SectionHeader className="mt-[36px] ml-[6%]">Why Join us?</SectionHeader>

      <div className="ml-[12%] mt-[12px]">
        <ParagraphText className="">
          Blueprint is the right place for you if you are:
        </ParagraphText>
        <ParagraphText className="list-disc ml-[5%] mt-[12px]">
          <li>
            {" "}
            <span className="font-semibold">a post secondary-student</span>{" "}
            based in the greater vancouver area
          </li>
          <li>
            {" "}
            interested in helping nonprofit organizations with your{" "}
            <span className="font-semibold">passion for social good</span> and
            expertise in{" "}
            <span className="font-semibold">
              technology, design, and project management
            </span>
          </li>
        </ParagraphText>
        <ParagraphText className="mt-[12px]">
          Besides real-world experience, we also provide you with support on
          personal growth and opportunities to meet like-minded new friends!
        </ParagraphText>
      </div>

      <SectionHeader className="mt-[36px] ml-[6%]">
        Open Positions
      </SectionHeader>
      <div className="mb-[24px] px-[5%] md:pl-[15%]">
        <div className="flex flex-col lg:flex lg:flex-row gap-16">
          {openPositions.map((position, index) => (
            <PositionCard
              key={index}
              title={position.title}
              tags={position.tags}
              description={position.description}
              deadline={position.deadline}
            />
          ))}
        </div>
      </div>
      <ParagraphText className="mt-[24px] mx-[24px]">
        Join our Discord or follow us on Instagram to get the latest updates on
        hiring and opportunity posting.
      </ParagraphText>
      <SectionHeader className="my-[36px] ml-[6%]">
        A Typical Semester
      </SectionHeader>
      {/* <SectionHeader className="mt-16 mb-5">Our Process</SectionHeader> */}
      <div className="flex max-md:flex-col gap-16 mx-[12px]">
        <div className="flex flex-col w-full md:w-[420px] gap-2">
          {phases.map((phase, index) => (
            <div key={index}>
              <button
                className={`flex flex-col justify-center items-start w-full h-[100px] gap-2 px-[10%] rounded-md shadow-xl text-left transition duration-300 ease-in-out transform hover:shadow-2xl ${
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
                {content(phasesDesc[activePhase])}
              </ContentCard>
            </div>
          ))}
        </div>
        <ContentCard className="max-md:hidden pt-32">
          {content(phasesDesc[activePhase])}
        </ContentCard>
      </div>
      <SectionHeader className="my-[36px] ml-[24px]">Roles</SectionHeader>
      {phases.map((phase, index) => (
        <div key={index}>
          <RolesCard>{content(phasesDesc)}</RolesCard>
        </div>
      ))}
    </div>
  );
};

const PositionCard = (props) => {
  return (
    <div className="shadow-lg">
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
        <div className="py-[3%] border-blueprint-blue w-3/5 rounded-sm border-2 border-blueprint-blue flex justify-center items-center">
          <p className="px-[3%] text-blueprint-blue font-poppins font-medium">
            View Details and Apply
          </p>
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
  const { title, text } = children;
  return (
    <div className={`${className} flex flex-col w-full md:w-[420px] gap-1`}>
      <ParagraphTitle>{title}</ParagraphTitle>
      <ParagraphText>{text}</ParagraphText>
    </div>
  );
}

function PositionsButton({ className, children }) {
  return (
    <button
      className={`${className} border-gray-800 text-gray-800 flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl`}
    >
      {children}
    </button>
  );
}

function Heading({ children, className }) {
  return (
    <p className={`${className} font-anek text-4xl md:text-5xl font-semibold`}>
      {children}
    </p>
  );
}

function Subheading({ children, className }) {
  return (
    <p
      className={`${className} text-blue-500 font-poppins md:text-lg font-medium uppercase`}
    >
      {children}
    </p>
  );
}

function Body({ children, className }) {
  return (
    <p
      className={`${className} max-md:text-sm text-gray-800 font-poppins tracking-tighter`}
    >
      {children}
    </p>
  );
}

export default StudentsPage;
