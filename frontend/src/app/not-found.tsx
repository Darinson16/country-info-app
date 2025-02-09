import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2>Not Found :(</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline flex justify-center">
        Return Home
      </Link>
    </div>
  );
}
