import { TextField } from "@mui/material";
import { ChangeEvent, useCallback } from "react";
import { SearchProps } from "./types";

export const Search = ({ searchAction }: SearchProps) => {
  const handleSearchAction = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      searchAction(event.target.value);
    },
    [searchAction]
  );

  return (
    <TextField
      label="Search"
      variant="outlined"
      placeholder="{tableName}"
      onChange={handleSearchAction}
    />
  );
};
