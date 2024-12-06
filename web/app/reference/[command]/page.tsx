import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

// Helper function to fetch Markdoc content for a command
const getCommandContent = (command: string) => {
  const filePath = path.join(process.cwd(), 'content', 'reference', command, 'index.md');

  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(fileContent);
  const content = Markdoc.transform(ast);

  return content;
};

interface CommandPageProps {
  params: Promise<{ command: string }>;
}

// Page Component for a single command
const CommandPage = async ({ params }: CommandPageProps) => {
  const { command } = await params;
  const content = getCommandContent(command);

  if (!content) {
    notFound(); // Handle 404 for missing commands
  }

  return (
    <div className="prose mx-auto">
      {Markdoc.renderers.react(content, React)}
    </div>
  );
};

export default CommandPage;

// Static Params Generation
export async function generateStaticParams() {
  const referenceDir = path.join(process.cwd(), 'content', 'reference');
  const commands = fs
    .readdirSync(referenceDir)
    .filter((name) => {
      const fullPath = path.join(referenceDir, name);
      return fs.statSync(fullPath).isFile() && name.endsWith('.md'); // Only include .md files
    });

  const paths = commands.map((file) => ({
    command: file.replace(/\.md$/, ''), // Remove .md extension to create the command parameter
  }));

  return paths;
}
