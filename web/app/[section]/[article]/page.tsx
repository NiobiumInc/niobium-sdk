import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdoc from '@markdoc/markdoc';
import config from '../../../markdoc.config';

const contentDir = path.join(process.cwd(), 'content');

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ section: string; article: string }>
}) {
  const { section, article } = (await params);

  const filePath = path.join(contentDir, section, `${article}.md`);
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const ast = Markdoc.parse(content);
  const transformedContent = Markdoc.transform(ast, config);

  const renderedHTML = Markdoc.renderers.html(transformedContent);

  return (
    <article className="prose mx-auto p-4">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
    </article>
  );
}
