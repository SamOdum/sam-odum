import React, { createContext, useState } from 'react';

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

export default HomeContext;
