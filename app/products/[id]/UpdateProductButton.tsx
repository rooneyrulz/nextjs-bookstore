"use client";

import { useRouter } from "next/navigation";

type UpdateProductButtonProps = {
  productId: string;
}

export default function UpdateProductButton({ productId}: UpdateProductButtonProps) {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={() => router.push(`/products/new/${productId}`)}>
        Update Book
      </button>
    </div>
  );
}
