import React from "react";

const PageHeader = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-blueprint-black font-anek text-[2rem] md:text-[4rem] font-semibold tracking-wide`}
    />
  );
};

const SectionHeader = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-blueprint-black font-anek text-2xl md:text-5xl font-[550] tracking-wide`}
    />
  );
};

const ParagraphTitle = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-blueprint-black font-poppins text-lg md:text-2xl font-medium uppercase max-md:tracking-wide`}
    />
  );
};

const ParagraphText = ({ ...props }) => {
  return (
    <p
      {...props}
      className={` ${props.className} text-blueprint-gray font-poppins text-sm md:text-xl`}
    />
  );
};

export { PageHeader, SectionHeader, ParagraphTitle, ParagraphText };
