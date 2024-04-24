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
        Role: "PROJECT DEVELOPER",
        Description: [
            "Project Developers are responsible for the development of the project, bringing designs and product specifications to life.",
            "Depending on the scope of the project, each team can have 5-8 developers.",
            "They work closely with the project lead, the product manager, and designers to deliver top quality code!",
        ],
        Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
        Link:"",
        Deadline:""
    },
    {
        Role: "PRODUCT DESIGNER",
        Description: [
            "Product Designers are responsible for delivering high-quality UI/UX work for the non-profit projects we build",
            "There are 2-3 designers in each team.",
            "They work closely with various stakeholders including the product manager, the developers on their team, and other designers.",
        ],
        Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
        Link:"",
        Deadline:""
    },
    {
        Role: "PROJECT MANAGER",
        Description: [
            "The Project Manager of the team will be responsible for overseeing the successful completion of projects with our NPO partner.",
            "This includes coordinating project activities, managing timelines and resources, and ensuring that project goals align with the needs of the NPO.",
        ],
        Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
        Link:"",
        Deadline:""
    },
    {
        Role: "TECH LEAD",
        Description: [
            "The Tech Lead for the team is responsible for leading the team and driving the technical direction of the project.",
            "They provide support and mentorship to developers on the team and work with the product manager to run the team effectively",
        ],
        Hiring: false, //WARNING: Setting this to true will display the Link and Deadline fields.
        Link:"",
        Deadline:""
    },
    
]