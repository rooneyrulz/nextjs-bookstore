import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import AddToCartButton from "./AddToCartButton";
import UpdateProductButton from "./UpdateProductButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - Bookstore",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const session = await getServerSession(options);
  const product = await getProduct(id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        {session?.user?.role === "admin" ? (
          <UpdateProductButton productId={product.id} />
        ) : (
          <AddToCartButton
            productId={product.id}
            incrementProductQuantity={incrementProductQuantity}
          />
        )}
      </div>
    </div>
  );
}
