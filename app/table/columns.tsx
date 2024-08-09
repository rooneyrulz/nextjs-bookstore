import { type MRT_ColumnDef} from 'mantine-react-table';
import PriceTag from '@/components/PriceTag';
import { Product } from '@prisma/client';
import { formatDate } from '@/lib/format';
import ProductBadge from '@/components/ProductBadge';
import Image from "next/image";

export const columns: MRT_ColumnDef<Product>[] = [
    {
        accessorKey: 'imageUrl',
        header: 'Image',
        enableColumnFilter: false,
        enableSorting: false,
        enableGlobalFilter: false,
        Cell: ({ cell, row }) => {
          return (
            <Image
                src={row.original.imageUrl}
                alt={row.original.name}
                width={150}
                height={100}
                className="rounded-lg"
                priority
            />
          )
        },
    },
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
