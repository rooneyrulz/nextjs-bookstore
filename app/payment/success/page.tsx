import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import NotFoundPage from "@/app/not-found";

export default async function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {

    const session = await getServerSession(options)

    if (!session?.user) {
        return NotFoundPage();
    }

    return (
        <main className="max-w-4xl mx-auto p-10 text-center border m-10 rounded-md">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
                <h2 className="text-2xl">Your payment was successful</h2>
                <div className="p-2 rounded-md mt-5 text-4xl font-bold">
                    ${amount}
                </div>
            </div>
        </main>
    );
}
