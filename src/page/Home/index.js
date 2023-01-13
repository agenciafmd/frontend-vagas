import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Pokemons from "../../components/Pokemons";
import { Container } from "./styles";

function Home() {
  const [list, setList] = useState([]);

  async function getPokemon() {
    await axios
      .get("https://www.pokemon.com/us/api/pokedex/kalos", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(function (response) {
        console.log("response", response);
        setList(response.data.results);
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
      {/* <Pokemons list={list} /> */}
    </Container>
  );
}

export default Home;
