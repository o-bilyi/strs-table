import { SxProps, Theme } from '@mui/material';

export const toolbarFiltersSx: SxProps<Theme> = (theme) => ({
  border: '1px solid #000',
  padding: '10px',
  width: '100%',
  gap: '5px',
  marginBottom: '20px',
  boxSizing: 'border-box',
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
  }
})

export const tablePaginationSx: SxProps = {
  '&.MuiTablePagination-root': {
    display: 'flex',
    justifyContent: 'center',
  }
}