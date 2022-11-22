import { useState } from "react";
import axios from "axios";
import { initialPokemon } from "../data/initialPokemon";

export const useAxios = () => {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      const selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      )
      setData(data);
    } catch (error) {
      setError('Soy un error');
    }
    setIsLoading(false);
  }

  return { data, isLoading, error, handleSubmit };
}