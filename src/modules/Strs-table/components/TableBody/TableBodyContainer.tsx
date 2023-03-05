import { useMemo } from "react";
import { TableBodyContent } from "./TableBody";
import { getComparator, stableSort } from "../../utils";
import { TableBodyContainerProps } from './types';
import { GenericItem } from '../../types';

export const TableBodyContainer = <T extends GenericItem, >({
  data,
  page,
  rowsPerPage,
  order,
  orderBy,
  columns,
}: TableBodyContainerProps<T>) => {
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = useMemo(
    () => (page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0),
    [data.length, page, rowsPerPage]
  );

  const sortedData = useMemo(
    () =>
      stableSort<T>(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [data, order, orderBy, page, rowsPerPage]
  );

  return <TableBodyContent columns={columns} data={sortedData} emptyRows={emptyRows} />;
};
