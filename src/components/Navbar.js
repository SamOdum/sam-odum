import React, { useContext } from 'react';
import ThemeToggle from './ThemeToggle';
import HomeContext from '../contexts/HomeContext';

const Navbar = () => {
  const [display, setDisplay] = useContext(HomeContext);
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
          <a href="#1" onClick={handleHome}>
            <span className="fa fa-home" />
            <span className="nav-link">Home</span>
          </a>
        </li>
        <li>
          <a href="#2" onClick={handleAbout}>
            <span className="fa fa-user" />
            <span className="nav-link">About</span>
          </a>
        </li>
        <li>
          <a href="#4">
            <span className="fa fa-image" />
            <span className="nav-link">Work</span>
          </a>
        </li>
        <li>
          <a href="#3">
            <span className="fa fa-pencil" />
            <span className="nav-link">Blog</span>
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
