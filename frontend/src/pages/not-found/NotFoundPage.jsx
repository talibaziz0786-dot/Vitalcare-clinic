import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center dark:bg-black">
      <h1 className="text-8xl font-bold">
        404
      </h1>

      <p className="mt-6 text-zinc-500">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-10 rounded-full bg-black px-8 py-4 font-semibold text-white dark:bg-white dark:text-black"
      >
        Go Home
      </Link>
    </section>
  );
}