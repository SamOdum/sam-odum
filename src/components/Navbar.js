import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import HomeContext from '../contexts/HomeContext';

const Navbar = () => {
  /* I'm passing over 'display' with a comma because 
  I'm only using the context's 'setDisplay' method */
  const [, setDisplay] = useContext(HomeContext);
  const handleAbout = () => {
    setDisplay({
      home: { display: 'none' },
      about: { display: 'block' },
    });
  };
  const handleHome = () => {
    setDisplay({
      home: { display: 'block' },
      about: { display: 'none' },
    });
  };
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
          <NavLink className="anchor-link" to="/home" onClick={handleHome}>
            <span className="fa fa-home" />
            <span className="nav-link">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="anchor-link" to="/about" onClick={handleAbout}>
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
