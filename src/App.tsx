import React from 'react';
import './App.css';
import { About } from './components/About';
import Footer from './components/base/Footer';
import Header from './components/base/Header';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Techs } from './components/Techs';

function App() {
  return (
    <div className="App" id='home'>
      <Header />
      <About />
      <Techs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
