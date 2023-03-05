import { Column } from '../../types'

export type FiltersProps<T> = {
  data: T[];
  columns: Column[];
  filterAction: (value: string) => void;
}

export type FilterItemProps = {
  filter: Column;
  data: string[];
  activeItem: string;
  filterAction: ({ type, value }: { type: string, value: string }) => void;
}