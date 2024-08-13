import React from 'react';
import dynamic from 'next/dynamic';
import { prisma } from "@/lib/db/prisma";
import ProductInitializer from "./product-initializer";
import { Metadata } from 'next/types';
import Loader from '@/components/Loader';

const TableContainer = dynamic(() => import('./table/table-container'), {
  ssr: false,
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title: "Bookstore",
  description: "It's a List Book Page",
};

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  if (!product.length) return <div>No Books Available!</div>

  return (
    <ProductInitializer products={product}>
      <TableContainer />
    </ProductInitializer>
  );
}
