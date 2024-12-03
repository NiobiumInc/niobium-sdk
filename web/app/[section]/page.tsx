import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const contentDir = path.join(process.cwd(), 'content');

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>
}) {
  const section = (await params).section;
  const sectionPath = path.join(contentDir, section);

  const files = fs.readdirSync(sectionPath);

  return (
    <div className="prose mx-auto">
      <h1>{section.replace('-', ' ').toUpperCase()}</h1>
      <ul>
        {files.map((file) => {
          const slug = file.replace('.md', '');
          return (
            <li key={slug}>
              <Link href={`/${section}/${slug}`}>
                {slug.replace('-', ' ')}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
