import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from 'react-router-dom';
import { routesMap } from "../../app/routes";

import { HeaderSx } from "./styles";

export const Header = () => {
  return (
    <Stack sx={HeaderSx}>
      <Typography>Strs Tables</Typography>
      <menu>
        <ul>
          {Object.keys(routesMap).map((item) => (
            <li key={item}>
              <Link to={routesMap[item as keyof typeof routesMap]}>{item}</Link>
            </li>
          ))}
        </ul>
      </menu>
    </Stack>
  );
};
