import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdoc from '@markdoc/markdoc';
import config from '../../../markdoc.config';

const contentDir = path.join(process.cwd(), 'content');

export default async function ArticlePage({
  params,
}: {
  params: { section: string; article: string };
}) {
  // Await params destructuring
  const { section, article } = await params;

  // Read the Markdown file
  const filePath = path.join(contentDir, section, `${article}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter and content
  const { data, content } = matter(fileContent);

  // Parse and transform the content with Markdoc
  const ast = Markdoc.parse(content);
  const html = Markdoc.transform(ast, config);

  // Render HTML on the server
  const renderedHTML = Markdoc.renderers.html(html);

  return (
    <article className="prose mx-auto p-4">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
    </article>
  );
}
