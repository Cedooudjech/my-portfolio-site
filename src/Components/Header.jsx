/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */

import React from "react";
import Responsive from "./Responsive"; // Import the Responsive component

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: Responsive() ? "0.5rem" : "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem 1rem 1rem 0rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" style={{ margin: "0.5rem" }}>
        Home
      </a>
      <a href="#about" style={{ margin: "0.5rem" }}>
        About
      </a>
      <a href="#portfolio" style={{ margin: "0.5rem" }}>
        Portfolio
      </a>
      <a href="#footer" style={{ margin: "0.5rem" }}>
        Contact
      </a>
    </div>
  );
};

export default Header;
