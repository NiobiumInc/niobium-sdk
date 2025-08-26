import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer SDK</h1>
      <p>
        The Niobium FHE SDK is packaged as a Docker container as part of the
        Niobium client/server runtime system. Please visit the following links
        to learn more:
      </p>
      <ul>
      <li>
        <Link href="/articles/understanding-niobium-fhe-sdk/">
          Understanding the Niobium FHE Software Development Kit
        </Link>
      </li>
      <li>
        <Link href="/tutorials/getting-started-with-niobium-client-server-rts/">
          Getting Started with the Niobium Client/Server RTS
        </Link>
      </li>
      </ul>
    </div>
  );
}
