import Link from 'next/link';

export default function Navbar() {
  const sections = [
    { name: 'How-Tos', path: '/how-tos' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Reference', path: '/reference' },
    { name: 'Articles', path: '/articles' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        {sections.map((section) => (
          <li key={section.name}>
            <Link href={section.path}>
              <a className="hover:underline text-lg">{section.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
