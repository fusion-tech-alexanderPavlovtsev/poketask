import { useMemo } from "react";
import useSWR from "swr";

import { PAGE_SIZE, fetcher, multipleFetcher } from "../utils";

import type { GetPokemonListResponse } from "../types";
import type { PokemonRes } from "../models";

type usePokemonsProps = {
  isAbilitiesFilterActive: boolean;
  offset: number;
};

export const useGetPokemons = ({
  isAbilitiesFilterActive,
  offset,
}: usePokemonsProps) => {
  const {
    data: pokemonsList,
    error: pokemonsListError,
    isLoading: pokemonsListLoading,
  } = useSWR<GetPokemonListResponse>(
    !isAbilitiesFilterActive
      ? `/pokemon?limit=${PAGE_SIZE}&offset=${offset}`
      : null,
    fetcher
  );

  const pokemonsLinks = useMemo(
    () =>
      pokemonsList?.results.length
        ? pokemonsList?.results.map((pokemon) => pokemon.url)
        : null,
    [pokemonsList]
  );

  const {
    data: pokemonsWithDetailedInfoRes,
    error: pokemonsWithDetailedInfoResError,
    isLoading: pokemonsWithDetailedInfoResLoading,
  } = useSWR<PokemonRes[]>(pokemonsLinks, multipleFetcher);

  const error = pokemonsListError || pokemonsWithDetailedInfoResError;
  const loading = pokemonsListLoading || pokemonsWithDetailedInfoResLoading;
  return {
    pokemonsList,
    pokemonsWithDetailedInfoRes,
    pokemonsRequestsError: error,
    pokemonsRequestsLoading: loading,
  };
};
