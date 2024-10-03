
const NavbarComponent =() =>{ // Rename the function
  return <>
        <nav className="navBar">
          <ul>
            <li id="homeNavBarPart"><a  href="#home">Home</a></li>
            <li id="sideProjectsNavBarPart"><a  href="#about">Sides Projects</a></li>
            <li id="cvNavBarPart"><a  href="#projects">CV</a></li>
            <li id="contactNavBarPart"><a  href="#contact">Contact</a></li>
          </ul>
        </nav>
    </>
  
}

export default NavbarComponent; // Update the export statement