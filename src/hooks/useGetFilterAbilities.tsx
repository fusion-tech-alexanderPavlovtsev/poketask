import { useMemo } from "react";
import useSWR from "swr";

import { BASE_URL, fetcher, multipleFetcher } from "../utils";

import type { Ability, GetPokemonAbilitiesResponse } from "../types";

type useGetFilterAbilitiesProps = {
  abilitiesFilter: string[];
};

export const useGetFilterAbilities = ({
  abilitiesFilter,
}: useGetFilterAbilitiesProps) => {
  const abilitiesLinks = useMemo(() => {
    if (!abilitiesFilter.length) {
      return null;
    }
    return abilitiesFilter.map((f) => `${BASE_URL}/ability/${f}`);
  }, [abilitiesFilter]);

  const {
    data: abilitiesWithDetailedInfo,
    error: abilitiesWithDetailedInfoError,
    isLoading: abilitiesWithDetailedInfoLoading,
  } = useSWR<Ability[]>(abilitiesLinks, multipleFetcher);

  const { data: abilitiesListFirstRawRes } =
    useSWR<GetPokemonAbilitiesResponse>(`/ability`, fetcher);

  const {
    data: abilitiesListRawRes,
    error: abilitiesListRawResError,
    isLoading: abilitiesListRawLoading,
  } = useSWR<GetPokemonAbilitiesResponse>(
    abilitiesListFirstRawRes?.count
      ? `/ability?limit=${abilitiesListFirstRawRes?.count}`
      : null,
    fetcher
  );

  const filterAbilitiesNamesList = useMemo(() => {
    if (!abilitiesListRawRes?.results || !abilitiesListRawRes?.results.length) {
      return [];
    }
    return abilitiesListRawRes?.results.map((ability) => ability.name);
  }, [abilitiesListRawRes]);

  const error = abilitiesWithDetailedInfoError || abilitiesListRawResError;
  const loading = abilitiesWithDetailedInfoLoading || abilitiesListRawLoading;

  return {
    abilitiesWithDetailedInfo,
    filterAbilitiesNamesList,
    abilitiesRequestsError: error,
    abilitiesRequestsLoading: loading,
  };
};
