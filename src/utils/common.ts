import type { Pokemon, PokemonRes } from "../models";
import type { AbilityPokemon } from "../types";

export const DOTS = "...";

export const PAGE_SIZE = 20;

export const getProcessedPokemon = (pokemon: PokemonRes): Pokemon => {
  return {
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites["front_default"],
    types: pokemon.types.map((type) => type.type.name),
    abilities: pokemon.abilities.map((ability) => ability.ability.name),
    stats: pokemon.stats,
    weight: pokemon.weight,
    height: pokemon.height,
  };
};

export const getProcessedPokemons = (pokemons: PokemonRes[]): Pokemon[] => {
  return pokemons.map(getProcessedPokemon);
};

export const getTotalPagesCount = (
  totalCount: number,
  pageSize: number = PAGE_SIZE
) => Math.ceil(totalCount / pageSize);

export const extractPokemonUrls = (abilityPokemon: AbilityPokemon[]) => {
  return abilityPokemon.map((p) => p.pokemon.url);
};
