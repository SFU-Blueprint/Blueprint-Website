/*
    This file contains the data for the Hiring page.
    EXAMPLE:
    {
        Role: "PROJECT DEVELOPER", // Name of the role.
        Description: [ // Displayed in point form on site. Array of strings describing the role responsibilities and team dynamics.
            "Project Developers are responsible for the development of the project, bringing designs and product specifications to life.",
            "Depending on the scope of the project, each team can have 5-8 developers.",
            "They work closely with the project lead, the product manager, and designers to deliver top quality code!",
        ],
        Hiring: false, // Indicates if hiring is currently open for this role.
        Link: "" // Only displays if the above Hiring is true. Link to the hiring page; empty string indicates no hiring.
        Deadline: "" // Only displays if the above Hiring is true. Deadline for applications; empty string indicates no deadline.
    },

*/

export const Roles = [
  {
    Role: "VP COMMUNICATIONS",
    Description: [
      "Coordinate development and creation of innovative marketing strategies to promote Blueprint events and initiatives, ensuring clarity and accuracy of information presented.",
      "Collaborate with social media coordinators to engage Blueprint’s online community through channels such as Discord, Instagram, Facebook, and LinkedIn.",
      "Manage Blueprint’s online brand and team image through consistent application of Blueprint’s visual identity and branding guidelines, in collaboration with VP Design.",
    ],
    Hiring: false,
    Link: "https://forms.gle/ZsSocbzYRExXDwtf6",
    Deadline: "October 4, 2024",
  },
  {
    Role: "Social Media Coordinators",
    Description: [
      "Develop and manage engaging social media posts and strategies.",
      "Create, curate, and manage content across all social media platforms.",
      "Monitor, engage, and respond to social media interactions in a timely and professional manner.",
    ],
    Hiring: true,
    Link: "https://forms.gle/ApQMzdbisZhhM1eW8",
    Deadline: "October 31, 2024",
  },
  {
    Role: "VP ENGINEERING",
    Description: [
      "Conduct architecture design reviews, provide code standards, write technical documentation.",
      "Assists with developer recruitment, and organize developer bootcamp.",
      "Help evaluate the technical feasibility of potential NPO projects, and regularly provide advice and guidance to the project leads through 1-1s and meetings.",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "https://forms.gle/okZAC8zdR9YqyF9a6",
    Deadline: "May 18, 2024",
  },
  {
    Role: "VP PM",
    Description: [
      "Build out the product community within Blueprint, establish product management artifacts and processes, and provide mentorship to team product managers.",
      "Assists with developer recruitment, and organize developer bootcamp.",
      "Help evaluate the technical feasibility of potential NPO projects, and regularly provide advice and guidance to the project leads through 1-1s and meetings.",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "https://forms.gle/86qcQmL5cYC6U65g7",
    Deadline: "May 18, 2024",
  },
  {
    Role: "VP DESIGN",
    Description: [
      "Mentor the product designers on their individual projects, coordinate design feedback sessions, and weekly design team meetings with team socials, project share-outs, and critique.",
      "Assists with preliminary scoping of new projects providing a design perspective in collaboration with VP Scoping as necessary.",
      "Work to improve design processes and ceremonies (ie. run critiques more efficiently and effectively, improve cross-functional processes, creating Figma assets to speed up workflow for designers, etc.)",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "https://forms.gle/6sioYVubJPfxdN8BA",
    Deadline: "May 18, 2024",
  },
  {
    Role: "VP TALENT",
    Description: [
      "Working with executive to generate different questions for role recruitment.",
      "Send out interview invites, rejections and acceptances.",
      "Coordinate interview scheduling and in general be the point of contact during recruiting",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "https://forms.gle/4e2VBUZThhNmcVFz9",
    Deadline: "May 18, 2024",
  },
  {
    Role: "PROJECT DEVELOPER",
    Description: [
      "Project Developers are responsible for the development of the project, bringing designs and product specifications to life.",
      "Depending on the scope of the project, each team can have 5-8 developers.",
      "They work closely with the project lead, the product manager, and designers to deliver top quality code!",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "https://forms.gle/TKUnLnhHzn4gPBrx5",
    Deadline: "",
  },
  {
    Role: "PRODUCT DESIGNER",
    Description: [
      "Product Designers are responsible for delivering high-quality UI/UX work for the non-profit projects we build",
      "There are 2-3 designers in each team.",
      "They work closely with various stakeholders including the product manager, the developers on their team, and other designers.",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "",
    Deadline: "",
  },
  {
    Role: "PROJECT MANAGER",
    Description: [
      "The Project Manager of the team will be responsible for overseeing the successful completion of projects with our NPO partner.",
      "This includes coordinating project activities, managing timelines and resources, and ensuring that project goals align with the needs of the NPO.",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "",
    Deadline: "",
  },
  {
    Role: "TECH LEAD",
    Description: [
      "The Tech Lead for the team is responsible for leading the team and driving the technical direction of the project.",
      "They provide support and mentorship to developers on the team and work with the product manager to run the team effectively",
    ],
    Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
    Link: "",
    Deadline: "",
  },
];
