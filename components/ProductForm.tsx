"use client"

import React from "react";
import { Product } from "@prisma/client";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import FormSubmitButton from "./FormSubmitButton";
import { ProductSchema, TProductSchema } from "@/lib/validation/product";
import ErrorMessage from "./ErrorMessage";
import { addProduct, updateProduct } from "@/app/products/new/actions";
import { toast } from "react-toastify";
import AlertMessage from "./AlertMessage";

interface ProductFormProps {
    productToUpdate?: Product
}

export default function ProductForm({ productToUpdate }: ProductFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TProductSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: productToUpdate?.name || "",
      description: productToUpdate?.description || "",
      category: productToUpdate?.category || "",
      price: productToUpdate?.price || NaN,
      owner: productToUpdate?.owner || "",
      imageUrl: productToUpdate?.imageUrl || "",
    }
  });
  const [error, setError] = React.useState("");

  const onHandleSubmit = async (data: TProductSchema) => {
    try {
      if(productToUpdate) {
          await updateProduct(data, productToUpdate.id);
          toast.success("Book updated successfully!");
        } else {
            await addProduct(data);
            toast.success("Book published successfully!");
      }
    } catch (error) {
      setError("Oops! Something went wrong.");
    }
  }

  return (
    <>
      <AlertMessage alertType="error">{error}</AlertMessage>
      <form noValidate onSubmit={handleSubmit(fields => onHandleSubmit(fields))}>
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
            valueAsNumber: true
          })}
          placeholder="Price will be converted to cents. Ex: 100USD / 100"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        <AlertMessage alertType="info">
            Price should be above 50 for testing stripe payment, Stripe does not take below 0.5 cents!
        </AlertMessage>
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
        <AlertMessage alertType="info">
            Image URL from unsplash.com will only be allowed!
        </AlertMessage>
        <FormSubmitButton className="btn-primary btn-block" isLoading={isSubmitting}>
          {productToUpdate ? "Update Book" : "Publish Book"}
        </FormSubmitButton>
      </form>
    </>
  );
}
