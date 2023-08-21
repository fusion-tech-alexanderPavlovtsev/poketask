import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";

export const Wrapper = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  .pagination {
    margin-top: 10px;
  }
  .filter {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledNoItems = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  right: 50%;
`;
