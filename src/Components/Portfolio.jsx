/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import { useState } from "react";
import Responsive from "./Responsive"; // Import the Responsive component

import closeButton from "../images/Buttons/close-button.svg";

/**
 * Imported pages
 *
 * These components represent different pages or sections of the portfolio.
 * Each page can have its own unique content and layout.
 */

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import designDeskImage from "../images/design-desk.jpeg";
import cybersecurityImage from "../images/cybersecurity.jpeg";
import iaImage from "../images/ia.jpeg";
import xrImage from "../images/xr.jpeg";

import "../styles.css";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  /**
   * Pages list
   *
   * An array of page objects, each containing an id and content.
   * Each page provides a detailed explanation of each project list item.
   */
  const pages = [
    { id: 1, content: <Page1 /> },
    { id: 2, content: <Page2 /> },
    { id: 3, content: <Page3 /> },
    { id: 4, content: <Page4 /> },
  ];

  /**
   * Image list
   *
   * Each image object contains her source path and a descriptive text.
   * Provides a visual description of the theme when each project list item block is hovered over by the cursor.
   */
  const images = [
    { src: designDeskImage, imageAltText: "Teamwork in a professional and secure environment" },
    {
      src: cybersecurityImage,
      imageAltText: "Learn more about cybersecurity.",
    },
    {
      src: iaImage,
      imageAltText: "Learn more about machine learning, data, and artificial intelligence",
    },
    { src: xrImage, imageAltText: "Learn more about extended reality" },
  ];

  /**
   * Project list
   *
   * An array of objects that will be used to display the links section of your projects.
   * Each project contains a title, description, and URL.
   * Click on "Learn More" to get a detailed description.
   */
  const projectList = [
    {
      title: "My Resume Website 🎉",
      description:
        "Created using my own web development knowledge and deployed on GitHub Pages. Includes my experience and cybersecurity skills. You will learn how to use or manipulate a container with multiple extensions using GitHub Codespaces and you can also duplicate and customize this site for yourself.",
      url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    },
    {
      title: "All My Knowledge on Cybersecurity",
      description:
        "I consolidated my knowledge in cybersecurity by combining theory and practice, exploring fundamental concepts and applying them to real-world scenarios. This allowed me to develop a comprehensive understanding of modern threats and solutions to effectively secure systems and networks.",
      url: "https://github.com/microsoft/Security-101??WT.mc_id=academic-96948-sayoung",
    },
    {
      title: "Artificial Intelligence and Me",
      description:
        "Created or used models and visualizations to accompany each project, allowing for a clear and intuitive illustration of concepts related to artificial intelligence, machine learning, and data analysis.",
      url: "https://github.com/microsoft/generative-ai-for-beginners/tree/main?WT.mc_id=academic-105485-koreyst",
    },
    {
      title: "Extended Reality | A World of Possibilities",
      description:
        "Introduced immersive concepts to illustrate each application of extended reality, offering an interactive and visual representation to better understand its uses and impact.",
      url: "https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-96948-sayoung",
    },
  ];

  const handleMouseOver = (index) => {
    setCurrentImage(index);
    setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("animated-image");
    }, 30);
  };

  const handleButtonClick = (index) => {
    setCurrentPage(pages[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", overflow: "hidden" }}
      >
        <div
          style={{
            maxWidth: Responsive() ? "50%" : "40%",
            alignSelf: "center",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "15px" }}
            className={animationClass}
            src={images[currentImage].src}
            alt={images[currentImage].imageAltText}
          />
        </div>
        <div className={Responsive() ? "Responsivecontainer" : "container"}>
          {projectList.map((project, index) => (
            <div
              className={Responsive() ? "Responsivebox" : "box"}
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onFocus={() => handleMouseOver(index)}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">
                {project.description}
                <button className="info-button" onClick={() => handleButtonClick(index)}>
                  Learn More
                </button>
              </p>
            </div>
          ))}
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseModal} aria-label="Close modal">
                <img src={closeButton} alt="Close" />
              </button>
              {currentPage && currentPage.content}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
