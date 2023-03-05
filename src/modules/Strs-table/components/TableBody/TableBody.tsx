import { TableBodyProps } from "./types";
import TableBody from "@mui/material/TableBody";
import { TableCell, TableRow } from "@mui/material";
import { GenericItem } from '../../types';

export function TableBodyContent<T extends GenericItem>({
  data,
  columns,
  emptyRows,
}: TableBodyProps<T>) {
  return (
    <TableBody>
      {data.map((row, index) => {
        return (
          <TableRow hover tabIndex={-1} key={index}>
            {columns.map((item) => (
              <TableCell key={item.id}>{row[item.id]}</TableCell>
            ))}
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 33 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}
