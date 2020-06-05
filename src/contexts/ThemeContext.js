import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    light: true,
    lightTheme: { color: 'white' },
    darkTheme: { backgroundColor: 'white', color: 'red' },
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeContext;
