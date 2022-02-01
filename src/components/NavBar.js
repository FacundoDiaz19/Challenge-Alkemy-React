import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Styles.css";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navBar">
      <div className="container-fluid">
        <Link className="navbar-brand font-h1 fs-4 text-white pt-2" to="/">
          SuperHero App
        </Link>
        <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active text-white fs-5 mx-2" to="/">
              Home
            </Link>
            <Link className="nav-link text-white fs-5 mx-2" to="/MakeTeam">
              Make Your Hero Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
