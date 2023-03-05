import { useCallback, useState } from "react";
import { PAGE_SIZE } from '../constants';

export const usePageTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const resetAll = useCallback(() => {
    setPage(0);
    setRowsPerPage(PAGE_SIZE);
  }, []);

  return {
    page,
    resetAll,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
