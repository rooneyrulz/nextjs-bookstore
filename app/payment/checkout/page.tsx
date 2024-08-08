import { getCart } from "@/lib/db/cart";
import PaymentInitializer from "./initializer";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function PaymentCheckout() {
    const cart = await getCart();
    const subtotal = Math.round(cart?.subtotal || 0);

    const session = await getServerSession(options)

    if (!session?.user) {
        redirect('/api/auth/signin');
    }

    return (
        <PaymentInitializer amount={subtotal}/>
    );
}
