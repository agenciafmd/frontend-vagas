import axios from "axios";
import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Pokemons from "../../components/Pokemons";
import { Container } from "./styles";

function Home() {
  async function getPokemon() {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/", {
        params: {
          offset: 0,
          limit: 4,
        },
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <Pokemons />
    </Container>
  );
}

export default Home;
