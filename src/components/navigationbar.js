import React from 'react';

function Navbar() {
  return (
    <nav
      className="navbar"
    >
        <a
          className="navbar-brand"
          href="#"
          style={{fontWeight: 'bolder',color: "rgb(130, 85, 150)", fontSize: "2rem" }}
        >
           Yen Nguyen
        </a>

        <ul className="nav nav-underline">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#about-me"
              style={{color: "rgb(130, 85, 150)"}}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#projects"
              style={{color: "rgb(130, 85, 150)"}}
            >
              Projects
            </a>

          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              style={{color: "rgb(130, 85, 150)"}}
            >
              Contact
            </a>

          </li>
        </ul>
    
    </nav>
  );
}

export default Navbar;
