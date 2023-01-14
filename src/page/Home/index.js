import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewLetter from "../../components/NewLetter";
import Pokemons from "../../components/Pokemons";
import PokemonsDetails from "../../components/PokemonsDetails";
import { Container } from "./styles";

function Home() {
  const [list, setList] = useState([]);
  const [listOthers, setListOthers] = useState([]);
  const [pokeDetails, setPokeDetails] = useState({});

  async function fetchIndividualPokemons(listResults) {
    const newDetails = {};

    for (const result of listResults) {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${result.name}`
      );
      newDetails[result.name] = {
        name: res.data.name, // da pra tirar isso se quiser
        image: res.data.sprites.front_default,
      };

      setPokeDetails({
        ...pokeDetails,
        ...newDetails,
      });
    }
  }

  function fetchPokemonList() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8")
      .then(function (response) {
        const firstFour = response.data.results.slice(0, 4);
        const others = response.data.results.slice(4);
        setList(firstFour);
        setListOthers(others);
        fetchIndividualPokemons(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);
  // console.log("new", listOthers);

  return (
    <Container>
      <Header />
      <Banner />
      <Pokemons list={list} details={pokeDetails} />
      <PokemonsDetails list={listOthers} details={pokeDetails} />
      <NewLetter />
      <Footer />
    </Container>
  );
}

export default Home;
