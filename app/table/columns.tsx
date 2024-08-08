import { type MRT_ColumnDef} from 'mantine-react-table';
import PriceTag from '@/components/PriceTag';
import { Product } from '@prisma/client';
import { formatDate } from '@/lib/format';
import ProductBadge from '@/components/ProductBadge';

export const columns: MRT_ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Title',
    size: 200,
    Cell: ({ cell, row }) => {
      return <ProductBadge productName={cell.getValue<string>()} publishedAt={row.original.createdAt} />
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
      const date = formatDate(cell.getValue<string>());
      return (<span>{date}</span>);
    },
  },
];
