import { FC } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import {
  StyledCardMedia,
  StyledPokemonId,
  StyledPokemonName,
  Wrapper,
} from "./styled";

import type { Pokemon } from "../../models";
import { DEFAULT_POKEMON_AVATAR_URL } from "../../utils";

type CardProps = {
  pokemon: Pokemon;
  handleSelectPokemon: (pokemon: Pokemon) => void;
};

export const PokemonCard: FC<CardProps> = ({
  pokemon,
  handleSelectPokemon,
}) => {
  const handleOpenPokemonInfoModal = () => {
    handleSelectPokemon(pokemon);
  };

  const pokemonImage = pokemon.image || DEFAULT_POKEMON_AVATAR_URL;
  return (
    <Wrapper>
      <StyledPokemonId>{pokemon.id}</StyledPokemonId>
      <StyledCardMedia image={pokemonImage} title={pokemon.name} />
      <CardContent>
        <StyledPokemonName gutterBottom variant="h5">
          {pokemon.name}
        </StyledPokemonName>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpenPokemonInfoModal}>
          Show More Info
        </Button>
      </CardActions>
    </Wrapper>
  );
};
