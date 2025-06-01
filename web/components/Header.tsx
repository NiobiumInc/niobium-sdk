'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <nav className="mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold text-gray-900">
          Niobium Developer
        </div>
        <div>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition px-4">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition px-4">
            About
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition px-4">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
