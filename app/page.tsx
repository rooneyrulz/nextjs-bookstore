import React from 'react';
import dynamic from 'next/dynamic';
import { prisma } from "@/lib/db/prisma";
import ProductInitializer from "./product-initializer";
import { Loader } from './table/table-container';

const TableContainer = dynamic(() => import('./table/table-container'), {
  ssr: false,
  loading: () => <Loader />,
});

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  if (!product.length) return <div>No Products Available!</div>

  return (
    <ProductInitializer products={product}>
      <TableContainer />
    </ProductInitializer>
  );
}
