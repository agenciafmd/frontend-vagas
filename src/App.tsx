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


function App() {
  const [poke, setPoke] = useState<iPokeDetails | null>(null);

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
          <h2>O mundo dos Pokemons</h2>
          <p>
            Entre e descubra Entre e descubra o mundo magico e bla vlo
            auihdaiuuaif njshahfijka
          </p>
        </Slide>
        <Slide>
          <img src={pokeOcean} alt="" />
          <h2>AWA</h2>
          <p>AWA AWA AWA AWA</p>
        </Slide>
        <Slide>
          <img src={pokeSky} alt="" />
          <h2>ZAP TROVAO </h2>
          <p>NAO SEI O MUNDI</p>
        </Slide>
      </Slider>
      <ChoosenStyled>
        <h2 id="choosen">Faça sua Escolha! </h2>
        <List>
           {initial?.length && initial.map( poke => <Card name={poke.name} url={poke.url} slideCard={false}/>)}
        </List>
      </ChoosenStyled>
      <Slider card={true} setings={setingsCard}>
          {poke && poke.map(poke => <Slide>
            <Card name={poke.name} url={poke.url} slideCard={true}/>
        </Slide>)}
      </Slider>
    </>
  );
}

export default App;
