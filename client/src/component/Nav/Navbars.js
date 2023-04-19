import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbars.css";
import logo from "./img/evangadi-logo-home.png";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { useLogout } from "../../Hook/userLogout";
import { useUserContext } from "../../Hook/useUserContext";
import { useNavigate } from "react-router-dom";
function Navbars() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div id="header">
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container className="linkText">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggles"
          >
            <LegendToggleIcon className="toggl" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto link-wrapper">
              <Nav.Link href="#features" className="links-wraper">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="links-wraper">
                How It Work
              </Nav.Link>
              <Button variant="primary" className="btn-wraper">
                <a
                  className="btn btn-blue "
                  id="btnbtn"
                  href="#"
                  onClick={handleClick}
                >
                  {!user ? "SIGN IN " : " Logout"}
                </a>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
