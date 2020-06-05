import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import '../styles/App.scss';
import Navbar from './Navbar';
import Slides from './Slides';
import { HomeProvider } from '../contexts/HomeContext';
import { PortfolioProvider } from '../contexts/PortfolioContext';
import { ThemeProvider } from '../contexts/ThemeContext';

function App() {
  return (
    <Router>
      <HomeProvider>
        <PortfolioProvider>
          <ThemeProvider>
            <div className="App">
              <Navbar />
              <Switch>
                <Slides />
              </Switch>
            </div>
          </ThemeProvider>
        </PortfolioProvider>
      </HomeProvider>
    </Router>
  );
}

export default App;
