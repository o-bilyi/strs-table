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
    sortable: false,
  },
  {
    id: "email",
    label: "Email",
    sortable: false,
  },
  {
    id: "country",
    label: "Country",
    sortable: false,
  },
  {
    id: "address",
    label: "Address",
    sortable: false,
  },
  {
    id: "phone",
    label: "Number",
    sortable: true,
  },
  {
    id: "birthday",
    label: "Date",
    sortable: true,
  },
  {
    id: "notes",
    label: "Text",
    sortable: true,
  }
];