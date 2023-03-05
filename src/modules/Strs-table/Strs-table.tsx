import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

import { tablePaginationSx, toolbarFiltersSx } from "./styles";
import { usePageTable, useSortTable, useSearch } from "./hooks";
import {
  TableBodyContainer,
  TableHeadComponent,
} from "./components";
import { GenericItem, StrsTableProps } from "./types";
import { ROW_PER_PAGE } from "./constants";
import { Filters } from "./components/Filters/Filters";
import { Search } from "./components/Search";
import { Stack } from '@mui/material';

export function StrsTable<T extends GenericItem>({
  data,
  columns,
  isShowheader = true,
}: StrsTableProps<T>) {
  const { order, orderBy, handleChangeSort } = useSortTable();

  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, resetAll } =
    usePageTable();

  const { filteredData, handleSearch } = useSearch({ data, resetPage: resetAll });

  return (
    <>
      <Stack direction="row" sx={toolbarFiltersSx}>
        <Search searchAction={handleSearch} />
        <Filters data={data} columns={columns} filterAction={handleSearch} />
      </Stack>

      <Paper sx={{ width: "100%", mb: 2, border: "1px solid #000" }}>
        <TableContainer>
          <Table size="small" sx={{ width: "100%" }}>
            {isShowheader && (
              <TableHeadComponent
                columns={columns}
                order={order}
                orderBy={orderBy}
                rowCount={filteredData.length}
                onRequestSort={handleChangeSort}
              />
            )}

            <TableBodyContainer
              page={page}
              order={order}
              columns={columns}
              orderBy={orderBy}
              data={filteredData}
              rowsPerPage={rowsPerPage}
            />
          </Table>
        </TableContainer>
        <TablePagination
          page={page}
          align="center"
          component="div"
          count={filteredData.length}
          sx={tablePaginationSx}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={ROW_PER_PAGE}
        />
      </Paper>
    </>
  );
}
