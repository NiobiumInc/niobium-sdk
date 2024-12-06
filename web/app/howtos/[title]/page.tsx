import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

// Helper function to fetch howto content
function getHowToContent(title: string) {
  const filePath = path.join(process.cwd(), 'content', 'howtos', `${title}.md`);

  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(fileContent);
  const content = Markdoc.transform(ast);

  return content;
};

interface HowToPageProps {
  params: Promise<{ title: string }>;
}

// Page Component
const HowToPage = async ({ params }: HowToPageProps) => {
  const { title } = await params;
  const content = getHowToContent(title);

  if (!content) {
    notFound(); // Handle 404 for missing howtos
  }

  return (
    <div className="prose mx-auto">
      {Markdoc.renderers.react(content, React)}
    </div>
  );
};

export default HowToPage;

// Static Params Generation
export async function generateStaticParams() {
  const howtosDir = path.join(process.cwd(), 'content', 'howtos');
  const files = fs.readdirSync(howtosDir);

  const paths = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      title: file.replace(/\.md$/, ''), // Extract title from file name
    }));

  return paths;
}
