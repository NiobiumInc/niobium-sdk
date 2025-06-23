import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import config from '@markdoc/config';
import components from '@/lib/markdoc/components';
import React from 'react';

function getArticleContent(title: string) {
  const filePath = path.join(process.cwd(), 'content', 'articles', `${title}.mdoc`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(fileContent);
  const content = Markdoc.transform(ast, config);

  return content;
}

interface ArticlePageProps {
  params: Promise<{ title: string }>;
}

// Page Component
const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { title } = await params;
  const content = getArticleContent(title);

  if (!content) notFound();

  return (
    <div className="prose mx-auto">
      {Markdoc.renderers.react(content, React, { components })}
    </div>
  );
};

export default ArticlePage;

// Static Params Generation
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const files = fs.readdirSync(articlesDir);

  const paths = files
    .filter((file) => file.endsWith('.mdoc'))
    .map((file) => ({
      title: file.replace(/\.mdoc$/, ''), // Extract title from file name
    }));

  return paths;
}
