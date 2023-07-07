import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./tools/navbar";
import HeroImage from "./tools/hero";
import CardHome from "./tools/single_card";
import ReviewCard from "./tools/reviews";
import ArgyleTest from "./argyle/create_token";
import Gigs from "./tools/gigs";
import Login from "./tools/login";
import Footer from "./tools/footer";
import Renters from "./abi/insurance";
import Vehicles from "./abi/vehicle";
import Create from "./abi/create_ins";
import Rents from "./abi/rentals";
import Ratings from "./argyle/ratings";
import PasswordInput from "./onboard/signup";
import Contact from "./tools/contactus";
import ReservationForm from "./hq/reservation_form";
import Admin from "./tools/admin/admin";
import ContactUs from "./frontend/contacus";

// Nick Imports
import Home from "./frontend/home.js";
import Signup from "./onboard/signup.js";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
