import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer Reference</h1>
      <p>
        A list of all the reference articles.
      </p>
      <ul>
      <li>
        <Link href="/reference/niobium-client/niobium-client/">
          Niobium Client CLI Reference
        </Link>
      </li>
      <li>
        <Link href="/reference/niobium-compiler/niobium-compiler/">
          Niobium FHE Compiler Reference
        </Link>
      </li>
      <li>
        <Link href="/reference/niobium-server/niobium-server/">
          Niobium Server Reference
        </Link>
      </li>
      <li>
        <Link href="/reference/niobium-server-runtime/niobium-server-runtime/">
          Niobium Server Runtime Docker Image
        </Link>
      </li>
      </ul>
    </div>
  );
}
