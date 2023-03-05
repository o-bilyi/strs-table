import { useCallback, useState } from "react";
import { GenericItem } from "../../types";
import { FilterItem } from "./FilterItem";
import { FiltersProps } from "./types";

export const Filters = <T extends GenericItem>({
  data,
  columns,
  filterAction,
}: FiltersProps<T>) => {
  const [activeFilter, setActiveFilter] = useState<Record<string, string>>({});

  const handleSetActiveFilter = useCallback(
    ({ type, value }: { type: string; value: string }) => {
      setActiveFilter({ [type]: value });
      filterAction(value);
    },
    [filterAction]
  );

  return (
    <>
      {columns.map((filter) => {
        if (filter.sortable) {
          return (
            <FilterItem
              filter={filter}
              key={filter.id}
              filterAction={handleSetActiveFilter}
              activeItem={activeFilter[filter.id] || ""}
              data={[...new Set(data.map((item) => item[filter.id]))]}
            />
          );
        }
        return null;
      })}
    </>
  );
};
