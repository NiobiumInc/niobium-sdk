import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import matter from "gray-matter";

// Helper function to fetch tutorial content
function getTutorialContent(title: string) {
  const filePath = path.join(process.cwd(), 'content', 'tutorials', `${title}.md`);

  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content: md, data: frontmatter } = matter(fileContent);

  const ast = Markdoc.parse(md);
  const node = Markdoc.transform(
    ast,
    {
      variables: { ...frontmatter },
      nodes: {
        variable: { render: React.Fragment },
      },
    } as Parameters<typeof Markdoc.transform>[1]
  );

  return { node, frontmatter };
};

interface TutorialPageProps {
  params: Promise<{ title: string }>;
}

// Page Component
const TutorialPage = async ({ params }: TutorialPageProps) => {
  const { title } = await params;
  const tutorial = getTutorialContent(title);

  if (!tutorial) notFound();

  return (
    <div className="prose mx-auto">
    {Markdoc.renderers.react(tutorial.node, React)}
    </div>
  );
};

export default TutorialPage;

// Static Params Generation
export async function generateStaticParams() {
  const tutorialsDir = path.join(process.cwd(), 'content', 'tutorials');
  const files = fs.readdirSync(tutorialsDir);

  const paths = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      title: file.replace(/\.md$/, ''), // Extract title from file name
    }));

  return paths;
}
