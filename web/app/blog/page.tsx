import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer Blog</h1>
      <p>
        A list of all the blog posts.
      </p>
      <ul>
      <li>
        <Link href="/blog/announcing-niobium-developer-website/">
          Announcing Niobium&rsquo;s Developer Website
        </Link>
      </li>
      </ul>
    </div>
  );
}
