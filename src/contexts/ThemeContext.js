import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    light: true,
    lightTheme: {
      foreGround: '#282c34',
      bckGround: '#fff',
      color: `#000`,
    },
    darkTheme: {
      foreGround: '#282c34',
      bckGround: `rgba(0, 0, 0, 0.5)`,
      color: '#fff',
    },
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ThemeContext;
