import Link from "next/link";
import { getServerSession } from "next-auth";
import { getCart } from "@/lib/db/cart";
import { options } from "../api/auth/[...nextauth]/options";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import AddToCartButton from "./AddProductButton";

export default async function Navbar() {
  const session = await getServerSession(options);
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
          Bookstore
          </Link>
        </div>
        <div className="flex-none gap-2">
          {session?.user?.role === "admin" ? (
            <AddToCartButton />
          ) : (
            <ShoppingCartButton cart={cart} />
          )}
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
}
