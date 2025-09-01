import React from 'react';
import LandingPage from './components/LandingPage';
import landingPageConfig from './config/landingPageConfig';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Test if Tailwind is working */}
      <div className="bg-red-500 text-white p-4 m-4 rounded">
        TEST: If you see this with red background, Tailwind is working!
      </div>
      <LandingPage config={landingPageConfig} />
    </div>
  );
}

export default App;
