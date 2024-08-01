import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/db/prisma";
import { options } from "@/app/api/auth/[...nextauth]/options";
import NotFoundPage from "@/app/not-found";
import { cache } from "react";
import ProductForm from "@/components/ProductForm";

interface UpdatePageProps {
    params: {
      id: string;
    };
  }
  
const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) notFound();
    return product;
});

export const metadata: Metadata = {
  title: "Update Book - Bookstore",
  description: "It's a Update Book Page",
};

export default async function UpdateProductPage({
    params: { id },
  }: UpdatePageProps) {
    const session = await getServerSession(options)
    const product = await getProduct(id);

    if (session?.user?.role !== "admin") {
        return NotFoundPage();
    }

  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Update Book</h1>
      <ProductForm productToUpdate={product} />
    </div>
  );
}
