import React, { useMemo } from "react";
import useSWR from "swr";

import { PAGE_SIZE, extractPokemonUrls, multipleFetcher } from "../utils";

import type { PokemonRes } from "../models";
import type { Ability } from "../types";

type UseGetPokemonsFromAbilitiesProps = {
  abilitiesWithDetailedInfo?: Ability[];
  offset: number;
};

export const useGetPokemonsFromAbilities = ({
  abilitiesWithDetailedInfo,
  offset,
}: UseGetPokemonsFromAbilitiesProps) => {
  const [
    extractedPokemonFromAbilitiesLength,
    setExtractedPokemonFromAbilitiesLength,
  ] = React.useState(0);

  const pokemonsLinksFromAbilities = useMemo(() => {
    if (!abilitiesWithDetailedInfo?.length) {
      return null;
    }
    let extractedPokemonUrls: string[] = [];
    abilitiesWithDetailedInfo.forEach((a) =>
      extractedPokemonUrls.push(...extractPokemonUrls(a.pokemon))
    );
    setExtractedPokemonFromAbilitiesLength(extractedPokemonUrls.length);
    extractedPokemonUrls = extractedPokemonUrls.slice(
      offset,
      offset + PAGE_SIZE
    );
    return extractedPokemonUrls;
  }, [abilitiesWithDetailedInfo, offset]);

  const {
    data: pokemonsFromAbilities,
    error: pokemonsFromAbilitiesRequestsError,
    isLoading: pokemonsFromAbilitiesRequestsLoading,
  } = useSWR<PokemonRes[]>(pokemonsLinksFromAbilities, multipleFetcher);

  return {
    extractedPokemonFromAbilitiesLength,
    pokemonsFromAbilities,
    pokemonsFromAbilitiesRequestsError,
    pokemonsFromAbilitiesRequestsLoading,
  };
};
