import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer Howtos</h1>
      <p>
        A list of all the howtos.
      </p>
      <ul>
      <li>
        <Link href="/howtos/run-an-fhe-program-with-niobium-client/">
          How-to Run an FHE Program with Niobium Client
        </Link>
      </li>
      </ul>
    </div>
  );
}
