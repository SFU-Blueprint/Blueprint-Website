import React, { useState } from "react";
import {
  ParagraphTitle,
  PageHeader,
  SectionHeader,
  ParagraphText,
} from "../components/Common";

const NonprofitsPage = () => {
  const [activePhase, setActivePhase] = useState(0);
  const phases = [
    "Initial Consulting",
    "Product Research and Scoping",
    "Building the Minimum Viable Product",
    "User Testing",
    "Product Polish and Hands Off",
  ];
  const content = (title) => ({
    title: title,
    text: {
      "Organizational Need":
        "How does this product improve current business processes (% efficiency, $ saved etc.)? How does it align with long-term organizational vision? How urgently does this product need to be built to address existing concerns?",
      "Community Impact":
        "How does this product impact the people that the non-profit serves? Does the non-profit understand the challenges encountered by the community in need and how this solution aligns with solving these problems?",
      "Technical Feasibility":
        "Are the desired features commonly built-in software products or near the frontiers of what can be built? Some examples of solutions we can achieve include: Mobile apps, Websites, In-browser games, Information databases, & AI/machine learning solutions.",
      "Project Scope":
        "Can the product be realistically completed in a 4/8/12 month timeline? Are there any external factors such as user interviews and third-party services that could prolong the project?",
      "Initial Consulting":
        "After initial outreach, our executive team will meet with the NPO to learn about their request. After the first meeting, our VP scoping will consult members with expertise to understand how Blueprint can take on the project and get back to the NPO with description of possible projects.\n\n Once we have agreed on the high-level direction of the project, Blueprint will assemble the project team and start the project in the next semester. ",
      "Product Research and Scoping":
        "To kickstart the collaboration process, our teams will work closely with the nonprofit to gain a greater understanding of project needs and priorities as well as scope out the minimum viable product (MVP).\n\n From this point, the product manager will curate a statement of work (SOW) that defines project scope capturing the discussion with the nonprofit.",
      "Building the Minimum Viable Product":
        "This third phase is where the magic begins! Our teams work hard to get the MVP up and running. Throughout this phase, we will stay in touch with the nonprofit to ensure smooth development and consistent alignment.",
      "User Testing":
        "Once the MVP is built and released to an initial group of end users, we conduct rigorous testing to ensure no critical problems remain. Additionally, we will take note of any bugs, UX issues, and feature requests during this time.",
      "Product Polish and Hands Off":
        "This phase involves intensive development and design work. Our team will execute improvements on the product based on feedback received from the user testing phase.\n\n The objective of this final phase is to ensure the quality and completeness of the finished product. Upon product completion, our team will meet with the nonprofit to walk through maintenance best practices before hand off.",
    }[title],
  });

  return (
    <div className="flex flex-col">
      <div className="w-full bg-blueprint-gray-dark px-5 pt-[116px] pb-14 mb-9 md:px-[120px] md:pt-[174px] md:pb-[88px] md:mb-20">
        <PageHeader className="max-md:mb-[6px]">For Non-Profits</PageHeader>
        <ParagraphTitle className="mb-3 md:mb-10 !text-blueprint-black">
          We can turn your technological vision into reality - for free
        </ParagraphTitle>
        <ProposeButton />
      </div>
      <div className="w-full px-5 md:px-[120px]">
        <SectionHeader id="Why-choose-us" className="mb-3 md:mb-6">
          Why collaborate with us?
        </SectionHeader>
        <ParagraphText className="mb-6 md:mb-16 max-md:ml-6">
          Our members are highly dedicated and have great expertise in
          technology and design. By working with us, your organization will gain
          fresh perspectives of your business, increase community engagement
          with local students, and bring your vision for social good to live
          through innovative ways, free of charge.
        </ParagraphText>
        <SectionHeader id="Our-criteria" className="mb-3 md:mb-6">
          Can your idea become a project?
        </SectionHeader>
        <ParagraphText className="mb-3 md:mb-6 max-md:ml-6">
          We consider the following aspects when evaluating potential projects:
        </ParagraphText>
        <div className="flex max-md:flex-col gap-3 mb-3 md:gap-[108px] md:mb-12 max-md:ml-6">
          <ContentCard>{content("Organizational Need")}</ContentCard>
          <ContentCard>{content("Technical Feasibility")}</ContentCard>
        </div>
        <div className="flex max-md:flex-col gap-3 mb-3 md:gap-[108px] max-md:ml-6">
          <ContentCard>{content("Community Impact")}</ContentCard>
          <ContentCard>{content("Project Scope")}</ContentCard>
        </div>
        <SectionHeader id="Our-process" className="mt-6 md:mt-16 mb-3 md:mb-6">
          Our Process
        </SectionHeader>
        <div className="flex max-md:flex-col md:gap-[108px]">
          <div className="flex flex-col w-full md:w-[420px] gap-3">
            {phases.map((phase, index) => (
              <div key={index}>
                {PhaseButton(index, activePhase, setActivePhase, phase)}
                <ContentCard
                  className={`${
                    index !== activePhase && "hidden"
                  } md:hidden w-full py-6 max-md:ml-6`}
                >
                  {content(phases[activePhase])}
                </ContentCard>
              </div>
            ))}
          </div>
          <ContentCard className="max-md:hidden pt-36">
            {content(phases[activePhase])}
          </ContentCard>
        </div>
      </div>
      <div className="flex flex-col bg-blueprint-gray-light items-center justify-center w-full my-9 md:mb-20">
        <SectionHeader id="Proposal" className="text-center my-3 md:my-6">
          Send your ideas to us now
        </SectionHeader>
        <ParagraphText className="text-center whitespace-pre-line mb-3 md:mb-6">
          {
            "Interested in working with us?\n Submit your initial project proposal below!\n We will get back to you shortly."
          }
        </ParagraphText>
        <ProposeButton className="border-blueprint-blue text-blueprint-blue mb-3 md:mb-6" />
        <ParagraphText className="text-center mb-3 md:mb-6">
          Have a question? Feel free to shoot us an email at{" "}
          <a
            href="mailto:sfublueprint@gmail.com"
            className="text-blueprint-blue hover:underline hover:font-bold"
          >
            sfublueprint@gmail.com
          </a>
          .
        </ParagraphText>
      </div>
    </div>
  );
};

function PhaseButton(index, activePhase, setActivePhase, phase) {
  return (
    <button
      className={`flex flex-col justify-center items-start w-full h-[72px] md:h-[105px] px-[10%] rounded-sm shadow-md text-left transition duration-300 ease-in-out transform hover:shadow-2xl ${
        index === activePhase && "bg-blueprint-blue"
      }`}
      onClick={() => setActivePhase(index)}
    >
      <ParagraphTitle
        className={`${
          index === activePhase && "text-blueprint-white"
        } mb-3`}
      >
        Phase {index + 1}
      </ParagraphTitle>
      <ParagraphText
        className={`${
          index === activePhase && "text-blueprint-white"
        }`}
      >
        {phase}
      </ParagraphText>
    </button>
  );
}

function ContentCard({ children, className }) {
  const { title, text } = children;
  return (
    <div className={`${className} flex flex-col w-full md:w-[420px] gap-3`}>
      <ParagraphTitle>{title}</ParagraphTitle>
      <ParagraphText>{text}</ParagraphText>
    </div>
  );
}

function ProposeButton({ className }) {
  return (
    <button
      className={`${className} text-blueprint-black border-blueprint-black flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl`}
    >
      Propose a Project
    </button>
  );
}

export default NonprofitsPage;
