import React from "react";

import Header from "./components/Header";
import { Slide, Slider } from "./components/Slider";

import pokeHome from "./assets/img/pokeScarViolet.jpg";
import pokeOcean from "./assets/img/pokeOcean.png";
import pokeSky from "./assets/img/pokeLigthSky.jpg";

function App() {
  const setings = {
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay : 5000
    },
    loop: true,
  };

  return (
    <>
      <Header />
      <Slider setings={setings}>
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
    </>
  );
}

export default App;
