import React from "react";
import "./about.scss";
import Leadership from "../Leadership";

const About = () => {
  return (
    <div className="about-hero">
      <div className="about">
        <img
          src="https://preview.colorlib.com/theme/selling/images/about_1.jpg "
          alt=""
        />
        <div className="about-word">
          <h4>MERCHANT COMPANY</h4>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </div>
      <Leadership />
    </div>
  );
};

export default About;
