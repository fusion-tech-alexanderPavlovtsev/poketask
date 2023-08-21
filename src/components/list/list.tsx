import { FC, useState } from "react";

import { PokemonCard } from "../pokemonCard";
import { InfoDialog } from "../infoDialog";
import { Wrapper } from "./styled";

import type { Pokemon } from "../../models";

type ListProps = {
  items: Pokemon[];
};

export const List: FC<ListProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<Pokemon | null>(null);

  const handleCloseInfoDialog = () => {
    setSelectedItem(null);
  };

  return (
    <Wrapper>
      {items.map((pokemon) => {
        return (
          <PokemonCard
            pokemon={pokemon}
            handleSelectPokemon={setSelectedItem}
            key={pokemon.id}
          />
        );
      })}
      <InfoDialog
        open={!!selectedItem}
        handleClose={handleCloseInfoDialog}
        pokemon={selectedItem}
      />
    </Wrapper>
  );
};
