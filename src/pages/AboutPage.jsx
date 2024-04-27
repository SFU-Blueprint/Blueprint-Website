import React, { useState, useEffect, useCallback } from "react";
import GearSection from "../components/about-page/Gears/GearSection";
import MobileGearSection from "../components/about-page/Gears/MobileGearSection";

import { Alumni } from "../constants/Team/Alumni";
import { Members } from "../constants/Team/Members";
import { Executives } from "../constants/Team/Execs";
import CardGrid from "../components/about-page/CardGrid";
import AlumniCard from "../components/about-page/AlumniCard";

import {
  Annotation,
  PageHeader,
  ParagraphText,
  ParagraphTitle,
  SectionHeader,
} from "../components/Common";

const AboutPage = () => {
  const [gearSectionHtml, setGearSectionHtml] = useState({
    content: <GearSection></GearSection>,
  });

  const Header = "images/about/aboutus_header.webp";
  const Image_1 = "images/about/aboutus_image_one.webp";
  const Image_2 = "images/about/aboutus_image_two.webp";

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
      <div className="relative ">
        <img
          className="w-full h-[35vh] sm:h-[45vh] object-cover"
          // src={Header}
          src={Header}
          alt="about us header"
          fetchPriority="high"
          rel="preload"
          as="image"
          type="image/webp"
        />

        <div className="absolute bottom-6 md:my-10">
          <PageHeader className="!text-blueprint-white font-bold my-2 ml-10 md:ml-16 md:text-6xl xl:ml-36 ">
            About Us
          </PageHeader>
          <ParagraphTitle className="!text-blueprint-white my-3 mb-16 ml-10 xl:ml-36">
            TECH-DRIVEN ADVOCATED FOR SOCIAL GOOD
          </ParagraphTitle>
        </div>
      </div>

      <div></div>
      <SectionHeader
        className="mt-[4%] leading-relaxed mr-10 ml-10 md:gap-36 md:leading-10 md:text-5xl md:ml-16 xl:ml-36"
        id="Who-we-are"
      >
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
              students from different universities. As the fifth established
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
          </div>
        </div>
        {/* Desc 2 */}
        <div className="ml-[20%] flex flex-col mt-[24px] md:ml-[11%] md:mr-[8%] md:mt-[40x] md:w-4/5 md:justify-start">
          <div className="hidden md:block ml-[10%] w-96 h-53 bg-zinc-300 rounded-sm">
            <img src={Image_1} alt="about us image 1" />
          </div>
          <div className="flex flex-row md:justify-between md:mt-12 md:items-start md:gap-36 md:inline-flex">
            <div className="md:justify-start md:items-start inline-flex">
              <div className="hidden md:block w-96 h-40 bg-zinc-300 rounded-sm">
                <img src={Image_2} alt="about us image 2" />
              </div>
              <Annotation className="pl-[10%] hidden sm:block">
                A design sprint is the best way to get ideas flowing
              </Annotation>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-center items-center md:hidden">
        <div className="block md:hidden w-50 h-60 ml-[10%] mr-[10%] rounded-sm">
          <img className="" src={Image_1} alt="about us image 1" />

        </div>
        <div className="m-[10%] flex flex-row">
          <div className="block basis-4/6 md:hidden w-64 h-32 rounded-sm ">
            <img src={Image_2} alt="about us image 2" />
          </div>

          <Annotation className="basis-2/6 font-sketch pl-[10%] h-fit block sm:hidden">
            A design sprint is the best way to get ideas flowing
          </Annotation>
        </div>
      </div>
      {/* End of Description */}

      <div className="mx-10 md:mx-16 xl:mx-36">
        {/*Gear Section*/}
        <div className="mt-36">
          <div
            id="Our-values"
            className="font-anek text-black text-4xl md:text-5xl font-[550]"
          >
            Our Values
          </div>
          {gearSectionHtml.content}
        </div>
        {/*End of Gear Section*/}

        {/*Start of Team section   */}
        <SectionHeader
          id="Our-team"
          className="font-anek font-[550] text-4xl flex items-center justify-center md:text-5xl mb-4 pt-14"
        >
          Our Team
        </SectionHeader>
        <CardGrid cardList={Executives} gridName="EXECUTIVES"></CardGrid>
        <CardGrid cardList={Members} gridName="Members"></CardGrid>
      </div>

      {/*Alumni Section*/}
      <div className="mt-[8%] mx-10 md:mx-16 xl:mx-36">
        <SectionHeader className="flex justify-center ">Alumni</SectionHeader>
        <div className="">
          {/* <ParagraphTitle className="ml-[5%] md:ml-[0%] !text-blueprint-black">
            2023
          </ParagraphTitle> */}
          <AlumniCard cardList={Alumni} gridName="2023"></AlumniCard >
        </div>
      </div>
      {/*End of Alumni Section*/}
    </div>
  );
};

export default AboutPage;
