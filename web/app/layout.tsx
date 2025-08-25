import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { RightIndex } from '@/components/RightIndex';
import { getDocsMetadata } from '@/lib/getDocsMetadata';
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const docs = getDocsMetadata();

  return (
    <html lang="en">
      <body className="min-h-screen theme-surface">
        <ThemeProvider>
          <div className="max-w-7xl mx-auto px-4">
            <Header />

            {/* Pad below the fixed header */}
            <div className="flex mx-auto min-h-screen">
              {/* Sidebar */}
              <aside className="w-40 lg:w-56 xl:w-64 p-4 border-r">
                <Sidebar docs={docs} />
              </aside>

              {/* Main content + right index */}
              <div className="flex flex-1">
                <main id="main-content" className="flex-1 p-6 prose dark:prose-invert max-w-none">
                  {children}
                </main>

                <aside className="w-64 p-4 hidden xl:block sticky top-20 h-fit self-start">
                  <RightIndex />
                </aside>
              </div>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-HNC3RTEQ4X" />
      </body>
    </html>
  );
}

