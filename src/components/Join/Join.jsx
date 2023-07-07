import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div id="Join">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-join">
        <form action="" className="email-container">
          <input type="text" placeholder="Enter your Email Address here" />
          <button className="btn" type="submit">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
