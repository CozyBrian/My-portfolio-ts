import React from 'react';
import ContactView from './components/Contact/contact.component';
import CodeHero from './components/Hero/codehero/hero.component';
import Footer from './components/Layout/footer/footer.component';
import Header from './components/Layout/header/header.component';
import ProjectSection from './components/Projects/Projects';
import SkillView from './components/Skills/skills';

function App() {
  return (
    <div className="m-0 bg-sky-900">
      <div className="min-h-screen flex flex-col scroll-smooth">
        <Header />
        <CodeHero />
      </div>
      <div className="min-h-screen flex flex-col justify-center scroll-smooth">
        <SkillView />
      </div>
      <div className="min-h-screen flex flex-col justify-center scroll-smooth">
        <ProjectSection />
      </div>
      <ContactView />
      <Footer />
    </div>
  );
}

export default App;
