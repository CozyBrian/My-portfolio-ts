import React from 'react';
import CodeHero from './components/codehero/hero.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="m-0 bg-sky-900">
      <div className="min-h-screen flex flex-col scroll-smooth">
        <Header />
        <CodeHero />
      </div>
      <div className="min-h-screen flex flex-col justify-center scroll-smooth">
        
      </div>
    </div>
  );
}

export default App;
