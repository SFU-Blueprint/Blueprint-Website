import React from "react";

function overrideStyles(input) {
    console.log(input ? input
        .split(" ")
        .map((style) => `!${style}`)
        .join(" ") : "");
    return input ? input
      .split(" ")
      .map((style) => `!${style}`)
      .join(" ") : "";    
}

const PageHeader = ({ children, className }) => {
  const styles = `${overrideStyles(
    className
  )} text-blueprint-black font-anek text-[2rem] md:text-[4rem] font-semibold tracking-wide`;
  return <p className={styles}>{children}</p>;
};

const SectionHeader = ({ children, className }) => {
  const styles = `${overrideStyles(
    className
  )} text-blueprint-black font-anek text-2xl md:text-5xl font-[550] tracking-wide`;
  return <p className={styles}>{children}</p>;
};

const BodyHeader = ({ children, className }) => {
  const styles = `${overrideStyles(
    className
  )} text-blueprint-black font-poppins text-lg md:text-2xl font-medium uppercase max-md:tracking-wide`;
  return <p className={styles}>{children}</p>;
};

const Body = ({ children, className }) => {
  const styles = `${overrideStyles(
    className
  )} text-blueprint-gray font-poppins text-sm md:text-xl`;
  return <p className={styles}>{children}</p>;
};

export {PageHeader, SectionHeader, BodyHeader, Body, overrideStyles}
