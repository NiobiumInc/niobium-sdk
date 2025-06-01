import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { RightIndex } from '@/components/RightIndex';
import { getDocsMetadata } from '@/lib/getDocsMetadata';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const docs = getDocsMetadata();

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />

        {/* Pad below the fixed header */}
        <div className="pt-20">
          <div className="flex mx-auto min-h-screen">
            {/* Sidebar */}
            <aside className="w-40 lg:w-56 xl:w-64 p-4 border-r">
              <Sidebar docs={docs} />
            </aside>

            {/* Main content + right index */}
            <div className="flex flex-1">
              <main id="main-content" className="flex-1 p-6 prose max-w-none">
                {children}
              </main>

              <aside className="w-64 p-4 hidden xl:block sticky top-20 h-fit self-start">
                <RightIndex />
              </aside>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

