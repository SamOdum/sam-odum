import React from 'react';
import profilePix from '../imgs/sam-odum.jpg';

const Home = () => {
  return (
    <div className="slide" id="1">
      <div className="content profile">
        <div className="profile-image">
          <img src={profilePix} alt="Sam Odum" />
        </div>
        <div className="profile-text">
          <h1 className="profile-text__heading">
            <span>Hi, I&apos;m </span>
            Sam Odum
          </h1>
          <p className="profile-text__paragraph">
            You&apos;re welcome to my tiny corner of the digital universe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
