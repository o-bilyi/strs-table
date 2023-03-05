import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { formControlSx, menuPropsSx } from "./styles";
import { FilterItemProps } from "./types";

export const FilterItem = ({
  data,
  filter,
  filterAction,
  activeItem,
}: FilterItemProps) => {
  const handleChange = (event: SelectChangeEvent<typeof activeItem>) => {
    const {
      target: { value },
    } = event;
    filterAction({ type: filter.id, value: value });
  };

  return (
    <FormControl sx={formControlSx} fullWidth>
      <InputLabel id="filter-label">{filter.id}</InputLabel>
      <Select
        value={activeItem}
        labelId="filterlabel"
        onChange={handleChange}
        input={<OutlinedInput label={filter.id} />}
        MenuProps={{ PaperProps: { sx: menuPropsSx } }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
