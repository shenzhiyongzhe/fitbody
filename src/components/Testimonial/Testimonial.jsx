import React, { useState } from "react";
import "./Testimonial.css";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
let count = 0;
const Testimonial = () => {
  const [img, setImg] = useState(testimonialsData[count].image);
  const [review, setReview] = useState(testimonialsData[count].review);
  const [name, setName] = useState(testimonialsData[count].name);
  const [status, setStatus] = useState(testimonialsData[count].status);
  const switchImg = (flag) => {
    if (flag === "right") count === 2 ? (count = 0) : count++;
    else count === 0 ? (count = 2) : count--;
    setImg(testimonialsData[count].image);
    setReview(testimonialsData[count].review);
    setName(testimonialsData[count].name);
    setStatus(testimonialsData[count].status);
  };
  return (
    <div id="Testimonial">
      <div className="left-t">
        <span>tetimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span>{review}</span>
        <div>
          <span>{name}</span>
          <span> - {status}</span>
        </div>
      </div>
      <div className="right-t">
        <div>
          <img src={leftArrow} alt="" onClick={() => switchImg("left")} />
          <img src={rightArrow} alt="" onClick={() => switchImg("right")} />
        </div>
        <div className="imgbox">
          <div></div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
