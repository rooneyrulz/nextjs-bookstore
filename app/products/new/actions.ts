"use server";

import { prisma } from "@/lib/db/prisma";
import { ProductSchema, TProductSchema } from "@/lib/validation/product";
import { redirect } from "next/navigation";

export async function addProduct(data: TProductSchema) {
    const validation = ProductSchema.safeParse(data);

    if(!validation.success) {
      console.log(validation.error.errors);
      throw Error("All fields are required");
    }

    await prisma.product.create({
      data: validation.data,
    });

    redirect("/");
  }

  export async function updateProduct(data: TProductSchema, id: string) {
    const validation = ProductSchema.safeParse(data);

    if(!validation.success) {
      console.log(validation.error.errors);
      throw Error("All fields are required");
    }

    await prisma.product.update({
      where: {
        id,
      },
      data: validation.data,
    })

    redirect(`/products/${id}`);
  }
