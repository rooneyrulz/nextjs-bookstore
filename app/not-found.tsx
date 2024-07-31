import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div>404-Page not found</div>
      <Link href="/" className="underline">
        Return to Home Page
      </Link>
    </>
  );
}
