import React, { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import ContactView from "./components/Contact/contact.component";
import CodeHero from "./components/Hero/codehero/hero.component";
import Footer from "./components/Layout/footer/footer.component";
import Header from "./components/Layout/header/header.component";
import ProjectSection from "./components/Projects/Projects";
import SkillView from "./components/Skills/skills";
import ApiContextProvider from "./services/api.context";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "my-portfolio-35b84.firebaseapp.com",
  databaseURL:
    "https://my-portfolio-35b84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-portfolio-35b84",
  storageBucket: "my-portfolio-35b84.appspot.com",
  messagingSenderId: "870805883123",
  appId: "1:870805883123:web:c979664ed96d8331968f86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const homeref = useRef(null);
  const skillref = useRef(null);
  const projectref = useRef(null);
  const contactref = useRef(null);

  const pagerefs = [homeref, skillref, projectref, contactref];

  return (
    <div className="m-0 bg-slate-900" id="home">
      <Header pagerefs={pagerefs} />
      <section
        ref={homeref}
        className="min-h-screen flex flex-col justify-center child"
      >
        <CodeHero />
      </section>
      <section
        id="skills"
        ref={skillref}
        className="min-h-screen flex flex-col justify-center child"
      >
        <SkillView />
      </section>
      <section
        id="projects"
        ref={projectref}
        className="min-h-screen flex flex-col justify-center child"
      >
        <ApiContextProvider db={database}>
          <ProjectSection />
        </ApiContextProvider>
      </section>
      <section ref={contactref} className="child" id="contact">
        <ContactView />
        <Footer />
      </section>
    </div>
  );
}

export default App;
