import React, { useState, useRef, useEffect } from "react";

import logo from "../images/GigCar.svg";
import { createRoot } from "react-dom/client";
import { ReactSVG } from "react-svg";

import "mdbreact/dist/css/mdb.css";

import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

import { Link } from "react-router-dom";

export default function Navigation() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowNavExternal3(false);
    }
  };
  // const toggleCollapse = () => {
  //   // console.log(`original value: ${showNavExternal3}`);
  //   setShowNavExternal3(!showNavExternal3);
  //   // console.log(`new value: ${!showNavExternal3}`);
  // };

  const toggleCollapse = () => {
    setShowNavExternal3((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setShowNavExternal3(false);
  };

  return (
    <div className="navbar-wrapper" ref={navbarRef}>
      <MDBNavbar className="rounded-0 d-flex justify-content-start align-items-center p-3 m-0 position-fixed">
        {/* <MDBContainer fluid className="container-lg"> */}
        <Link className="z-100 navbar-brand align-self-start" to="#">
          {/* <img src={logo} alt="logo"></img> */}
          <ReactSVG src={logo} />
          {/* <Logo /> */}
        </Link>

        <MDBNavbarToggler
          className="ms-auto"
          type="button"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleCollapse}

          // style={{ height: maxContent }}
        >
          <MDBIcon className="navbar-toggler-icon" icon="bars" />
        </MDBNavbarToggler>
        {/* </MDBContainer> */}
      </MDBNavbar>

      <MDBCollapse
        isOpen={showNavExternal3}
        className={`dropdown ${showNavExternal3 ? "show" : ""}`}
        // ref={collapseRef}
      >
        <div className="w-100 linkBox bg-light p-0 rounded-0">
          <Link to="#" onClick={handleLinkClick}>
            <button className="btn btn-primary d-block rounded-0 p-4">
              Login
            </button>
          </Link>

          <Link to="#" onClick={handleLinkClick}>
            <button className="btn btn-primary d-block rounded-0 p-4">
              Signup
            </button>
          </Link>
          <Link to="#" onClick={handleLinkClick}>
            <button className="btn btn-primary d-block rounded-0 p-4">
              Learn more
            </button>
          </Link>
        </div>
      </MDBCollapse>
    </div>
  );
}
