import React from "react";

const NonprofitsPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Body />
    </div>
  );
};

function Header() {
  return (
    <div className="flex flex-col w-full h-[500px] px-[5%] md:px-[20%] pt-[200px] bg-gray-300">
      <p className="text-black font-anek text-6xl font-semibold leading-normal">
        For Non-Profits
      </p>
      <p className="text-black font-poppins text-lg font-medium leading-relaxed tracking-wide uppercase ">
        We can turn your technological vision into reality - for free
      </p>
      <button className="flex justify-center items-center w-[200px] p-4 mt-6 rounded-md border-2 border-gray-800 text-gray-800 font-poppins font-bold leading-6 tracking-tight">
        Propose a Project
      </button>
    </div>
  );
}

function Body() {
  return (
    <div className="flex flex-col w-full px-[5%] pt-4 md:px-[20%] gap-2">
      <p className="text-black font-anek text-5xl font-medium leading-normal">
        Why collaborate with us?
      </p>
      <p className="w-[720px] text-gray-800 font-poppins text-base font-normal leading-6 tracking-tighter">
        Our members are highly dedicated and have great expertise in technology
        and design. By working with us, your organization will gain fresh
        perspectives of your business, increase community engagement with local
        students, and bring your vision for social good to live through
        innovative ways, free of charge.
      </p>
      <p className="text-black font-anek text-5xl font-medium leading-normal">
        Can your idea become a project?
      </p>
      <p className="w-[720px] text-gray-800 font-poppins text-base font-normal leading-6 tracking-tighter">
        We consider the following aspects when evaluating potential projects:
      </p>
      <div className="flex mt-5 gap-5">
        <div className="flex flex-col w-[420px]">
          <p className="text-blue-500 font-poppins text-lg font-medium leading-normal uppercase mb-3">
            Organizational Need
          </p>
          <p className="text-gray-800 font-poppins text-base font-normal leading-6 tracking-tighter">
            How does this product improve current business processes (%
            efficiency, $ saved etc.)? How does it align with long-term
            organizational vision? How urgently does this product need to be
            built to address existing concerns?
          </p>
        </div>
        <div className="flex flex-col w-[420px]">
          <p className="text-blue-500 font-poppins text-lg font-medium leading-normal uppercase mb-3">
            Community Impact
          </p>
          <p className="text-gray-800 font-poppins text-base font-normal leading-6 tracking-tighter">
            How does this product impact the people that the non-profit serves?
            Does the non-profit understand the challenges encountered by the
            community in need and how this solution aligns with solving these
            problems?
          </p>
        </div>
      </div>
      <div className="flex my-5 gap-5">
        <div className="flex flex-col w-[420px]">
          <p className="text-blue-500 font-poppins text-lg font-medium leading-normal uppercase mb-3">
            Technical Feasibility
          </p>
          <p className="text-gray-800 font-poppins text-base font-normal leading-6 tracking-tighter">
            Are the desired features commonly built-in software products or near
            the frontiers of what can be built? Some examples of solutions we
            can achieve include: Mobile apps, Websites, In-browser games,
            Information databases, & AI/machine learning solutions.
          </p>
        </div>
        <div className="flex flex-col w-[420px]">
          <p className="text-blue-500 font-poppins text-lg font-medium leading-normal uppercase mb-3">
            Project Scope
          </p>
          <p className="text-gray-800 font-poppins text-base font-normal leading-6 tracking-tighter">
            Can the product be realistically completed in a 4/8/12 month
            timeline? Are there any external factors such as user interviews and
            third-party services that could prolong the project?
          </p>
        </div>
      </div>
      <p className="text-black font-anek text-5xl font-medium leading-normal">
        Our Process
      </p>
    </div>
  );
}

export default NonprofitsPage;
