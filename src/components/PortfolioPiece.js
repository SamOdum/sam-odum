import React from 'react';
import PropTypes from 'prop-types';

const PorfolioPiece = ({ name, description, imageBig, imageSmall }) => {
  return (
    <div className="item">
      <div className="thumb">
        <a href={imageBig} data-lightbox="image-1">
          <div className="hover-effect">
            <div className="hover-content">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        </a>
        <div className="image">
          <img src={imageSmall} alt={name} />
        </div>
      </div>
    </div>
  );
};

PorfolioPiece.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageBig: PropTypes.string.isRequired,
  imageSmall: PropTypes.string.isRequired,
};

export default PorfolioPiece;
