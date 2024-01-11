import React, { useState } from "react";

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
      <div className="w-full h-[500px] px-[5%] md:px-[15%] pt-[200px] bg-gray-300">
        <Heading className="!text-6xl">For Non-Profits</Heading>
        <Subheading className="!text-black !tracking-wide leading-relaxed uppercase mt-2 mb-4">
          We can turn your technological vision into reality - for free
        </Subheading>
        <ProposeButton className="!border-gray-800 !text-gray-800" />
      </div>
      <div className="w-full px-[5%] md:px-[15%]">
        <Heading className="mt-8 mb-5">Why collaborate with us?</Heading>
        <Body className="w-full md:w-[720px]">
          Our members are highly dedicated and have great expertise in
          technology and design. By working with us, your organization will gain
          fresh perspectives of your business, increase community engagement
          with local students, and bring your vision for social good to live
          through innovative ways, free of charge.
        </Body>
        <Heading className="mt-8 mb-5">Can your idea become a project?</Heading>
        <Body>
          We consider the following aspects when evaluating potential projects:
        </Body>
        <div className="flex max-md:flex-col gap-8 mb-8 md:gap-16 md:mb-10 mt-5">
          <ContentCard>{content("Organizational Need")}</ContentCard>
          <ContentCard>{content("Technical Feasibility")}</ContentCard>
        </div>
        <div className="flex max-md:flex-col gap-8 mb-8 md:gap-16">
          <ContentCard>{content("Community Impact")}</ContentCard>
          <ContentCard>{content("Project Scope")}</ContentCard>
        </div>
        <Heading className="mt-16 mb-5">Our Process</Heading>
        <div className="flex max-md:flex-col gap-16">
          <div className="flex flex-col w-full md:w-[420px] gap-2">
            {phases.map((phase, index) => (
              <div key={index}>
                <button
                  className={`flex flex-col justify-center items-start w-full h-[100px] gap-2 px-[10%] rounded-md shadow-md text-left transition duration-300 ease-in-out transform hover:shadow-2xl ${
                    index === activePhase && "bg-blue-500"
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <Subheading
                    className={`${
                      index === activePhase && "text-white"
                    } !text-2xl`}
                  >
                    Phase {index + 1}
                  </Subheading>
                  <Body
                    className={`${
                      index === activePhase && "text-white"
                    } !tracking-normal`}
                  >
                    {phase}
                  </Body>
                </button>
                <ContentCard
                  className={`${
                    index !== activePhase && "hidden"
                  } md:hidden w-full py-8`}
                >
                  {content(phases[activePhase])}
                </ContentCard>
              </div>
            ))}
          </div>
          <ContentCard className="max-md:hidden pt-32">
            {content(phases[activePhase])}
          </ContentCard>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[500px] bg-gray-200 mt-16  ">
        <Heading className="my-5 text-center">Send your ideas to us now</Heading>
        <Body className="!tracking-wide text-center whitespace-pre-line">
          {
            "Interested in working with us? Submit your initial project proposal below!\n We will get back to you shortly."
          }
        </Body>
        <ProposeButton className="my-5 border-blue-500 text-blue-500" />
        <Body className="my-10 !tracking-wide text-center">
          Have a question? Feel free to shoot us an email at{" "}
          <a
            href="mailto:sfublueprint@gmail.com"
            className="text-blue-500 hover:underline hover:font-bold"
          >
            sfublueprint@gmail.com
          </a>
          .
        </Body>
      </div>
    </div>
  );
};

function ContentCard({ children, className }) {
  const { title, text } = children;
  return (
    <div className={`${className} flex flex-col w-full md:w-[420px] gap-1`}>
      <Subheading>{title}</Subheading>
      <Body>{text}</Body>
    </div>
  );
}

function ProposeButton({ className }) {
  return (
    <button
      className={`${className} flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl`}
    >
      Propose a Project
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
    <p className={`${className} max-md:text-sm text-gray-800 font-poppins tracking-tighter`}>
      {children}
    </p>
  );
}

export default NonprofitsPage;
