import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Sam Odum</h1>
      </div>
      <div className="mini-logo">
        <h1>S.O</h1>
      </div>
      <ThemeToggle />
      <ul>
        <li>
          <a href="#1">
            <span className="fa fa-home" />
            <span className="nav-link">Home</span>
          </a>
        </li>
        <li>
          <a href="#2">
            <span className="fa fa-user" />
            <span className="nav-link">About</span>
          </a>
        </li>
        <li>
          <a href="#3">
            <span className="fa fa-pencil" />
            <span className="nav-link">Entries</span>
          </a>
        </li>
        <li>
          <a href="#4">
            <span className="fa fa-image" />
            <span className="nav-link">Work</span>
          </a>
        </li>
        <li>
          <a href="#5">
            <span className="fa fa-envelope" />
            <span className="nav-link">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
