import { FC } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { StyledPopper } from "./styled";
import { Listbox } from "../listbox";

type FilterProps = {
  items: string[];
  currentActiveFilterItems: string[];
  onItemChange: (newValue: string[]) => void;
  title: string;
};

export const Filter: FC<FilterProps> = ({
  items,
  title,
  onItemChange,
  currentActiveFilterItems,
}) => {
  return (
    <Autocomplete
      id="filter"
      sx={{ width: "100%" }}
      disableListWrap
      PopperComponent={StyledPopper}
      ListboxComponent={Listbox}
      options={items}
      multiple
      renderInput={(params) => <TextField {...params} label={title} />}
      onChange={(_, value) => onItemChange(value)}
      value={currentActiveFilterItems}
      renderOption={(props, option, state) =>
        [props, option, state.index] as React.ReactNode
      }
    />
  );
};
