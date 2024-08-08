"use client";

import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { Product } from '@prisma/client';

type Props = {
  data: Product[];
  columns: MRT_ColumnDef<Product>[];
  options: any
};

const DataTable = ({ data, columns, options }: Props) => {
  const table = useMantineReactTable({
    columns,
    data,
    ...options,
  });

  return <MantineReactTable table={table} />;
};

export default DataTable;
