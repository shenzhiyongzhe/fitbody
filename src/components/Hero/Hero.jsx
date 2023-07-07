import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import heart_rate from "../../assets/heart.png";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    document.querySelector(".the-best-ad>div").style.right = "13.4rem";
    document.querySelector(".hero-img-back").style.left = "-6rem";
    document.querySelector(".calories").style.left = "-10rem";
    document.querySelector(".heart-rate").style.right = "3rem";
  }, []);
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="blur"></div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness program</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        <div className="programs"></div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart_rate} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_img} alt="" className="hero-img" />
        <img src={hero_img_back} alt="" className="hero-img-back" />
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories borned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
