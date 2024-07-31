import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { z } from "zod"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/db/prisma";
import FormSubmitButton from "@/components/FormSubmitButton";
import { options } from "@/app/api/auth/[...nextauth]/options";
import NotFoundPage from "@/app/not-found";

export const metadata: Metadata = {
  title: "Add Product - Bookstore",
  description: "It's a Add Product Page",
};

// const createProductSchema = z.object({
//   name: z.string().min(3).max(255),
//   price: z.number(),
//   description: z.string().min(1),
//   image: z.string().url(),
// });

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const category = formData.get("category")?.toString();
  const owner = formData.get("owner")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  // const body = {
  //   name,
  //   price,
  //   description,
  //   imageUrl,
  // };

  // const validation = createProductSchema.safeParse(body);

  // if(!validation.success) {
  //   console.log(validation.error.errors);
  //   throw Error("All fields are required");
  // }

  if (!name || !description || !imageUrl || !price || !category || !owner) {
    throw Error("All fields are required");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      category,
      owner,
      imageUrl,
      price,
    },
  });

  redirect("/");
}

export default async function AddProduct() {
  const session = await getServerSession(options)

    if (session?.user?.role !== "admin") {
        return NotFoundPage();
    }

  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="category"
          placeholder="Category"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="owner"
          placeholder="Author"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitButton className="btn-primary btn-block">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
