import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { useCallback, useMemo } from "react";
import { TableHeadProps } from '../types';

export const TableHeadComponent = ({
  columns,
  order,
  orderBy,
  onRequestSort,
}: TableHeadProps) => {
  const createSortHandler = useCallback(
    (property: any) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    },
    [onRequestSort]
  );

  const headContent = useMemo(
    () =>
      columns.map((column) => (
        <TableCell
          key={column.id}
          sortDirection={orderBy === column.id ? order : false}
        >
          <TableSortLabel
            hideSortIcon={!column.sortable}
            disabled={!column.sortable}
            active={orderBy === column.id}
            direction={orderBy === column.id ? order : "asc"}
            onClick={createSortHandler(column.id)}
          >
            {column.label}
          </TableSortLabel>
        </TableCell>
      )),
    [columns, createSortHandler, order, orderBy]
  );

  return (
    <TableHead>
      <TableRow>{headContent}</TableRow>
    </TableHead>
  );
};
