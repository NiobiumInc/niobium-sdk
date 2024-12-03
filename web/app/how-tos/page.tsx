import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/how-tos');

export default function HowtosPage() {
  const files = fs.readdirSync(contentDir);

  return (
    <div className="prose mx-auto">
      <h1>How-Tos</h1>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <a href={`/howtos/${file.replace('.md', '')}`}>
              {file.replace('.md', '')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
