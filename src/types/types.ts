export type PokemonListItem = {
  name: string;
  url: string;
  id?: number;
};

export type AbilityPokemon = {
  is_hidden: boolean;
  pokemon: {
    name: string;
    url: string;
  };
};

export type Ability = {
  pokemon: AbilityPokemon[];
};

interface GetResponse {
  count: number;
  next: string;
  previous: string;
}

export interface GetPokemonListResponse extends GetResponse {
  results: PokemonListItem[];
}

export interface GetPokemonAbilitiesResponse extends GetResponse {
  results: {
    name: string;
    url: string;
  }[];
}
