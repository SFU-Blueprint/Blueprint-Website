import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ParagraphTitle,
  PageHeader,
  SectionHeader,
  ParagraphText,
} from "../components/Common";

const reroute = () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSe14iQaH4mQ0ILUZ99Ck-_KQdDOCBuFQlYh_fLBoQDQC8L9Bw/viewform"
  );
};

const NonprofitsPage = () => {
  const { t, i18n } = useTranslation();
  const [activePhase, setActivePhase] = useState(0);
  const phases = t("nonprofits.phases");

  const Header =  "images/non-profit/nonprofits_header.webp";

  const backgroundStyle = {
    // outline: "1px solid black",
    position: "absolute",
    left: 0, // added to override the left padding, which causes horizontal overflow with width = 100%
    overflowX: "hidden",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("grid.png")',
    opacity: 0.35,
    backgroundSize: "3vmin",
    backgroundRepeat: "repeat", // Corrected
    maskImage:
      "radial-gradient(circle at left 10% top 35%, black 1%, transparent 40%)", // changed to left to follow Figma
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          className="w-full h-[35vh] sm:h-[45vh] object-cover"
          src={Header}
          alt="nonprofits header"
        />
        <div className="absolute bottom-5 md:my-10">
          <PageHeader className="!text-blueprint-black my-2 ml-10 md:ml-16 md:text-6xl xl:ml-36">
            For Non-Profits
          </PageHeader>
          <ParagraphTitle className="!text-blueprint-black my-3 ml-10 md:ml-16 md:text-6xl xl:ml-36">
            {t("nonprofits.forNonProfits")}
          </ParagraphTitle>
          <ProposeButton className="my-5 ml-10 md:ml-16  xl:ml-36" />
        </div>
      </div>
      <div className="w-full px-5 md:px-[120px]">
        <SectionHeader id="Why-choose-us" className="mb-3 md:mb-6">
          Why collaborate with us?
        </SectionHeader>
        <ParagraphText className="mb-6 md:mb-16 max-md:ml-6">
          {t("nonprofits.whyCollaborateWithUs")}
        </ParagraphText>

        <SectionHeader id="Our-criteria" className="mb-3 md:mb-6">
          Can your idea become a project?
        </SectionHeader>
        <ParagraphText className="mb-3 md:mb-6 max-md:ml-6">
          {t("nonprofits.canYourIdeaBecomeAProject")}
        </ParagraphText>
        <div className="flex max-md:flex-col gap-3 mb-3 md:gap-[108px] md:mb-12 max-md:ml-6">
          <ContentCard>{"organizationalNeed"}</ContentCard>
          <ContentCard>{"technicalFeasibility"}</ContentCard>
        </div>
        <div className="flex max-md:flex-col gap-3 mb-3 md:gap-[108px] max-md:ml-6">
          <ContentCard>{"communityImpact"}</ContentCard>
          <ContentCard>{"technicalFeasibility"}</ContentCard>
        </div>

        <div id="Our-process" style={backgroundStyle}></div>
        <SectionHeader className="mt-6 md:mt-16 mb-3 md:mb-6">
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
                  } md:hidden w-full py-6 px-4`}
                >
                  {t(phases[activePhase])}
                </ContentCard>
              </div>
            ))}
          </div>
          <ContentCard className="max-md:hidden pt-36">
            {t(phases[activePhase])}
          </ContentCard>
        </div>
      </div>
      <div className="flex flex-col bg-blueprint-gray-light items-center justify-center w-full h-[450px] mt-[3%]">
        <SectionHeader id="Proposal" className="text-center my-3 md:my-6">
          Send your ideas to us now
        </SectionHeader>
        <ParagraphText className="text-center whitespace-pre-line mb-3 md:mb-6">
          {t(`nonprofits.CTA1`)}
        </ParagraphText>
        <ProposeButton className="border-blueprint-blue text-blueprint-blue mb-3 md:mb-6" />
        <ParagraphText className="text-center mb-3 md:mb-6">
          {t(`nonprofits.CTA2`)}{" "}
          <a
            href="mailto:sfublueprint@gmail.com"
            className="text-blueprint-blue underline font-bold"
          >
            {t(`email.link`)}
          </a>
        </ParagraphText>
      </div>
    </div>
  );
};

function PhaseButton(index, activePhase, setActivePhase, phase) {
  const { t, i18n } = useTranslation();
  return (
    // added bg-white and flipped the true-false condition for bg-blue to make it non-transparent when not focused
    <button
      className={`${
        index !== activePhase && "bg-white"
      } bg-blueprint-blue flex flex-col justify-center items-start w-full h-[72px] sm:h-[100px] md:h-[135px] lg:h-[120px] px-[10%] md:w-[250px] lg:w-full rounded-sm shadow-md text-left transition duration-300 ease-in-out transform hover:shadow-2xl `}
      onClick={() => setActivePhase(index)}
    >
      <ParagraphTitle
        className={`${index === activePhase && "text-blueprint-white"} mb-3`}
      >
        Phase {index + 1}
      </ParagraphTitle>
      <ParagraphText
        className={`${index === activePhase && "text-blueprint-white"}`}
      >
        {t("nonprofits." + phase + ".name")}
      </ParagraphText>
    </button>
  );
}

function ContentCard({ children, className }) {
  const { t, i18n } = useTranslation();
  const title = children;
  console.log(title);
  return (
    <div className={`${className} flex flex-col w-full md:w-[1000px] gap-3`}>
      <ParagraphTitle>{t(`nonprofits.${title}.name`)}</ParagraphTitle>
      <ParagraphText>{t(`nonprofits.${title}.description`)}</ParagraphText>
    </div>
  );
}

function ProposeButton({ className }) {
  const { t, i18n } = useTranslation();
  return (
    <button
      className={`${className} text-blueprint-black border-blueprint-black flex justify-center items-center max-w-[70%] p-4 rounded-md border-2 font-poppins font-bold tracking-tight hover:shadow-2xl`}
      onClick={() => reroute()}
    >
      Propose a Project
    </button>
  );
}

export default NonprofitsPage;
