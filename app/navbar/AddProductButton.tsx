"use client";

import { useRouter } from "next/navigation";

export default function AddToCartButton() {
  const router = useRouter();
  
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        router.push("/products/new");
      }}
    >
      New Book
    </button>
  );
}
