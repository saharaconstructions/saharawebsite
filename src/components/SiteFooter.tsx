import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/sahara-logo1.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-mesh)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="bg-white inline-block rounded-xl p-3">
              <img src={logo} alt="Sahara Constructions" className="h-16 w-auto" />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Building Trust. Creating Future. Premium construction services trusted by families across Maharashtra.
            </p>
<div className="flex gap-3 mt-6">
  <a
    href="https://www.instagram.com/sahara_construction__/"
    target="_blank"
    rel="noreferrer"
    className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
    aria-label="Instagram"
  >
    <Instagram className="h-4 w-4" />
  </a>
  <a
    href="https://www.facebook.com/SaharaConstructionBhusawal/"
    target="_blank"
    rel="noreferrer"
    className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
    aria-label="Facebook"
  >
    <Facebook className="h-4 w-4" />
  </a>
</div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>RCC & Plastering</li>
              <li>Interiors & Furnishing</li>
              <li>Waterproofing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <a href="tel:+919834771993">+91 98347 71993</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <a href="mailto:saharaconstructions29@gmail.com">saharaconstructions29@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-8 w-8 mt-0.5 text-accent" />
                <span>Khadka - Bhusawal Rd, Samrth Nagar, Khadake, Maharashtra 425201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Sahara Constructions. All rights reserved.</p>
            <p>Designed and Developed by{" "}
              <a href="https://www.wingzspheretech.in" target="_blank" rel="noreferrer" className="text-accent hover:underline">
                WingzSphere Tech
              </a>
            </p>
          </div>
          <p>Quality • Service • Trust</p>
        </div>
      </div>
    </footer>
  );
}
