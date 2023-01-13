import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import NewLetter from "../../components/NewLetter";
import Pokemons from "../../components/Pokemons";
import { Container } from "./styles";

function Home() {
  const [list, setList] = useState([]);

  async function getPokemon() {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4")
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
      <Pokemons list={list} />
      <NewLetter />
    </Container>
  );
}

export default Home;