"use client"

import Checkout from "./checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentInitializer({ amount }: { amount: number}) {
  return (
    <main className="max-w-4xl mx-auto p-10 text-center border m-10 rounded-md">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">You will be charged</h1>
        <h2 className="text-2xl">
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount,
          currency: "usd",
        }}
      >
        <Checkout amount={amount} />
      </Elements>
    </main>
  );
}