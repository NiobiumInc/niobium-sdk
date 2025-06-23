import fs from 'fs/promises';
import path from 'path';
import { tmpName } from 'tmp-promise';
import crypto from 'crypto';
import { exec } from 'child_process';
import { promisify } from 'util';
import Image from 'next/image';
import { isValidElement } from 'react';

const execAsync = promisify(exec);

async function processMermaidContent(node: React.ReactNode): Promise<string> {
  if (!isValidElement(node)) {
    throw new Error('Mermaid: Expected a single ReactElement as children');
  }

  const content = node.props.children.join('');

  const hash = crypto.createHash('sha256').update(content).digest('hex');
  const outputFilename = `${hash}.svg`;
  const outputPath = path.join(process.cwd(), 'public', 'diagrams', outputFilename);

  try {
    await fs.access(outputPath);
  } catch {
    const tempFile = await tmpName({ postfix: '.mmd' });
    await fs.writeFile(tempFile, content);

    await execAsync(`npx mmdc -i ${tempFile} -o ${outputPath}`);
  }

  return outputFilename;
}

export default async function Mermaid({ children }: { children: React.ReactNode }) {
  const filename = await processMermaidContent(children);

  return (
    <div className="relative w-full max-w-3xl h-auto aspect-[2/1]">
      <Image
        src={`/diagrams/${filename}`}
        alt="A mermaid diagram"
        fill
        className="object-contain p-6"
        sizes="(min-width: 1024px) 768px, 100vw"
      />
    </div>
  );
}
