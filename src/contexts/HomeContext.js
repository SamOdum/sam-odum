import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [display, setDisplay] = useState({
    home: { display: 'block' },
    about: { display: 'none' },
  });

  return (
    <HomeContext.Provider value={[display, setDisplay]}>
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HomeContext;
