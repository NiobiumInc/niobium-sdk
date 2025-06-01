export function Footer() {
  return (
    <footer className="border-t text-sm py-6">
      <div className="px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Niobium Microsystems. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#">Technology</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Insights</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Early Access (NEAP)</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
