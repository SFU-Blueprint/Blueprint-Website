import React from "react";
import { useTranslation } from "react-i18next";
import {
  ParagraphTitle,
  Landing,
  PageHeader,
  SectionHeader,
  ParagraphText,
} from "../components/Common";
import ProjectCard from "../components/projects-page/ProjectCard";
import { Event1, Event2, Event3 } from "../constants/Event";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  //Favorite projects for home page
  const projects = ["smartAssistant", "aiForHealth", "dataTracking"];

  const backgroundStyle = {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("grid.png")',
    filter: "brightness(95%)",
    backgroundSize: "3vmin",
    backgroundRepeat: "repeat repeat",
    maskImage:
      "radial-gradient(ellipse at right 30% top 50%, black 1%, transparent 50%)",
  };

  return (
    <div className="flex flex-col pt-10 gap-4">
      <div className="mb-[100px] mx-12 px-3 md:px-[15%] ">
        <Landing className="!font-semibold md:w-[600px]">
          {t("home.header.title")}
        </Landing>
        <ParagraphText className="md:w-[400px] mb-3 md:mb-6">
          {t("home.header.text")}
        </ParagraphText>
        <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
          {t("home.header.button")}
        </button>
      </div>
      <div className="mt-60 px-3 md:px-[15%] ">
        <SectionHeader>{t("home.aboutUs.title")}</SectionHeader>
        <ParagraphText className="md:w-[500px] mb-3 md:mb-6">
          {t("home.aboutUs.text")}
        </ParagraphText>
        <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
          {t("home.aboutUs.button")}
        </button>
      </div>

      <div className="px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 bg-zinc-100 px-3 md:px-[15%] ">
        <SectionHeader className="mb-10  ">Get Involved</SectionHeader>
        <div className="flex max-md:flex-col justify-between gap-12 mb-16 ">
          <div className="flex flex-col justify-start h-48 gap-2">
            <ParagraphTitle>STUDENTS</ParagraphTitle>
            <ParagraphText>
              Contribute to building technology for social good. Make new
              friends and harness your professional skillsets along the away!
            </ParagraphText>
            <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
              Join us
            </button>
          </div>

          <div className="flex flex-col justify-start h-48 gap-2">
            <ParagraphTitle>NON-PROFITS</ParagraphTitle>
            <ParagraphText>
              {" "}
              Collaborate with us to advance your mission for public welfare.
              Tackle your challenges with fresh and innovative solutions!
            </ParagraphText>
            <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
              Collaborate with Us
            </button>
          </div>

          <div className="flex flex-col justify-start h-48 gap-2">
            <ParagraphTitle>SPONSORS</ParagraphTitle>
            <ParagraphText>
              Support our operation to become part of the changemakers! Elevate
              your brand while driving meaningful social impact.
            </ParagraphText>
            <button className="text-blueprint-blue border-blueprint-blue flex justify-center items-center w-[200px] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl">
              Sponsor Us
            </button>
          </div>
        </div>
      </div>

      <div>
        <div style={backgroundStyle}></div>
        <div className="flex flex-col px-3 md:px-[15%] pt-10 gap-4">
          <SectionHeader className="md:self-center mb-5">
            Our Projects
          </SectionHeader>
          {/* <SectionHeader>Ongoing</SectionHeader> */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-9">
            {projects.map((projectKey, index) => (
              <div key={index}>
                <ProjectCard project={projectKey} />
              </div>
            ))}
          </div>
          <ParagraphText className="my-[10%] md:my-[8%] text-center !text-xl">
            More coming soon!
          </ParagraphText>
        </div>
      </div>

      {/* Desktop Photos */}
      <div className="hidden md:block px-3 md:px-[15%] mb-16">
        <ParagraphTitle>STAY UPDATED WITH OUR EVENTS</ParagraphTitle>
        <div className="flex max-md:flex-col justify-between mt-8 ">
          {Event1.map((items, key) => (
            <div className="relative block group" key={key}>
              <img
                class="absolute h-48 inset-0 object-cover group-hover:opacity-50"
                src={items.img}
                // style={{ "min-width": "12rem" }}
                alt=""
              />
              <div class="relative ">
                <div class="mt-40">
                  {/* Hidden content */}
                  <div
                    class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                  >
                    <div class="pr-20">
                      <p class="text-sm text-start text-black ">{items.date}</p>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ParagraphText className="mt-10">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/sfublueprint/"
            className="underline"
          >
            Instagram
          </a>
        </ParagraphText>
      </div>

      {/* Mobile photos */}
      <div className="block md:hidden flex flex-col align-center content-center justify-center justify-items-center items-center">
        <div>
          <ParagraphTitle>STAY UPDATED WITH OUR EVENTS</ParagraphTitle>

          <div className="relative block group">
            <img
              class="absolute inset-0 object-cover group-hover:opacity-50"
              src={Event3.img}
              // style={{ "min-width": "12rem" }}
              alt=""
            />
            <div class="relative ">
              <div class="mt-10 mb-40">
                {/* Hidden content */}
                <div
                  class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                >
                  <div class="p-1">
                    <p class="text-sm text-start text-black">{Event3.date}</p>
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between space-between content-between px-7 my-5">
          {Event2.map((items, key) => (
            <div className="relative block group " key={key}>
              <img
                class="absolute h-32 w-48 inset-0 object-cover group-hover:opacity-50"
                src={items.img}
                alt=""
              />
              <div class="relative ">
                <div class="mt-20">
                  {/* Hidden content */}
                  <div
                    class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                  >
                    <div class="p-1">
                      <p class="text-sm text-start text-black">{items.date}</p>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ParagraphText className="mt-5">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/sfublueprint/"
            className="underline"
          >
            Instagram
          </a>
        </ParagraphText>
      </div>

      {/* <div className="px-0.5 mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default HomePage;
