import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

// Helper function to fetch blog content
function getArticleContent(post: string) {
  const filePath = path.join(process.cwd(), 'content', 'blog', `${post}.md`);

  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(fileContent);
  const content = Markdoc.transform(ast);

  return content;
};

interface ArticlePageProps {
  params: Promise<{ post: string }>;
}

// Page Component
const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { post } = await params;
  const content = getArticleContent(post);

  if (!content) {
    notFound();
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
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(blogDir);

  const paths = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      post: file.replace(/\.md$/, ''), // Extract post from file name
    }));

  return paths;
}

