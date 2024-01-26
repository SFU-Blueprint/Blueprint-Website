import React from "react";

const ProjectsPage = () => {
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
    <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
      <Heading className="my-5">Our Projects</Heading>
      <Subheading>Ongoing</Subheading>
      <div className="flex flex-col md:flex-row gap-6">
        {["Smart Assistant", "ML for Health", "Data Tracking"].map(
          (project, index) => (
            <div key={index} className="flex-grow">
              <ProjectCard>{content(project)}</ProjectCard>
            </div>
          )
        )}
      </div>
      <Body className="my-[10%] md:my-[8%] text-center !text-xl">More coming soon!</Body>
    </div>
  );
};

function ProjectCard({ children, className }) {
  const { title, tags, description, image } = children;
  return (
    <div className={`${className} shadow-md`}>
      <img src={image} className="w-full" alt={title} />
      <div className="px-3 pb-3">
        <div className="flex gap-3 -translate-y-1/2">
          {tags.map((tag, index) => (
            <Body
              key={index}
              className="bg-blue-500 text-white px-3 rounded-md shadow-md"
            >
              {tag}
            </Body>
          ))}
        </div>
        <Subheading>{title} → </Subheading>
        <Body className="w-2/3">{description}</Body>
      </div>
    </div>
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
      className={`${className} font-poppins text-xl md:text-2xl font-medium uppercase`}
    >
      {children}
    </p>
  );
}

function Body({ children, className }) {
  return (
    <p className={`${className} max-md:text-sm font-poppins`}>{children}</p>
  );
}

export default ProjectsPage;
