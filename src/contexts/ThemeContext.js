import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ThemeContext;
