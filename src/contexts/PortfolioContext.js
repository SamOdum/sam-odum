import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import imageBig from '../imgs/work/first_big_item.jpg';
import imageSmall from '../imgs/work/first_item.jpg';
import imageBig1 from '../imgs/work/FaceApp-Project-Presentation.jpg';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([
    {
      id: '01',
      name: 'Face App',
      description: 'Click for details',
      imageBig: imageBig1,
      imageSmall: imageBig1,
    },
    {
      id: '02',
      name: 'Another One',
      description: "the wonderful one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      id: '03',
      name: 'Still Another',
      description: 'to check and be doubly sure',
      imageBig,
      imageSmall,
    },
    {
      id: '04',
      name: 'Best First',
      description: "the first one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      id: '05',
      name: 'Another One',
      description: "the wonderful one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      id: '06',
      name: 'Still Another',
      description: 'to check and be doubly sure',
      imageBig,
      imageSmall,
    },
    {
      id: '07',
      name: 'Best First',
      description: "the first one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      id: '08',
      name: 'Another One',
      description: "the wonderful one I'm testing",
      imageBig,
      imageSmall,
    },
    {
      id: '09',
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
  children: PropTypes.object.isRequired,
};

export default PortfolioContext;
