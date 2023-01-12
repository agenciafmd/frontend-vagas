import React from 'react';
import './App.css';
import { About } from './components/About';
import Footer from './components/base/Footer';
import Header from './components/base/Header';
import { Techs } from './components/Techs';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Techs />
      <Footer />
    </div>
  );
}

export default App;
