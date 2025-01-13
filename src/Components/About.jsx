/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import Responsive from "./Responsive"; // Import the Responsive component

import Cv from "./Cv"; // Import the Cv component

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */

const description = `
  My name is Cedric CHEDJOU and I am a first-year Master's student in Cybersecurity at HETIC, Montreuil-France and CAMPUS CYBER.
  Passionate about cybersecurity, I am currently looking for an internship or apprenticeship in Cybersecurity.
  Although I am open to different responsibilities, I have a particular preference for the position of Assistant
  CISO. I enjoy solving complex problems and innovating to make technology accessible to everyone.
`;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  // Softskills
  "Analytical Skills",
  "Team Spirit",
  "Autonomy",
  "Synthesis Skills",
  "Perseverance",
  "Organization and Rigor",
  "Flexibility",
  "Professional Communication",
  "Conflict of Interest Management",
  // Technical Skills
  "Pentesting and Vulnerability Analysis",
  "Network and System Security",
  "Identity and Access Management",
  "Security Audits and Compliance",
  "Industrial Equipment Supervision",
  "Operating Systems",
  "DevSecOps and Cloud Services",
  "Collaborative and Monitoring Tools",
  "Virtualization and Storage",
  "Knowledge of IDS/IPS and SOC",
  "Programming and Scripting",
  "Certifications and Specific Knowledge",
  "Office Tools and Data Visualization",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about strengthening cybersecurity systems through innovative solutions and strategic problem-solving. By leveraging my expertise in network security, compliance audits, and DevSecOps, I constantly strive to develop and implement robust protections that safeguard critical infrastructures and empower organizations to face evolving cyber threats.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: Responsive() ? "2rem 0rem" : "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 2rem 0" }}>
          {detailOrQuote}
          <div>
            <Cv />
          </div>
        </p>
      </div>
    </section>
  );
};

export default About;
