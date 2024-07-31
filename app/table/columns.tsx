import { type MRT_ColumnDef} from 'mantine-react-table';
import PriceTag from '@/components/PriceTag';
import { Product } from '@prisma/client';

export const columns: MRT_ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Title',
    size: 200,
    Cell: ({ cell, row }) => {
      const isNew = Date.now() - new Date(row.original.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;
      return (<span>{cell.getValue<string>()} {isNew && <div className="badge badge-secondary">NEW</div>}</span>)
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
    Cell: ({ cell }) => {
      return (<PriceTag price={cell.getValue<number>()} className={""} />);
    },
  },
  {
    accessorKey: 'owner',
    header: 'Author',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Published Date',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
    Cell: ({ cell }) => {
      const date = new Date(cell.getValue<string>()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      return (<span>{date}</span>);
    },
  },
];