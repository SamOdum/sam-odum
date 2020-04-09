import React from 'react';
import '../styles/App.scss';
import Navbar from './Navbar';
import Slides from './Slides';
import { HomeProvider } from '../contexts/HomeContext';

function App() {
  return (
    <HomeProvider>
      <div className="App">
        <Navbar />
        <Slides />
      </div>
    </HomeProvider>
  );
}

export default App;
