import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import ThemeContext from '../contexts/ThemeContext';

const Navbar = () => {
  const [theme] = useContext(ThemeContext);
  const { light, lightTheme, darkTheme } = theme;
  const scheme = light ? lightTheme : darkTheme;

  return (
    <nav style={scheme}>
      <div className="logo">
        <h1>Sam Odum</h1>
      </div>
      <div className="mini-logo">
        <h1>S.O</h1>
      </div>
      <ThemeToggle />
      <ul>
        <li>
          <NavLink className="anchor-link" to="/home" style={scheme}>
            <span className="fa fa-home" />
            <span className="nav-link">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="anchor-link" to="/about">
            <span className="fa fa-user" />
            <span className="nav-link">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="anchor-link" to="/work">
            <span className="fa fa-image" />
            <span className="nav-link">Work</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="anchor-link" to="/blog">
            <span className="fa fa-pencil" />
            <span className="nav-link">Blog</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="anchor-link" to="/contact">
            <span className="fa fa-envelope" />
            <span className="nav-link">Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
