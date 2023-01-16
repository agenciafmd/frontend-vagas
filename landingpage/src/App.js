import { Carrossel } from './components/Carousel/carrossel';
import { Header } from './components/Header/header';
import { useState } from "react";
import { useEffect } from "react";
import { Alive } from './components/Alive/alive';
import { Dead } from './components/Dead/dead';
import { Newslatter } from './components/Newslatter/newslatter';
import { Footer } from './components/Footer/footer';



function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
    <Header/>
    <Carrossel/>
    <Alive characters={characters}/>
    <Dead characters={characters}/>
    <Newslatter/>
    <Footer/>
    </div>
  );
}

export default App;
