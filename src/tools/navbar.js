import React, { useState } from "react";
import logo from "../images/carLogo.svg";
// import { createRoot } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { ReactSVG } from "react-svg";

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
      <MDBNavbar className="position-fixed d-flex align-items-center w-auto">
        <MDBContainer fluid>
          <Link className="z-100 navbar-brand align-self-start" href="#">
            <ReactSVG
              className="logo"
              src={logo}
              // style={{ height: "100px", width: "300px" }}
            />
            {/* <img style={(scale = ".5")} className="" src={logo} alt=""></img> */}
          </Link>

          <MDBNavbarToggler
            className=""
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon="bars" />
          </MDBNavbarToggler>
        </MDBContainer>
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
