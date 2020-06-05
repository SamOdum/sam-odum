import React from 'react';
import profilePix from '../imgs/sam-odum.jpg';

const About = () => {
  return (
    <div className="slide" id="2">
      <div className="content profile">
        <div className="profile-image">
          <img src={profilePix} alt="Sam Odum" />
        </div>
        <div className="test">
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

export default About;
