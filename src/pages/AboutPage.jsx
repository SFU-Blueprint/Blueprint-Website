import React from "react";
import aboutContent from "../data/AboutContent";

function AboutPage() {
    return (
        <div>
        <h1>{aboutContent.title}</h1>
        <p>{aboutContent.description}</p>
        </div>
    );
}

export default AboutPage;