import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

const Slides = () => {
  return (
    <div className="slides">
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/work" exact>
        <Work />
      </Route>
      <Route path="/blog" exact>
        <Blog />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};

export default Slides;
