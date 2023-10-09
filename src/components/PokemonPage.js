import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  let [ pokemons, setPokemons ] = useState([])
  let [ searchFilter, setSearchFilter ] =  useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(setPokemons)
  }, [])

  let onSetSearch = (e) => {
    setSearchFilter(e.target.value)
  }

  let filteredPokemons = [...pokemons].filter(pokemon => {
    return searchFilter === '' || pokemon.name.includes(searchFilter)
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br/>
      <PokemonForm />
      <br/>
      <Search onSetSearch={onSetSearch}/>
      <br/>
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
