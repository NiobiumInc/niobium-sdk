'use client';

import { useEffect, useState } from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function RightIndex() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;

    const slugify = (text: string) =>
    text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '');

    const extractHeadings = () => {
      const selector = 'h1, h2, h3';
      const headingEls = Array.from(main.querySelectorAll(selector)) as HTMLElement[];

      const found = headingEls.map((el) => {
        const rawText = el.textContent || '';
        let id = el.id;

        if (!id) {
          id = slugify(rawText);
          el.id = id;
        }

        return {
          id,
          text: rawText,
          level: Number(el.tagName.charAt(1)),
        };
      });

      setHeadings(found);
    };

    extractHeadings();

    const observer = new MutationObserver(() => extractHeadings());
    observer.observe(main, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="text-sm space-y-2">
    <h2 className="text-xs font-semibold uppercase text-gray-500 mb-2">On This Page</h2>
    <ul className="space-y-1">
    {headings.map((heading) => (
      <li
      key={heading.id}
      className={heading.level === 3 ? 'ml-6' : heading.level === 2 ? 'ml-2' : ''}
      >
      <a
      href={`#${heading.id}`}
      className="block text-gray-700 hover:text-blue-600 hover:underline"
      >
      {heading.text}
      </a>
      </li>
    ))}
    </ul>
    </nav>
  );
}
