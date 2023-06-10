import React, { useState, useEffect } from "react";
import heroDesktop from "../images/hero.png";
import heroMobile from "../images/mobile_hero.png";
import ReservationForm from "../hq/reservation_form";
import { Link } from "react-router-dom";

export default function HeroImage() {
  return (
    <header>
      {/* HERO IMG */}
      <img className="hero__img" src={heroMobile}></img>
      {/* HERO TEXT BLURB */}
      <div className="hero__blurb">
        <h1>GoWithGIG</h1>
        <h4>Douglasville, Georigia</h4>
        <h4>Taylorsville, Utah</h4>
        <Link to="/reservation">Find Your Ride Now!</Link>
      </div>
    </header>
  );
}
