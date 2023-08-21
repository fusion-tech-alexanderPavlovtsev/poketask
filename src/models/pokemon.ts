type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonRes = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  stats: Stat[];
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  types: PokemonType[];
};

export type Pokemon = {
  abilities: string[];
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  image: string;
  types: string[];
};
