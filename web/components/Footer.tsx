export function Footer() {
  return (
    <footer className="w-full border-t bg-white text-black dark:bg-black dark:text-white border-gray-200 text-sm py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Niobium Microsystems. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
