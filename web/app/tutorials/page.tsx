import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer Tutorials</h1>
      <p>
        A list of all the tutorials.
      </p>
      <ul>
      <li>
        <Link href="/tutorials/getting-started-with-niobium-client-server-rts/">
          Getting Started with the Niobium Client/Server RTS
        </Link>
      </li>
      </ul>
    </div>
  );
}
