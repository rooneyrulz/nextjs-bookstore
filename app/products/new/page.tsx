import type { Metadata } from "next";
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options";
import NotFoundPage from "@/app/not-found";
import ProductForm from "@/components/ProductForm";

export const metadata: Metadata = {
  title: "Publish Book - Bookstore",
  description: "It's a Publish Book Page",
};

export default async function AddProduct() {
  const session = await getServerSession(options)

  if (session?.user?.role !== "admin") {
      return NotFoundPage();
  }

  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Publish Book</h1>
      <ProductForm />
    </div>
  );
}
