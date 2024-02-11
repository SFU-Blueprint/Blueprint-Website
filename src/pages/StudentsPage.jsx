import React from "react";
import Footer from "../components/Footer"
const StudentsPage = () => {
  const phases = [
    "Application Open",
    "Info Session",
    "Applications Due",
    "Interviews",
  ];
  const content = (title) => ({
    title: title,
    ...{
      "Smart Assistant": {
        tags: ["Immigration", "AI/Product"],
        description: "Aiding New Comers to Canada",
        image: "placeholder.png",
      },
      "ML for Health": {
        tags: ["Health", "Machine Learning"],
        description: "Physio Therapy Outside the Clinic",
        image: "placeholder.png",
      },
      "Data Tracking": {
        tags: ["Sustainability", "Data"],
        description: "Volunteer Hour Tracking Platform",
        image: "placeholder.png",
      },
    }[title],
  });

  return (
    <div className="flex flex-col">
      <div className="w-full h-[500px] px-[5%] md:px-[15%] pt-[200px] bg-gray-300">
        <Heading className="!text-6xl">Get Involved</Heading>
        <Subheading className="!text-black !tracking-wide leading-relaxed uppercase mt-2 mb-4">
          Join us and make your impact as a student
        </Subheading>
        <PositionsButton>
          View Open Positions
        </PositionsButton>
      </div>
      <div className="w-2/3 px-[5%] md:pl-[15%] md:pr-[10%]">
        <Heading className="mt-16 mb-10">
          We are a community of students with passion for tech and social good.
        </Heading>
        <div className="flex pl-[1/30] pr-[1/15] justify-between mb-10">
          <Body className="flex flex-col w-2/5 gap-4">
            <p>Blueprint is the right place for you if you are:</p>
            <ul className="list-disc ml-6 gap-2">
              <li>
                a post-secondary student based in the greater Vancouver area
              </li>
              <li>
                interested in helping non-profit organizations with your passion
                for social good and expertise in technology, design, and project
                management
              </li>
            </ul>
          </Body>
          <div className="px-40 bg-gray-100"></div>
        </div>
        <div className="flex pl-[1/30] pr-[1/15] justify-between mb-10">
          <div className="flex flex-col w-2/5 gap-4">
            <Subheading>What's in it for you</Subheading>
            <Body>
              Besides real-world project experience, we also provide you with
              support on your personal growth and opportunities to meet
              like-minded new friends!
            </Body>
          </div>
          <div className="px-40 bg-gray-100"></div>
        </div>
        <Heading className="text-center py-10">Our Application Process</Heading>
        <div className="flex justify-center mb-10">
          <div className="flex flex-col w-full md:w-[420px] gap-5">
            {phases.map((phase, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-start w-full h-[100px] gap-2 px-[10%] rounded-md shadow-md border-blue-400 border-2">
                  <Subheading className="!text-2xl">
                    Phase {index + 1}
                  </Subheading>
                  <Body className="tracking-normal">{phase}</Body>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Heading className="text-center py-10">
          Projects Students Have Done
        </Heading>
        <div className="flex flex-col px-3 gap-4">
          <div className="flex flex-col md:flex-row gap-6">
            {["Smart Assistant", "ML for Health", "Data Tracking"].map(
              (project, index) => (
                <div key={index} className="flex-grow">
                  <ProjectCard>{content(project)}</ProjectCard>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[15%] justify-center w-full h-[500px] bg-gray-200 mt-16  ">
        <Heading className="my-5">
          Interest in joining us?
        </Heading>
        <Body className="!tracking-wide whitespace-pre-line">
          {
            "Fill out our Application form and we will get back with you as soon as possible!\n \n For questions, email us here: email@email.com"
          }
        </Body>
      <PositionsButton className="mt-10">Application Form</PositionsButton>
      </div>
    </div>
  );
};

function ProjectCard({ children, className }) {
  const { title, tags, description, image } = children;
  return (
    <div className={`${className} shadow-md`}>
      <div src={image} className="w-full px-[50%] h-[120px] bg-gray-100" />
      <div className="px-3 pb-3">
        <div className="flex gap-3 -translate-y-1/2">
          {tags.map((tag, index) => (
            <Body
              key={index}
              className="bg-blue-500 text-white px-3 rounded-md shadow-md text-sm"
            >
              {tag}
            </Body>
          ))}
        </div>
        <Subheading>{title} → </Subheading>
        <Body>{description}</Body>
      </div>
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
