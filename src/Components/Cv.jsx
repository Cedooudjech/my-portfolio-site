/**
 * Cv component
 *
 * This component renders two buttons to download and view a CV.
 * It uses the Responsive component to adjust the layout based on screen size.
 */

import React from "react";
import PropTypes from "prop-types"; // Import the PropTypes module

import Responsive from "./Responsive"; // Import the Responsive component

const srcCv = "https://drive.google.com/file/d/1S22Nx0WeAWA4ey8CyFE_Np6xV_uZ1r38/view?usp=sharing";

const Cv = (props) => {
  const { backgroundColor, color } = props;
  const handleDownload = () => {
    // Logic to download the CV
    const link = document.createElement("a", { target: "_blank" });
    link.href = srcCv; // Replace with the actual path to your CV
    link.download = "MyCV";
    link.click();
  };

  const handleView = () => {
    // Logic to view the CV
    window.open(srcCv, "_blank"); // Replace with the actual path to your CV
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: Responsive() ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        gap: "3rem",
        width: Responsive() ? "70%" : "90%",
      }}
    >
      <button
        onClick={handleDownload}
        style={{
          padding: "0.5rem 2rem",
          fontSize: "25px",
          backgroundColor: backgroundColor,
          color: color,
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Download CV
      </button>
      <button
        onClick={handleView}
        style={{
          padding: "0.5rem 2rem",
          fontSize: "25px",
          backgroundColor: color,
          color: backgroundColor,
          border: "2.5px solid " + backgroundColor,
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        View CV
      </button>
    </div>
  );
};

Cv.defaultProps = {
  backgroundColor: "#4E567E",
  color: "#fff",
};

Cv.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Cv;
