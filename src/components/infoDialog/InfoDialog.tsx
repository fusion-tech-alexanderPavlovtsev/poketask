import { FC } from "react";
import { Modal } from "@mui/material";

import {
  StyledPokemonLeftStatsCard,
  StyledPokemonRightInfoCard,
  StyledSubsection,
  Wrapper,
} from "./styled";

import type { Pokemon } from "../../models";

type InfoDialogProps = {
  open: boolean;
  handleClose: () => void;
  pokemon: Pokemon | null;
};

export const InfoDialog: FC<InfoDialogProps> = ({
  open,
  handleClose,
  pokemon,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Wrapper>
        <StyledPokemonLeftStatsCard>
          <div className="info-dialog__pokemon-id">#{pokemon?.id}</div>
          <div className="info-dialog__pokemon-name">{pokemon?.name}</div>
          <div className="info-dialog__pokemon-image">
            <img src={pokemon?.image} alt={pokemon?.name} />
          </div>
          <div className="info-dialog__pokemon-types">
            Types:
            {pokemon?.types.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </div>
          <div className="info-dialog__pokemon-stats">
            <div>
              Height: <span>{pokemon?.height}</span>
            </div>
            <div className="info-dialog__pokemon-stats">
              Weight: <span>{pokemon?.weight}</span>
            </div>
          </div>
        </StyledPokemonLeftStatsCard>
        <StyledPokemonRightInfoCard>
          <StyledSubsection>
            <h4>Abilities</h4>
            <ul className="info-dialog__pokemon-abilities">
              {pokemon?.abilities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </StyledSubsection>
          <StyledSubsection>
            <h4>Base Stats</h4>
            <div className="info-dialog__pokemon-stats">
              {pokemon?.stats.map((s) => (
                <div
                  className="info-dialog__pokemon-stats-item"
                  key={s.stat.url}
                >
                  <div className="info-dialog__pokemon-stats-name">
                    {s.stat.name}
                  </div>
                  <div>{s.base_stat}</div>
                </div>
              ))}
            </div>
          </StyledSubsection>
        </StyledPokemonRightInfoCard>
      </Wrapper>
    </Modal>
  );
};
