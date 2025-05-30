import Link from 'next/link';
import type { DocsBySection, DocMetadata } from '@/lib/getDocsMetadata';

const SECTION: string[] = [
  'blog',
  'articles',
  'tutorials',
  'howtos',
  'reference',
];

export function Sidebar({ docs }: { docs: DocsBySection }) {
  return (
    <aside className="w-64 p-4 border-r h-screen overflow-auto">
      <nav>
        {SECTION.map((section) => {
          const items = docs[section];
          if (!items || items.length === 0) return null;

          return (
            <div key={section} className="mb-6">
              <h2 className="text-sm font-semibold uppercase text-gray-600 mb-2">
                {section}
              </h2>

              {section === 'reference' ? (
                <ReferenceSection items={items} />
              ) : (
                <ul className="space-y-1">
                  {items.map((doc) => (
                    <li key={doc.slug}>
                      <Link
                        href={`/${doc.slug}`}
                        className="text-blue-600 hover:underline"
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

// Renders the reference section with subsections
function ReferenceSection({ items }: { items: DocMetadata[] }) {
  const grouped: Record<string, DocMetadata[]> = {};

  for (const doc of items) {
    const parts = doc.slug.split('/');

    // Top-level .md file (e.g., reference/niobium-server.md)
    if (parts.length === 2) {
      const key = parts[1]; // e.g., 'niobium-server'
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(doc);
    }

    // Nested .md file (e.g., reference/niobium-client/compile.md)
    if (parts.length === 3) {
      const key = parts[1]; // e.g., 'niobium-client'
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(doc);
    }
  }

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([subsection, items]) => (
        <div key={subsection}>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
            {subsection.replace(/-/g, ' ')}
          </h3>
          <ul className="pl-4 space-y-1">
            {items.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`/${doc.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

