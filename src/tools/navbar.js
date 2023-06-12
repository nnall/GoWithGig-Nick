import React, { useState } from "react";
// import { icon } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.svg";
// import { createRoot } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { ReactSVG } from "react-svg";

// import carLogo from "../images/carLogo.svg";

import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar className="navbar position-fixed rounded-0 d-flex justify-content-start align-items-center p-3">
        {/* <MDBContainer fluid className="container-lg"> */}
        <Link className="z-100 navbar-brand align-self-start" href="#">
          <img src={logo} alt="logo" />
        </Link>

        <MDBNavbarToggler
          className="bg-light ms-auto"
          type="button"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavExternal3(!showNavExternal3)}
        >
          <MDBIcon className="navbar-toggler-icon bg-light" icon="bars" />
        </MDBNavbarToggler>
        {/* </MDBContainer> */}
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3} className="position-fixed dropdown">
        <div className="bg-light shadow-3 p-0">
          <MDBBtn block className="m-0 drawer rounded-0 p-4" color="dark">
            <Link>Login</Link>
          </MDBBtn>
          <MDBBtn block className="m-0 drawer rounded-0 p-4" color="dark">
            <Link>Signup</Link>
          </MDBBtn>
          <MDBBtn block className="m-0 drawer rounded-0 p-4" color="dark">
            <Link>Learn More</Link>
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}
