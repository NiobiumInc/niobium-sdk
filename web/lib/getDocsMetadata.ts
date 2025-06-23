import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type DocMetadata = {
  slug: string;  // e.g., "reference/niobium-client/compile"
  title: string; // from frontmatter
};

export type DocsBySection = Record<string, DocMetadata[]>;

export function getDocsMetadata(): DocsBySection {
  const contentDir = path.join(process.cwd(), 'content');

  const result: DocsBySection = {};

  function walk(dirPath: string) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative(contentDir, fullPath);
      const slug = relativePath.replace(/\.(md|mdoc)$/, '').replace(/\\/g, '/'); // normalize on Windows

      const topLevelDir = slug.split('/')[0];

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdoc'))) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);
        const metadata: DocMetadata = {
          slug,
          title: data.title ?? path.basename(slug),
        };

        if (!result[topLevelDir]) result[topLevelDir] = [];
        result[topLevelDir].push(metadata);
      }
    }
  }

  walk(contentDir);
  return result;
}
