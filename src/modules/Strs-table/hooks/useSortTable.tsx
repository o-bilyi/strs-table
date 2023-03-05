import { useCallback, useState } from "react";
import { Order } from "../types";

export const useSortTable = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");

  const handleChangeSort = useCallback(
    (event: React.MouseEvent<unknown>, property: string) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    },
    [order, orderBy]
  );

  return {
    order,
    orderBy,
    handleChangeSort,
  };
};
