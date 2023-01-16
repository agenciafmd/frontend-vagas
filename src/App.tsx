import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import { Slide, Slider } from "./components/Slider";

import pokeHome from "./assets/img/pokeScarViolet.jpg";
import pokeOcean from "./assets/img/pokeOcean.png";
import pokeSky from "./assets/img/pokeLigthSky.jpg";
import { getPokemons, iPokeDetails } from "./services/getPoke";
import { ChoosenStyled } from "./styles/styles";
import List from "./components/List";
import Card from "./components/List/Card";
import { setingsHeader,setingsCard } from "./services/sliderSetings";
import Form from "./components/Form";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
  const [poke, setPoke] = useState<iPokeDetails | null>(null);
   const [ btnOn, setBtnOn ] = useState(true)

  useEffect(() => {
    const addPoke = async () => {
      const pokeList = await getPokemons();
      if (pokeList) {
        setPoke(pokeList);
      }
    };
    if (poke == null) {
      addPoke();
    }
  }, [poke]);


  const getInitialPoke = () => {
    const choosenInitial = [] as iPokeDetails[]
    const bulba = poke?.find((pokes) => {
      return pokes.name === "bulbasaur";
    });
    const charmander = poke?.find((pokes) => {
      return pokes.name === "charmander";
    });
    const squirtle = poke?.find((pokes) => {
      return pokes.name === "squirtle";
    });

    if(bulba !== undefined && charmander !== undefined && squirtle !== undefined){
       choosenInitial.push(bulba,charmander,squirtle)
       return choosenInitial;
    }
  };
  const initial = getInitialPoke()

  return (
    <>
      <Header />
      <Slider card={false} setings={setingsHeader}>
        <Slide>
          <img src={pokeHome} alt="" />
          <h2>Scarlet e Violet</h2>
          <p>
            Lembre de visitar o mais novo jogo de pokemon
          </p>
        </Slide>
        <Slide>
          <img src={pokeOcean} alt="" />
          <h2>A beleza do Mundo</h2>
          <p>As incínveis beleza que podem ser encontradas no mundo de pokemon</p>
        </Slide>
        <Slide>
          <img src={pokeSky} alt="" />
          <h2>A Mais Raros e Poderosos</h2>
          <p>Desafie-se a tentar capturar os mais raros e poderoso que rodeiam o universo de pokemon!</p>
        </Slide>
      </Slider>
      <ChoosenStyled>
        <h2 id="choosen">Faça sua Escolha! </h2>
        <List>
           {initial?.length && initial.map( poke => <Card name={poke.name} url={poke.url} slideCard={false} setOn={setBtnOn} on={btnOn}/>)}
        </List>
      </ChoosenStyled>
      <Slider card={true} setings={setingsCard}>
          {poke && poke.map(poke => <Slide>
            <Card name={poke.name} url={poke.url} slideCard={true} setOn={setBtnOn} on={btnOn}/>
        </Slide>)}
      </Slider>
      <Form />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
