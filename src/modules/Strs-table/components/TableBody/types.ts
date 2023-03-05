import { Column, Order } from '../../types';

export type TableBodyProps<T> = {
  emptyRows: number;
  data: T[];
  columns: Column[];
}

export type TableBodyContainerProps<T> = {
  data: T[];
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: string;
  columns: Column[];
}