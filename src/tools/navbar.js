import React, { useState } from "react";
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
      <MDBNavbar className="position-fixed w-100">
        <MDBContainer fluid>
          <MDBNavbarToggler
            className="ms-auto"
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
