import React from "react";
import globeImage from '../assets/images/Globe.svg';

function Navbar() {
  return (
    <nav>
      <img src={globeImage} alt="globe" />
      <h2>my travel journal</h2>
    </nav>
  );
}

export default Navbar;
