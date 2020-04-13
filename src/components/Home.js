import React, { useContext } from 'react';
import profilePix from '../imgs/sam-odum.jpg';
import HomeContext from '../contexts/HomeContext';

const Home = () => {
  const [display] = useContext(HomeContext);
  return (
    <div className="slide" id="1">
      <div className="content profile">
        <div className="profile-image">
          <img src={profilePix} alt="Sam Odum" />
        </div>
        <div className="profile-text" style={display.home}>
          <h1 className="profile-text__heading">
            <span>Hi, I&apos;m </span>
            Sam Odum
          </h1>
          <p className="profile-text__paragraph">
            You&apos;re welcome to my tiny corner of the digital universe.
          </p>
        </div>
        <div className="test" style={display.about}>
          <h1>About me</h1>
          <p>
            I am a fullstack developer thoroughly grounded in the basic frontend
            trio, as well as react. I mostly use Node.js, Python, Express, and
            either MongoDb or PostgreSQL for my backend and database needs.
            Beyond these, I&apos;m up to date with industry tools, processes and
            news.
          </p>
          <p>
            I am also very skilled in 3D modelling, texturing, lighting, and
            animation.
          </p>
          <p>
            I live and work from Calabar, a scenic quiet city in south-eastern
            Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
