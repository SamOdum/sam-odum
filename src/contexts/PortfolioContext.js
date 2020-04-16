import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import imageBig from '../imgs/work/first_big_item.jpg';
import imageSmall from '../imgs/work/first_item.jpg';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([
    {
      key: '01',
      name: 'Best First',
      description: "the first one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      key: '02',
      name: 'Another One',
      description: "the wonderful one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      key: '03',
      name: 'Still Another',
      description: 'to check and be doubly sure',
      imageBig,
      imageSmall,
    },
    {
      key: '04',
      name: 'Best First',
      description: "the first one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      key: '05',
      name: 'Another One',
      description: "the wonderful one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      key: '06',
      name: 'Still Another',
      description: 'to check and be doubly sure',
      imageBig,
      imageSmall,
    },
    {
      key: '07',
      name: 'Best First',
      description: "the first one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      key: '08',
      name: 'Another One',
      description: "the wonderful one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      key: '09',
      name: 'Still Another',
      description: 'to check and be doubly sure',
      imageBig,
      imageSmall,
    },
  ]);

  return (
    <PortfolioContext.Provider value={[portfolio, setPortfolio]}>
      {children}
    </PortfolioContext.Provider>
  );
};

PortfolioProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PortfolioContext;
