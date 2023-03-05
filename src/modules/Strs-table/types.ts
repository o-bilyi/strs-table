export type StrsTableProps<T> =  {
  data: T[];
  columns: Column[];
  isShowheader: boolean;
}

export type Order = "asc" | "desc";

export type TableHeadProps = {
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  columns: Column[];
}

export type Column = {
  id: string;
  label: string;
  sortable: boolean;
}

export type GenericItem = Record<string, any>;