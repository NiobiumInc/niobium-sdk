"use client";

import Link from 'next/link';
// import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Articles', href: '/articles' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Howtos', href: '/howtos' },
  { label: 'Reference', href: '/reference' },
  { label: 'Get the SDK', href: '/sdk' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white text-black dark:bg-gray-900 dark:text-white sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            Niobium Developer
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4 bg-white text-black dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-700">
            <Button variant="outline">Join</Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center bg-white text-black dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-2 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline">Join</Button>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
