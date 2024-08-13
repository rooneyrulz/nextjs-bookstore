import { redirect } from "next/navigation";

type UpdateProductButtonProps = {
  productId: string;
}

export default function UpdateProductButton({ productId}: UpdateProductButtonProps) {
  async function redirectToUpdateProductPage() {
    "use server";
    redirect(`/products/new/${productId}`);
  }

  return (
    <div className="flex items-center gap-2">
        <form action={redirectToUpdateProductPage}>
            <button type="submit" className="btn btn-primary">
                Update Book
            </button>
        </form>
    </div>
  );
}
