import Link from 'next/link';
import type { DocsBySection } from '@/lib/getDocsMetadata';

export function Sidebar({ docs }: { docs: DocsBySection }) {
  return (
    <aside className="w-64 p-4 border-r h-screen overflow-auto">
      <nav>
        {Object.entries(docs).map(([section, items]) => (
          <div key={section} className="mb-6">
            <h2 className="text-sm font-semibold uppercase text-gray-600 mb-2">
              {section}
            </h2>
            <ul className="space-y-1">
              {items.map((doc) => (
                <li key={doc.slug}>
                  <Link href={`/${doc.slug}`} className="text-blue-600 hover:underline">
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Sections
        </h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            >
              Tutorials
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            >
              How-Tos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            >
              Reference
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
