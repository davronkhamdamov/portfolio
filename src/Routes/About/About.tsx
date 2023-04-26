import React from "react";

const About: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <p
        style={{
          color: "rgba(0, 255, 255,0.7)",
          fontSize: "4.2vw",
          fontWeight: 400,
          fontFamily: "Gochi Hand",
          textAlign: "center",
          lineHeight: "8vw",
          letterSpacing: "0.5vw",
          textTransform: "capitalize",
        }}
      >
        This website is a work in progress! 🔧<br></br> Check back soon ⏳
      </p>
    </div>
  );
};

export default About;
