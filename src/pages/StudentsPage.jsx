import React from "react";
const StudentsPage = () => {
  const phases = [
    "Application Open",
    "Info Session",
    "Applications Due",
    "Interviews",
  ];
  const content = [
      {
        title:"Project Manager (3)",
        tags: ["Immigration", "AI/Product"],
        description: "The Project Manager will be responsible for overseeing the successful completion of projects with our NPO partern.",
        deadline: "Jan 10th, 2024",
      },
      {
        title:"Product Designer (3)",
        tags: ["Health", "Machine Learning"],
        description: "Product Designers are responsible for delivering high-quality UI/UX work for the non-profit projects we build.",
        deadline: "Jan 10th, 2024",
      }
  
  ];

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

      <Heading className="mt-16 mb-10 px-[5%] md:px-[15%]">
        Why Join us?
      </Heading>

      <div className="grid grid-cols-3 w-full px-[2%] md:px-[15%]">
        {/* left */}
        <div className="col-span-2">
          <Body className="">Blueprint is the right place for you if you are:</Body>
          <ul className="list-disc ml-[10%] mt-[5%] mb-[5%]">
            <li> <span className="font-semibold">a post secondary-student</span> based in the greater vancouver area</li>
            <li> interested in helping nonprofit organizations with your <span className="font-semibold">passion for social good</span> and expertise in <span className="font-semibold">technology, design, and project management</span></li>
          
          </ul>
          <Body className="">Besides real-world experience, we also provide you with support on personal growth and opportunities to meet like-minded new friends!</Body>
        </div>
        {/* right */}
        <div className="col-span-1 justify-self-center">
          <img className="h-[80%]" src="Group 3672.png"></img>
        </div>
      </div>

      <Heading className="mt-16 mb-10 px-[5%] md:px-[15%] text-4xl">
        Open Positions
      </Heading>
      <div className="mb-10 px-[5%] md:pl-[15%]">
        <div className="flex flex-col lg:flex lg:flex-row gap-16">

          {content.map(
            (position, index) => (
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
    </div>
  );
};

const PositionCard = (props) => {
  return (
    <div className="shadow-md w-2/6">
      <div className="py-[10%] px-[5%]">
        <h1 className="text-blue-500font-medium font-poppins text-2xl font-medium uppercase">{props.title}</h1>
        <Body className="mt-[4%] mb-[6%] ">{props.description} <span className="text-blue-500">Read More</span></Body>
        <Body className="font-semibold mb-[7%] ">Application Deadline: {props.deadline}</Body>
        <div className="py-[3%] border-blue-600 w-3/5 rounded-md border-2 border-blue-500 flex justify-center items-center">
          <p className="px-[3%] text-blue-600 font-poppins font-medium">View Details and Apply</p>
        </div>
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
