import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

// Helper function to fetch article content
function getArticleContent(title: string) {
  const filePath = path.join(process.cwd(), 'content', 'articles', `${title}.md`);

  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(fileContent);
  const content = Markdoc.transform(ast);

  return content;
};

interface ArticlePageProps {
  params: Promise<{ title: string }>;
}

// Page Component
const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { title } = await params;
  const content = getArticleContent(title);

  if (!content) {
    notFound(); // Handle 404 for missing articles
  }

  return (
    <div className="mx-auto">
      {Markdoc.renderers.react(content, React)}
    </div>
  );
};

export default ArticlePage;

// Static Params Generation
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const files = fs.readdirSync(articlesDir);

  const paths = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      title: file.replace(/\.md$/, ''), // Extract title from file name
    }));

  return paths;
}
