import { Column } from '../../modules/Strs-table/types';

export const columns: Column[] = [
  {
    id: "id",
    label: "ID",
    sortable: false,
  },
  {
    id: "name",
    label: "Name",
    sortable: true,
  },
  {
    id: "email",
    label: "Email",
    sortable: true,
  },
  {
    id: "phone",
    label: "Number",
    sortable: true,
  },
  {
    id: "age",
    label: "Age",
    sortable: false,
  },
];