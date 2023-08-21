import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export const Wrapper = styled(Card)`
  width: 100%;
  max-width: 100%;
  position: relative;
`;

export const StyledCardMedia = styled(CardMedia)`
  background-size: contain;
  height: 140px;
`;

export const StyledPokemonId = styled.span`
  position: absolute;
  left: 20px;
  top: 10px;
`;

export const StyledPokemonName = styled(Typography)`
  text-transform: capitalize;
`;
