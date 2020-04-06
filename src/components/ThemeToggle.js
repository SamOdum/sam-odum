import React from 'react';

const ThemeToggle = () => {
  return (
    <div className="wrapper">
      <input type="checkbox" id="hide-checkbox" />
      <label htmlFor="hide-checkbox" className="toggle">
        <span className="toggle-button">
          <span className="crater crater-1" />
          <span className="crater crater-2" />
          <span className="crater crater-3" />
          <span className="crater crater-4" />
          <span className="crater crater-5" />
          <span className="crater crater-6" />
          <span className="crater crater-7" />
        </span>
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
      </label>
    </div>
  );
};

export default ThemeToggle;
