import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/sahara-logo-nobg.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Sahara Constructions" className="h-16 md:h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-secondary"
                activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary rounded-full bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919834771993"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              <Phone className="h-4 w-4" />
              98347 71993
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary-glow transition-all hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-[fade-in_0.2s_ease-out]">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-secondary"
                activeProps={{ className: "block px-4 py-3 rounded-lg text-base font-semibold text-primary bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
