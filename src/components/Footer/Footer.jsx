import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import linkin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div id="Footer">
      <hr />
      <div className="social-link">
        <img src={github} alt="" />
        <img src={instagram} alt="" />
        <img src={linkin} alt="" />
      </div>
      <img src={logo} alt="" />
      <div className="blur"></div>
      <div className="blur"></div>
    </div>
  );
};

export default Footer;
