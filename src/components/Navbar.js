import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div id="navbar">
      <div className="left__nav">
        <NavLink to="/" exact>
          Yanna Skorokhodova
        </NavLink>
      </div>
      <div className="right__nav">
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
