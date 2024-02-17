import React, { useState, useRef } from "react";
// import Footer from "../components/Footer";
// import { PROJECT_KEYS } from "../constants/projects";
import { useTranslation, Trans } from "react-i18next";

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
        "The Project Manager will be responsible for overseeing the successful completion of projects with our NPO partner.",
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
    "Mingling with Blueprinters",
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
      "Mingling with Blueprinters":
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
      desc: (
        <ul className="list-disc">
          <li>
            Project Developers are responsible for the development of the
            project, bringing designs and product specifications to life.
          </li>
          <li>
            Depending on the scope of the project, each team can have 5-8
            developers.
          </li>
          <li>
            They work closely with the project lead, the product manager, and
            designers to deliver top quality code!{" "}
          </li>
        </ul>
      ),
      hiring: false,
    },
    {
      title: "Product Designer",
      desc: (
        <ul className="list-disc">
          <li>
            Product Designers are responsible for delivering high-quality UI/UX
            work for the non-profit projects we build
          </li>
          <li>There are 2-3 designers in each team.</li>
          <li>
            They work closely with various stakeholders including the product
            manager, the developers on their team, and other designers.
          </li>
        </ul>
      ),
      hiring: false,
    },
    {
      title: "Project Manager",
      desc: (
        <ul class="list-disc">
          <li>
            The Project Manager of the team will be responsible for overseeing
            the successful completion of projects with our NPO partner.
          </li>
          <li>
            This includes coordinating project activities, managing timelines
            and resources, and ensuring that project goals align with the needs
            of the NPO.
          </li>
        </ul>
      ),
      hiring: true,
    },
    {
      title: "Tech Lead / Specialist",
      desc: (
        <ul className="list-disc">
          <li>
            The Tech Lead for the team is responsible for leading the team and
            driving the technical direction of the project.
          </li>
          <li>
            They provide support and mentorship to developers on the team and
            work with the product manager to run the team effectively
          </li>
        </ul>
      ),
      hiring: false,
    },
    {
      title: "Operational",
      desc: (
        <ul className="list-disc">
          <li>
            Operational roles such as executives and content specialist are
            responsible for sustaining Blueprint as a community.
          </li>
          <li>
            They work to recruit new members, plan activities for members,
            expand outreach to sponsors and NPOs, and provide extra support to
            projects teams.
          </li>
        </ul>
      ),
      hiring: false,
    },
  ];

  const { t } = useTranslation();

  const positionsRef = useRef(null);
  // Scroll to a specific section
  const navigateToAnchor = (page, section) => {
    console.log("sfgdfgfgddfg");
    // Construct the URL with the page path and the anchor point
    const url = `/${page}#${section}`;
    window.location.href = url;
  };

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
          Blueprint is the right place for you if you are:
        </ParagraphText>
        <ParagraphText className="list-disc mt-[12px] ml-[10%] pr-[20%]">
          <li>
            {" "}
            <span className="font-semibold">a post secondary-student</span>{" "}
            based in the greater Vancouver area
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
        <ParagraphText className="mt-[12px] ml-[6%] pr-[20%]">
          Besides real-world experience, we also provide you with support on
          personal growth and opportunities to meet like-minded new friends!
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
              title={position.title}
              tags={position.tags}
              description={position.description}
              deadline={position.deadline}
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
                {content(phasesDesc[activePhase])}
              </ContentCard>
            </div>
          ))}
        </div>
        <ContentCard className="max-md:hidden pt-32">
          {content(phasesDesc[activePhase])}
        </ContentCard>
      </div>
      <SectionHeader className="mt-[10%] mb-[2%] ml-[6%]">Roles</SectionHeader>
      {rolesContent.map((pos, index) => (
        <div className="px-[3%] md:px-[5%]" key={index}>
          <RolesCard children={pos}></RolesCard>
        </div>
      ))}
      <div className="bg-blueprint-gray-light w-full h-[450px] mt-[10%]  flex flex-col items-center justify-center px-[15%] ">
        <PageHeader>Stay in Touch</PageHeader>
        <ParagraphText className=" mb-[12px] text-center mt-[3%]">
          Are you a student interested in Blueprint, and would like to stay up
          to date with announcements, position openings, or just interact with
          our community?
        </ParagraphText>
        <PositionsButton className="!border-blueprint-blue !text-blueprint-blue font-semibold rounded-sm mt-[4%]">
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
        <ParagraphText className="w-4/5 md:w-3/5">{desc}</ParagraphText>
        <ParagraphTitle
          className={`block max-md:hidden text-center ${
            hiring
              ? "text-blueprint-blue flex justify-center mb-[8%]"
              : "!text-blueprint-gray-dark mb-[8%] ml-[20%]"
          }`}
        >
          {hiring ? (
            <div className="py-[3%] px-[10%] ml-[25%] border-blueprint-blue rounded-sm border-2 border-blueprint-blue flex justify-center items-center">
              <p className=" text-blueprint-blue font-poppins font-medium">
                View Details and Apply
              </p>
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
          <div className="py-[3%] border-blueprint-blue mx-[20%] rounded-sm border-2 border-blueprint-blue">
            <p className="px-[3%] text-blueprint-blue font-poppins font-medium">
              View Details and Apply
            </p>
          </div>
        ) : (
          "Applications Closed"
        )}
      </ParagraphTitle>
    </div>
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
