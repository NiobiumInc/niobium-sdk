import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

// Helper function to fetch Markdoc content for a subcommand
const getSubcommandContent = (command: string, subcommand: string) => {
  const filePath = path.join(process.cwd(), 'content', 'reference', command, `${subcommand}.md`);

  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(fileContent);
  const content = Markdoc.transform(ast);

  return content;
};

interface Props {
  params: Promise<{ command: string; subcommand: string }>;
}

// Page Component for a subcommand
const SubcommandPage = async ({ params }: Props) => {
  const { command, subcommand } = await params;
  const content = getSubcommandContent(command, subcommand);

  if (!content) {
    notFound(); // Handle 404 for missing subcommands
  }

  return (
    <div className="mx-auto">
      {Markdoc.renderers.react(content, React)}
    </div>
  );
};

export default SubcommandPage;

// Static Params Generation
export async function generateStaticParams() {
  const referenceDir = path.join(process.cwd(), 'content', 'reference');
  const commands = fs
    .readdirSync(referenceDir)
    .filter((name) => fs.statSync(path.join(referenceDir, name)).isDirectory()); // Only include directories

  const paths: { command: string; subcommand: string }[] = [];

  for (const command of commands) {
    const subcommandsDir = path.join(referenceDir, command);
    const subcommands = fs
      .readdirSync(subcommandsDir)
      .filter(
        (file) =>
          file.endsWith('.md') || file.endsWith('.mdoc') // Include .md or .mdoc files
      )
      .map((file) => file.replace(/\.(md|mdoc)$/, '')); // Remove .md or .mdoc extension

    for (const subcommand of subcommands) {
      paths.push({ command, subcommand });
    }
  }

  return paths;
}
