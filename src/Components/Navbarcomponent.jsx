import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link

const NavbarComponent = () => {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li id="homeNavBarPart"><Link to="/">Home</Link></li>
          <li id="sideProjectsNavBarPart"><Link to="/SideProjects">Sides Projects</Link></li>
          <li id="cvNavBarPart"><Link to="/CVPage">CV</Link></li>
          <li id="contactNavBarPart"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarComponent;