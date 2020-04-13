import React from 'react';
import PortfolioPiece from './PortfolioPiece';
import imageBig from '../imgs/work/first_big_item.jpg';
import imageSmall from '../imgs/work/first_item.jpg';

const Work = () => {
  const portfolio = [
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
  ];
  return portfolio.map((item) => (
    <div className="slide" id="4" key={item.key}>
      <div className="content fourth-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <PortfolioPiece
                name={item.name}
                description={item.description}
                imageBig={item.imageBig}
                imageSmall={item.imageSmall}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Work;
