import React from 'react';
import LandingPage from './components/LandingPage';
import landingPageConfig from './config/landingPageConfig';
import './index.css';

function App() {
  return (
    <div className="App">
      <LandingPage config={landingPageConfig} />
    </div>
  );
}

export default App;
