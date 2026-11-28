import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1.5 sm:items-start">
          <BrandLogo size="sm" />
          <p className="text-xs text-muted-foreground">
            Workforce clarity, task velocity, and team alignment in one place.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground"
        >
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/login" className="transition-colors hover:text-foreground">
            Login
          </Link>
          <Link to="/register" className="transition-colors hover:text-foreground">
            Register
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Targeton. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
