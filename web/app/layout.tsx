import React from "react";
import "./globals.css";

export const metadata = {
  title: "Niobium Developer Website",
  description: "Documentation, Tutorials, How-Tos, and Reference for Niobium FHE Tools and SDK.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Top Menu Bar */}
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="text-xl font-semibold text-gray-900">
              Niobium Developer
            </div>
            <div>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition px-4"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition px-4"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition px-4"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <div className="flex pt-20 max-w-7xl mx-auto">
          {/* Side Context Menu */}
          <aside className="w-60 bg-gray-100 p-4 border-r border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Sections
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
                >
                  How-Tos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
                >
                  Reference
                </a>
              </li>
            </ul>
          </aside>

          {/* Main Content Pane */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
