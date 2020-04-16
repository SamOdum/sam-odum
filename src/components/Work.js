import React, { useContext } from 'react';
import PortfolioPiece from './PortfolioPiece';
import PortfolioContext from '../contexts/PortfolioContext';

const Work = () => {
  /* Using a comma to gloss over 'setPortfolio'  */
  const [portfolio, ,] = useContext(PortfolioContext);

  return (
    <div className="slide" id="4">
      <div className="content work">
        {portfolio.map((item) => (
          <PortfolioPiece
            key={item.key}
            name={item.name}
            description={item.description}
            imageBig={item.imageBig}
            imageSmall={item.imageSmall}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
