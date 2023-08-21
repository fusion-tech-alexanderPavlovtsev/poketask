import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px;
  border-radius: 16px;
  display: flex;
  column-gap: 55px;
  padding: 10px 40px 40px 5px;
`;

export const StyledSubsection = styled.div`
  div {
    width: 100%;
  }
  h4 {
    margin-bottom: 10px;
    font-size: 18px;
  }
  ul {
    display: flex;
    column-gap: 30px;
    padding-left: 17px;
  }
  .info-dialog {
    &__pokemon-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 15px;
      row-gap: 10px;
    }
    &__pokemon-stats-name {
      color: #dc143c;
      text-transform: uppercase;
    }
  }
`;

export const StyledPokemonLeftStatsCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  padding-top: 10px;
  .info-dialog {
    &__pokemon-id {
      font-weight: 400;
      font-size: 40px;
    }
    &__pokemon-name {
      text-transform: capitalize;
    }
    &__pokemon-types {
      margin-bottom: 20px;
    }
    &__pokemon-stats {
      text-align: left;
    }
    &__pokemon-abilities {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const StyledPokemonRightInfoCard = styled.div`
  padding: 5px;
`;

export const StyledPokemonImage = styled.div<{ isDefaultAvatar: boolean }>`
  width: ${({ isDefaultAvatar }) => (isDefaultAvatar ? "50px" : "100px")};
  height: ${({ isDefaultAvatar }) => (isDefaultAvatar ? "50px" : "100px")};
  margin-top: 10px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: auto;
  }
`;
