import { SxProps, Theme } from '@mui/material/styles';

export const menuPropsSx: SxProps = {
  maxHeight: 250,
  width: 250,
};

export const formControlSx: SxProps<Theme> = (theme) => ({
  maxWidth: '300px',
  [theme.breakpoints.down("sm")]: {
    maxWidth: '100%',
  }
});