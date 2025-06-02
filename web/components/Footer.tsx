export function Footer() {
  return (
    <footer className="border-t text-sm py-6">
      <div className="px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Niobium Microsystems. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://niobiummicrosystems.com/technology/">Technology</a>
          <a href="https://niobiummicrosystems.com/products/">Products</a>
          <a href="https://niobiummicrosystems.com/about/">About</a>
          <a href="https://niobiummicrosystems.com/insights/">Insights</a>
          <a href="https://niobium.bamboohr.com/careers">Careers</a>
          <a href="https://niobiummicrosystems.com/contact/">Contact</a>
          <a href="https://niobiummicrosystems.com/products/early-access-program/">Early Access (NEAP)</a>
          <a href="https://niobiummicrosystems.com/terms-conditions/">Terms & Conditions</a>
          <a href="https://niobiummicrosystems.com/privacy-policy/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
