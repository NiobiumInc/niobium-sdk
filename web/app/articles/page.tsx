import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer Articles</h1>
      <p>
        A list of all the articles.
      </p>
      <ul>
      <li>
        <Link href="/articles/understanding-niobium-client-server-runtime-tools/">
          Understanding the Niobium Client/Server RTS
        </Link>
      </li>
      <li>
        <Link href="/articles/understanding-niobium-fhe-sdk/">
          Understanding the Niobium FHE Software Development Kit
        </Link>
      </li>
      </ul>
    </div>
  );
}
