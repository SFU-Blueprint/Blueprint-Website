import React, { useState, useEffect, useCallback } from "react";
import GearSection from "../components/about-page/Gears/GearSection";
import MobileGearSection from "../components/about-page/Gears/MobileGearSection";
import { Alumni } from "../constants/alumni";
import {
  Executives,
  ProjectLeads,
  Designers,
  Developers,
} from "../constants/Team";
import CardGrid from "../components/about-page/CardGrid";

import {
  Annotation,
  PageHeader,
  ParagraphText,
  ParagraphTitle,
  SectionHeader,
} from "../components/Common";

import AlumniGrid from "../components/about-page/AlumniGrid";
import ScrollToHashElement from "../components/Shared/ScrollToHash";


const AboutPage = () => {
  const [gearSectionHtml, setGearSectionHtml] = useState({
    content: <GearSection></GearSection>,
  });

  //Memoize the resize function (cache it) so we don't recreate the function when the effects use it
  const resize = useCallback(() => {
    const windowWidth = window.innerWidth;
    const GEAR_SECTION_WIDTH_BREAKPOINT = 1000;

    setGearSectionHtml({
      content:
        windowWidth > GEAR_SECTION_WIDTH_BREAKPOINT ? (
          <GearSection></GearSection>
        ) : (
          <MobileGearSection></MobileGearSection>
        ),
    });
  }, [setGearSectionHtml]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    // Initial resize when component mounts
    resize();
  }, [resize]);

  return (
    <div className="pb-48">
      {/* About us */}
      <div className="relative">
        <img
          className="h-46 w-full md:h-80 md:w-full"
          src="/src/assets/images/testImage.jpg"
          alt="Your"
        />
        <div className="absolute bottom-5 md:my-10">
          <PageHeader className="font-bold my-2 ml-10 md:ml-16 md:text-6xl xl:ml-36 ">
            About Us
          </PageHeader>
          <ParagraphTitle className="!text-blueprint-black ml-10 md:ml-16 xl:ml-36">
            TECH-DRIVEN ADVOCATED FOR SOCIAL GOOD
          </ParagraphTitle>
        </div>
      </div>

      <div></div>
      <SectionHeader className="mt-[4%] leading-relaxed mr-10 ml-10 md:gap-36 md:leading-10 md:text-5xl md:ml-16 xl:ml-36">
        Building innovative, tech-based solutions for communities and public
        welfare is the mission that brings us together.{" "}
      </SectionHeader>
      {/* Description */}
      <div className="md:mt-[4%] md:flex md:flex-row">
        {/* Desc 1 */}
        <div className="flex flex-col ml-[20%] md:w-4/5 md:ml-[11%] md:flex-col mt-[24px] md:mt-[40px] md:justify-between ">
          <ParagraphText className="w-4/5 md:w-4/5">
            Our talented members come from diverse cultures, professions, and
            social backgrounds. With a passion for social good and dedication to
            creating beautiful technology, our project teams work alongside
            nonprofits to help them better serve their communities.
          </ParagraphText>
          <ParagraphTitle className="mt-5 md:mt-10 mb-2 md:text-2xl">
            {" "}
            SFU BLUEPRINT
          </ParagraphTitle>
          <div>
            <ParagraphText className="w-4/5 md:w-4/5">
              Blueprint is a multinational community with chapters run by
              students from different universities. As the third established
              chapter in Canada, our team is based at{" "}
              <span>
                <a
                  href="https://www.sfu.ca"
                  className="underline w-72 md:w-96 md:h-36"
                >
                  Simon Fraser University.
                </a>
              </span>
            </ParagraphText>
            <ParagraphText className="underline font-bold mt-[10%]">
              See all Blueprint chapters here
            </ParagraphText>
          </div>
        </div>
        {/* Desc 2 */}
        <div className="ml-[20%] flex flex-col mt-[24px] md:ml-[11%] md:mr-[8%] md:mt-[40x] md:w-4/5 md:justify-start">
          <div className="hidden md:block ml-[10%] w-96 h-56 bg-zinc-300 rounded-sm"></div>
          <div className="flex flex-row md:justify-between md:mt-12 md:items-start md:gap-36 md:inline-flex">
            <div className="md:justify-start md:items-start inline-flex">
              <div className="hidden md:block w-96 h-40 bg-zinc-300 rounded-sm"></div>
              <Annotation className="pl-[10%]">
                A design sprint is the best way to get ideas flowing
              </Annotation>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center md:hidden">
        <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
        <div className="m-[10%] flex flex-row">
          <div className="block basis-4/6 md:hidden w-64 h-32 bg-zinc-300 rounded-sm "></div>
          <Annotation className="basis-2/6 font-sketch pl-[10%] h-fit">
            A design sprint is the best way to get ideas flowing
          </Annotation>
        </div>
      </div>
      {/* End of Description */}


      <div className="mx-10 md:mx-16 xl:mx-36">
        {/*Gear Section*/}
        <div className="mt-36">
          <div id="Our-values" className="font-anek text-black text-4xl md:text-5xl font-[550]">
            Our Values
          </div>
          {gearSectionHtml.content}
        </div>
        {/*End of Gear Section*/}

        {/*Start of Team section   */}
        <SectionHeader id="Our-team" className="font-anek font-[550] text-4xl flex items-center justify-center md:text-5xl mb-4">
          Our Team
        </SectionHeader>
        <CardGrid cardList={Executives} gridName="EXECUTIVES"></CardGrid>
        <CardGrid cardList={ProjectLeads} gridName="PROJECT LEADS"></CardGrid>
        <CardGrid cardList={Designers} gridName="DESIGNERS"></CardGrid>
        <CardGrid cardList={Developers} gridName="DEVELOPERS"></CardGrid>
      </div>
      {/*Alumni Section*/}
      <div>
        <SectionHeader className="flex justify-center mt-[8%]">
          Alumni
        </SectionHeader>
        <div className="md:ml-[5%]">
          <ParagraphTitle className="ml-[5%] md:ml-[0%] !text-blueprint-black">2023</ParagraphTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 lg:grid-cols-5 xl:grid-cols-6 auto-cols-max justify-start mt-[0.5%]">
            {Alumni.map((items, key) => (
              <div
                class="border-1 md:m-4 shadow-xl w-[191px] h-[112px] flex flex-col justify-between"
                key={key}
              >
                <div className="ml-5 mt-3 mr-5">
                  <ParagraphText className="flex flex-wrap flex-row font-bold">
                    {items.title}
                  </ParagraphText>
                  <ParagraphText className="font-poppins text-blueprint-gray-dark">
                    {items.position}
                  </ParagraphText>
                </div>
                <ParagraphText className="!text-blueprint-blue underline flex flex-row ml-5 mb-3 mr-5">
                  <a>
                    LinkedIn{" "}
                  </a>
                  <img className="ml-[5%]" src="/svgs/share.svg" alt="" />
                </ParagraphText>
              </div>
            ))}
          </div>
        </div>
        {/*End of Alumni Section*/}
      </div>
      {/*End of Alumni Section*/}
    </div>
  );
};

export default AboutPage;
