import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().trim().min(1, { message: "Title is required!" }).max(255, { message: "Title is too lengthy!" }),
  description: z.string().trim().min(10, { message: "Description is too short!" }),
  price: z.number().min(1, { message: "Price is required!" }).gt(50, { message: "Price should be greater than 50!" }),
  owner: z.string().trim().min(1, { message: "Author is required!" }),
  imageUrl: z.string().trim().url({message: "A Valid Image URL is required!"}),
  category: z.string().trim().min(1, { message: "Category is required!" }),
});

export type TProductSchema = z.infer<typeof ProductSchema>;
