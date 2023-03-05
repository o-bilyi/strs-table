import { GenericItem } from "../types";
import { useCallback, useEffect, useState } from "react";
import { useFilterProps } from "./types";

export const useSearch = <T extends GenericItem>({
  data,
  resetPage,
}: useFilterProps<T>) => {
  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<typeof data>(data);

  useEffect(() => {
    if (query) {
      const filterData = data.filter((item) =>
        Object.values(item).join(",").toLowerCase().includes(query)
      );
      setFilteredData(filterData);
    } else {
      setFilteredData(data);
    }
  }, [data, query]);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value.toLowerCase());
      resetPage();
    },
    [resetPage]
  );

  return {
    filteredData,
    handleSearch,
  };
};
