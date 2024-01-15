import React, {useState, useEffect, useCallback } from "react";
import GearSection from "../components/Gears/GearSection";
import MobileGearSection from "../components/Gears/MobileGearSection";
import {Alumni} from "../data/alumni";
// import shareIcon from "../assets/icons/share.svg" 

/**
 * React functional component representing the About Us page.
 *
 * @component
 */
const AboutPage = () => {
  //State used to hold the current gear section JSX (can either be the mobile or desktop version)
  const [gearSectionHtml, setGearSectionHtml] = useState({
    content: <GearSection></GearSection>
  });

  //Memoize the resize function (cache it) so we don't recreate the function when the effects use it
  const resize = useCallback(() => {
    const windowWidth = window.innerWidth;
    const GEAR_SECTION_WIDTH_BREAKPOINT = 1000;

    setGearSectionHtml({
      content: windowWidth > GEAR_SECTION_WIDTH_BREAKPOINT
          ? <GearSection></GearSection>
          : <MobileGearSection></MobileGearSection>
    });
  }, [setGearSectionHtml]);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  useEffect(() => {
    // Initial resize when component mounts
    resize();
  }, [resize]);

  /**
   * JSX for rendering the About page.
   *
   * @returns {JSX.Element} The About page component.
   */

  return (
    <div>
      {/* About us */}
      <div className="relative">
        <img className="h-46 w-full md:h-80 md:w-full" src="/testImage.jpg" alt="Your"/>
        <div className="absolute bottom-5 md:my-10">
          <p className="font-anek text-black text-4xl my-2 font-bold ml-10 md:ml-16 md:text-6xl xl:ml-36 ">About Us</p>
          <p className="font-poppins font-bold md:text-2xl ml-10 md:ml-16 xl:ml-36">TECH-DRIVEN ADVOCATED FOR SOCIAL GOOD</p>
        </div>
      </div>
      <h1 className="mt-[4%] font-anek text-xl leading-relaxed mr-10 ml-10 md:gap-36 md:leading-10 md:text-5xl md:ml-16 xl:ml-36">Building innovative, tech-based solutions for communities and public welfare is the mission that brings us together. </h1>
      {/* Description */}
      <div className="md:mt-[4%] md:flex md:flex-row">
        {/* Desc 1 */}
        <div className="flex flex-col ml-[20%] md:w-4/5 md:ml-[11%] md:flex-col mt-[24px] md:mt-[40px] md:justify-between ">
          <p className="w-4/5 md:w-4/5 text-xs font-poppins tracking-tight md:tracking-wide md:text-base md:font-normal">
            Our talented members come from diverse cultures, professions, and
            social backgrounds. With a passion for social good and dedication to
            creating beautiful technology, our project teams work alongside
            nonprofits to help them better serve their communities.
          </p>
          <h1 className="font-poppins text-base font-medium text-xl text-blueprint-blue mt-5 md:mt-10 mb-2 md:text-2xl"> SFU BLUEPRINT</h1>
          <div>
              <p className="font-poppins w-4/5 text-xs tracking-tight md:tracking-wide md:w-4/5 md:text-base md:font-normal">Blueprint is a multinational community with chapters run by students from different universities. As the third established chapter in Canada, our team is based at <span>
                  <a href="https://www.sfu.ca"className="underline font-poppins w-72 text-xs tracking-tight md:tracking-wide md:w-96 md:h-36 md:text-base md:font-normal">Simon Fraser University.</a>
                </span>
              </p>
              <p className="font-poppins underline text-xs font-bold mt-[10%] md:text-base">See all Blueprint chapters here</p>
            </div>
          
        </div>
        {/* Desc 2 */}
        <div className="ml-[20%] flex flex-col mt-[24px] md:ml-[11%] md:mr-[8%] md:mt-[40x] md:w-4/5 md:justify-start">
          <div className="hidden md:block ml-[10%] w-96 h-56 bg-zinc-300 rounded-sm"></div>
          <div className="flex flex-row md:justify-between md:mt-12 md:items-start md:gap-36 md:inline-flex">
            <div className="md:justify-start md:items-start inline-flex">
              <div className="hidden md:block w-96 h-40 bg-zinc-300 rounded-sm"></div>
              <p className="pl-[10%] hidden md:block font-sketch text-xl leading-none tracking-tight">A design sprint is the best way to get ideas flowing</p>
            </div>
          </div>
          
        </div>
        {/* <p className="font-poppins underline text-xs font-bold mt-20 md:mt-[10%] md:ml-[11%] md:text-base">See all Blueprint chapters here</p> */}
       </div>
      <div className="block mt-12 flex flex-col items-center md:hidden">
        <div className="block md:hidden w-screen h-60 bg-zinc-300 justify-self-center rounded-sm "></div>
        <div className="m-[10%] flex flex-row">
          <div className="block basis-4/6 md:hidden w-64 h-32 bg-zinc-300 rounded-sm "></div>
          <p className="basis-2/6 font-sketch pl-[10%] h-fit">A design sprint is the best way to get ideas flowing</p>
        </div>
      </div>

      <div>
        <h1 className="flex justify-center mt-[8%] text-3xl font-anek md:text-5xl md:gap-36  md:ml-16 xl:ml-36">Alumni</h1>
        <div className="ml-[5%]">
          <h1 className="font-poppins text-[24px]">2023</h1>
          <div className="flex flex-row flex-wrap justify-start mt-[0.5%]">
            {Alumni.map((items, key) => (
                  <div class="border-1 m-2 shadow-xl w-[191px] h-[112px] flex flex-col justify-between" key={key}>
                      <div className="ml-5 mt-3 mr-5">
                        <h1 className="flex flex-wrap flex-row font-poppins font-bold text-[16px]">{items.title}</h1>
                        <h1 className="font-poppins text-[14px] text-[#6C6B7A]">{items.position}</h1>
                      </div>
                      <div className="flex flex-row ml-5 mb-3 mr-5">
                        <a className="font-poppins text-blueprint-blue text-[14px] underline" href="">LinkedIn </a>
                        <img className="ml-[5%]" src="/share.svg" alt="" />
                      </div>
                  </div>
            ))}
          </div>


        </div>


      </div>



      <div>
        <h1 className="flex justify-center mt-[8%] text-3xl font-anek md:text-5xl md:gap-36  md:ml-16 xl:ml-36">Alumni</h1>
        <div className="ml-[5%]">
          <h1 className="font-poppins text-[24px]">2023</h1>
          <div className="flex flex-row flex-wrap justify-start mt-[0.5%]">
            {Alumni.map((items, key) => (
                  <div class="border-1 m-2 shadow-xl w-[191px] h-[112px] flex flex-col justify-between" key={key}>
                      <div className="ml-5 mt-3 mr-5">
                        <h1 className="flex flex-wrap flex-row font-poppins font-bold text-[16px]">{items.title}</h1>
                        <h1 className="font-poppins text-[14px] text-[#6C6B7A]">{items.position}</h1>
                      </div>
                      <div className="flex flex-row ml-5 mb-3 mr-5">
                        <a className="font-poppins text-blueprint-blue text-[14px] underline" href="">LinkedIn </a>
                        <img className="ml-[5%]" src="/share.svg" alt="" />
                      </div>
                  </div>
            ))}
          </div>


        </div>


      </div>



      {/*Gear Section*/}
      <div className="mt-36">
        <div className="mx-6 md:mx-20 font-anek text-black text-4xl md:text-5xl font-[550]">Our Values</div>
        {gearSectionHtml.content}
      </div>
      {/*End of Gear Section*/}


    </div>
  );
};

export default AboutPage;
