"use client"

import React from "react";
import { Product } from "@prisma/client";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import FormSubmitButton from "./FormSubmitButton";
import { ProductSchema, TProductSchema } from "@/lib/validation/product";
import ErrorMessage from "./ErrorMessage";
import { addProduct, updateProduct } from "@/app/products/new/actions";

interface ProductFormProps {
    productToUpdate?: Product
}

export default async function ProductForm({ productToUpdate }: ProductFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<TProductSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: productToUpdate?.name || "",
      description: productToUpdate?.description || "",
      category: productToUpdate?.category || "",
      price: productToUpdate?.price || 0,
      owner: productToUpdate?.owner || "",
      imageUrl: productToUpdate?.imageUrl || "",
    }
  });
  const [error, setError] = React.useState("");


  const onHandleSubmit = async (data: TProductSchema) => {
    try {
      if(productToUpdate) {
        await updateProduct(data, productToUpdate.id)
      } else {
        await addProduct(data);
      }
    } catch (error) {
      setError("Oops! Something went wrong.");
    }
  }

  return (
    <div>
      {error && <div role="alert" className="alert alert-error my-3 bg-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>}
      <form onSubmit={handleSubmit(fields => onHandleSubmit(fields))}>
        <input
          {...register("name")}
          placeholder="Title"
          className="input input-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <input
          {...register("category")}
          placeholder="Category"
          className="input input-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <input
          {...register("description")}
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <input
          {...register("price", {
            valueAsNumber: true,
            validate: (value) => value > 0,
          })}
          placeholder="Price: will be converted to cents. Ex: 100USD / 100"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        <input
          {...register("owner")}
          placeholder="Author"
          className="input input-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.owner?.message}</ErrorMessage>
        <input
          {...register("imageUrl")}
          placeholder="Image OR Cover Picture URL"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.imageUrl?.message}</ErrorMessage>
        <FormSubmitButton className="btn-primary btn-block">
          {productToUpdate ? "Update Book" : "Publish Book"}
        </FormSubmitButton>
      </form>
    </div>
  );
}
