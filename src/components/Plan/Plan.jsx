import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData.js";
import whiteTick from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";

const Plan = () => {
  return (
    <div id="Plan">
      <div className="plan-header">
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="plan-box">
        <div className="blur"></div>
        <div className="blur"></div>
        {plansData.map((plan, index) => {
          return (
            <div className="plan-card" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <img src={whiteTick} alt="" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div>
                <span>See more benefits</span>
                <img src={rightArrow} alt="" />
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
