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
            <i className="fa fa-home" />
            <em>Home</em>
          </a>
        </li>
        <li>
          <a href="#2">
            <i className="fa fa-user" />
            <em>About</em>
          </a>
        </li>
        <li>
          <a href="#3">
            <i className="fa fa-pencil" />
            <em>Entries</em>
          </a>
        </li>
        <li>
          <a href="#4">
            <i className="fa fa-image" />
            <em>Work</em>
          </a>
        </li>
        <li>
          <a href="#5">
            <i className="fa fa-envelope" />
            <em>Contact</em>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
