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
        "This phase involves intensive development and design work. Our team will execute improvements on the product based on feedback received from the user testing phase.\n\n The objective of this final phase is to ensure the quality and completeness of the finished product. Upon product completion, our team will meet with the nonprofit to walk through maintenance best practices before hand off."
    }[title],
  });
  
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-[500px] px-[5%] md:px-[25%] pt-[200px] bg-gray-300">
        <HeaderText className="text-6xl font-semibold">
          For Non-Profits
        </HeaderText>
        <p className="text-black font-poppins text-lg font-medium leading-relaxed tracking-wide uppercase my-2">
          We can turn your technological vision into reality - for free
        </p>
        <button className="flex justify-center items-center w-[200px] p-4 mt-6 rounded-md border-2 border-gray-800 text-gray-800 font-poppins font-bold tracking-tight">
          Propose a Project
        </button>
      </div>
      <div className="w-full px-[5%] md:px-[25%]">
        <HeaderText className="mb-5 pt-5">Why collaborate with us?</HeaderText>
        <p className="w-[720px] text-gray-800 font-poppins text-base font-normal tracking-tighter mb-5">
          Our members are highly dedicated and have great expertise in
          technology and design. By working with us, your organization will gain
          fresh perspectives of your business, increase community engagement
          with local students, and bring your vision for social good to live
          through innovative ways, free of charge.
        </p>
        <HeaderText className="mb-5 pt-5">
          Can your idea become a project?
        </HeaderText>
        <p className="w-[720px] text-gray-800 font-poppins text-base font-normal tracking-tighter">
          We consider the following aspects when evaluating potential projects:
        </p>
        <div className="flex gap-16 my-5">
          <ContentCard>{content("Organizational Need")}</ContentCard>
          <ContentCard>{content("Technical Feasibility")}</ContentCard>
        </div>
        <div className="flex gap-16 my-5">
          <ContentCard>{content("Community Impact")}</ContentCard>
          <ContentCard>{content("Project Scope")}</ContentCard>
        </div>
        <HeaderText className="mb-5 pt-5">Our Process</HeaderText>
        <div className="flex gap-16 my-5">
          <div className="flex flex-col w-[420px] gap-2">
            {phases.map((phase, index) => (
              <button
                key={index}
                className={`flex flex-col justify-center items-start w-full h-[100px] gap-2 pl-10 rounded-md shadow-md transition duration-300 ease-in-out transform hover:shadow-2xl ${index === activePhase ? 'bg-blue-500' : 'bg-white'}`}
                onClick={() => setActivePhase(index)}
              >
                <p className={`${index === activePhase ? 'text-white' : 'text-blue-500'} font-poppins text-2xl font-medium uppercase`}>
                  Phase {index + 1}
                </p>
                <p className={`${index === activePhase ? 'text-white' : 'text-black'} font-poppins text-base font-normal`}>
                  {phase}
                </p>
              </button>
            ))}
          </div>
          <div className="pt-32">
            <ContentCard>{content(phases[activePhase])}</ContentCard>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] px-[5%] md:px-[25%] pt-[200px] bg-gray-300">
        <HeaderText className="text-6xl font-semibold">
          For Non-Profits
        </HeaderText>
        <p className="text-black font-poppins text-lg font-medium leading-relaxed tracking-wide uppercase my-2">
          We can turn your technological vision into reality - for free
        </p>
        <button className="flex justify-center items-center w-[200px] p-4 mt-6 rounded-md border-2 border-gray-800 text-gray-800 font-poppins font-bold tracking-tight">
          Propose a Project
        </button>
      </div>
    </div>
  );
};

function ContentCard({ children }) {
  const { title, text } = children;
  return (
    <div className="flex flex-col w-[420px]">
      <p className="text-blue-500 font-poppins text-lg font-medium uppercase mb-1">
        {title}
      </p>
      <p className="text-gray-800 font-poppins text-base font-normal tracking-tighter">
        {text}
      </p>
    </div>
  );
}

function HeaderText({ children, className }) {
  return (
    <p className={`${className} text-black font-anek text-5xl font-medium`}>
      {children}
    </p>
  );
}

export default NonprofitsPage;
