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

function ReferenceSection({ items }: { items: DocMetadata[] }) {
  const grouped: Record<string, DocMetadata[]> = {};

  for (const doc of items) {
    const parts = doc.slug.split('/');

    if (parts.length === 3) {
      // reference/niobium-client/compile => subsection = niobium-client
      const subsection = parts[1];
      if (!grouped[subsection]) grouped[subsection] = [];
      grouped[subsection].push(doc);
    }

    if (parts.length === 2) {
      // Either reference/niobium-client.md or reference/other.md
      const subsection = parts[1].replace(/\.md$/, '');
      if (!grouped[subsection]) grouped[subsection] = [];
      grouped[subsection].push(doc);
    }
  }

  const sortedGrouped: typeof grouped = {};

  for (const [subsection, docs] of Object.entries(grouped)) {
    // Look for: reference/niobium-client/niobium-client
    const canonicalSlug = `reference/${subsection}/${subsection}`;
    const mainDoc = docs.find((d) => d.slug === canonicalSlug);
    const others = docs.filter((d) => d.slug !== canonicalSlug);
    sortedGrouped[subsection] = mainDoc ? [mainDoc, ...others] : others;
  }

  return (
    <div className="space-y-4">
      {Object.entries(sortedGrouped).map(([subsection, items]) => (
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
