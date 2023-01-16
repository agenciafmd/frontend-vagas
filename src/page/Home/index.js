import { useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewLetter from "../../components/NewLetter";
import PokemonModal from "../../components/PokemonModal";
import Pokemons from "../../components/Pokemons";
import PokemonsDetails from "../../components/PokemonsDetails";
import { Container } from "./styles";

function Home() {
  const [list, setList] = useState([]);
  const [listOthers, setListOthers] = useState([]);
  const [pokeDetails, setPokeDetails] = useState({});
  const [currentPokemon, setcurrentPokemon] = useState();

  const isMobile = useMediaQuery("(max-width:900px)");

  async function fetchIndividualPokemons(listResults) {
    const newDetails = {};

    for (const result of listResults) {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${result.name}`
      );
      newDetails[result.name] = {
        name: res.data.name, // da pra tirar isso se quiser
        image: res.data.sprites.front_default,
        star: res.data.stats.filter((stat) => stat.stat.name === "attack")[0],
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

  function onClickPokemon(details) {
    setcurrentPokemon(details);
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <Container>
      <Header isMobile={isMobile} />
      <Banner />
      {!!currentPokemon?.name && (
        <PokemonModal
          isMobile={isMobile}
          open={true}
          name={currentPokemon.name}
          image={currentPokemon.image}
          base_stat={currentPokemon.star.base_stat}
          effort={currentPokemon.star.effort}
          statName={currentPokemon.star.stat.name}
          statUrl={currentPokemon.star.stat.url}
          onClose={() => {
            setcurrentPokemon(null);
          }}
        />
      )}
      <Pokemons
        list={list}
        details={pokeDetails}
        onClickPokemon={onClickPokemon}
      />
      <PokemonsDetails list={listOthers} details={pokeDetails} />
      <NewLetter />
      <Footer />
    </Container>
  );
}

export default Home;
