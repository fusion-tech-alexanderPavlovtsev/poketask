import React, { useMemo } from "react";

import { Pagination } from "../../components/pagination";
import { List } from "../../components/list";
import { Filter } from "../../components/filter";
import {
  useGetPokemons,
  useGetPokemonsFromAbilities,
  useGetFilterAbilities,
} from "../../hooks";
import {
  PAGE_SIZE,
  getProcessedPokemons,
  getTotalPagesCount,
} from "../../utils";
import { Spinner, StyledNoItems, Wrapper } from "./styled";

import type { Pokemon, PokemonRes } from "../../models";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [abilitiesFilter, setAbilitiesFilter] = React.useState<string[]>([]);
  const offset = (currentPage - 1) * PAGE_SIZE;
  const isAbilitiesFilterActive = !!abilitiesFilter.length;

  const {
    pokemonsList,
    pokemonsWithDetailedInfoRes,
    pokemonsRequestsError,
    pokemonsRequestsLoading,
  } = useGetPokemons({ isAbilitiesFilterActive, offset });

  const {
    abilitiesWithDetailedInfo,
    filterAbilitiesNamesList,
    abilitiesRequestsError,
    abilitiesRequestsLoading,
  } = useGetFilterAbilities({ abilitiesFilter });

  const {
    extractedPokemonFromAbilitiesLength,
    pokemonsFromAbilities,
    pokemonsFromAbilitiesRequestsError,
    pokemonsFromAbilitiesRequestsLoading,
  } = useGetPokemonsFromAbilities({
    abilitiesWithDetailedInfo,
    offset,
  });

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleAbilitiesFilterChange = (newAbilitiesFilter: string[]) => {
    setCurrentPage(1);
    setAbilitiesFilter(newAbilitiesFilter);
  };

  const isRequestsHaveError =
    pokemonsRequestsError ||
    abilitiesRequestsError ||
    pokemonsFromAbilitiesRequestsError;

  const filteredPokemons: Pokemon[] = useMemo(() => {
    let pokemonsArrayRaw: PokemonRes[] = [];
    if (isAbilitiesFilterActive) {
      if (pokemonsFromAbilities?.length) {
        pokemonsArrayRaw = pokemonsFromAbilities;
      }
    } else if (pokemonsWithDetailedInfoRes?.length) {
      pokemonsArrayRaw = pokemonsWithDetailedInfoRes;
    }
    return pokemonsArrayRaw.length
      ? getProcessedPokemons(pokemonsArrayRaw)
      : [];
  }, [
    isAbilitiesFilterActive,
    pokemonsFromAbilities,
    pokemonsWithDetailedInfoRes,
  ]);

  const totalCount = isAbilitiesFilterActive
    ? extractedPokemonFromAbilitiesLength
    : pokemonsList?.count || 0;

  const totalPagesCount = isAbilitiesFilterActive
    ? getTotalPagesCount(extractedPokemonFromAbilitiesLength, PAGE_SIZE)
    : getTotalPagesCount(totalCount, PAGE_SIZE);

  if (isRequestsHaveError) {
    return <div>Error</div>;
  }

  let content = null;

  const requestsLoading =
    pokemonsRequestsLoading ||
    pokemonsFromAbilitiesRequestsLoading ||
    abilitiesRequestsLoading;

  if (!filteredPokemons.length && !requestsLoading) {
    content = (
      <StyledNoItems>There is no pokemons with such abilities</StyledNoItems>
    );
  } else if (requestsLoading) {
    content = <Spinner />;
  } else {
    content = (
      <>
        <List items={filteredPokemons} />
        {totalPagesCount > 1 ? (
          <div className="pagination">
            <Pagination
              totalCount={totalCount}
              onPageChange={onPageChange}
              siblingCount={2}
              currentPage={currentPage}
              pageSize={PAGE_SIZE}
            />
          </div>
        ) : null}
      </>
    );
  }

  return (
    <Wrapper>
      Test task
      <div className="filter">
        <Filter
          items={filterAbilitiesNamesList}
          currentActiveFilterItems={abilitiesFilter}
          onItemChange={handleAbilitiesFilterChange}
          title="Abilities"
        />
      </div>
      {content}
    </Wrapper>
  );
};
