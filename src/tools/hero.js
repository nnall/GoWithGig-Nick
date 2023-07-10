import React, { useState, useEffect } from "react";
import heroDesktop from "../images/hero.png";
import heroMobile from "../images/mobile_hero.png";
import ReservationForm from "../hq/reservation_form";
import { Link } from "react-router-dom";

// console.log(blurb);

export default function HeroImage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleIsClicked = () => {
    setIsClicked(true);
  };

  const handleIsUnclicked = () => {
    setIsClicked(false);
  };

  // function changeSize(e) {
  //   // console.log(e.target);
  //   e.target.style.cssText = `transform : scale(1.2);

  //     `;
  // }
  // function changeSizeBack(e) {
  //   // console.log(e.target);
  //   e.target.style.cssText = `transform : scale(1);

  //     `;
  // }

  // console.log(blurb);win
  useEffect(() => {
    function resize() {
      let noteWidthLoad = window.innerWidth * 0.35;
      const innerBlurb = document.querySelector(".hero__blurb-inner");

      innerBlurb.style.cssText = `
          transform: scale(${noteWidthLoad / 200}) rotate(-15deg);
        `;

      window.addEventListener("resize", function () {
        let innerBlurb = document.querySelector(".hero__blurb-inner");
        let windWidth = window.innerWidth;
        let noteWidth = windWidth * 0.35;
        innerBlurb.style.cssText = `
        
        transform: scale(${noteWidth / 200}) rotate(-15deg);
      `;
      });
    }

    resize();
  });

  return (
    <header>
      {/* HERO IMG */}
      <img className="hero__img" src={heroMobile}></img>
      {/* <div className="hero__blurb position-absolute "> */}
      <div
        className="hero__blurb-inner position-absolute"
        // style={{ transform: "rotate(-15deg)" }}
      >
        <h1>GoWithGIG</h1>
        <h4>Douglasville, Georigia</h4>
        <h4>Taylorsville, Utah</h4>
        <div
          className={`link-wrapper ${isHovered ? "hovered" : ""} ${
            isClicked ? "onClick" : ""
          }`}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleIsClicked}
          onMouseUp={handleIsUnclicked}
        >
          <Link to="/reservation">Find Your Ride Now!</Link>
        </div>
      </div>
      {/* </div> */}
      {/* HERO TEXT BLURB */}
    </header>
  );
}
