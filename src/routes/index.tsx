import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import {
  ArrowRight, Building2, Hammer, Home, Paintbrush, Wrench, Droplets,
  Award, Users, ShieldCheck, MapPin, Star, Quote, CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import heroImg from "@/assets/hero-construction.jpg";
import featured1 from "@/assets/featured1.png";
import featured2 from "@/assets/featured2.png";
import featured3 from "@/assets/featured3.png";
import featured4 from "@/assets/featured4.png";
import nowbooking from "@/assets/nowbooking.jpeg";
import cat1 from "@/assets/cat1.jpg";
import cat2 from "@/assets/cat2.jpg";
import cat3 from "@/assets/cat3.jpg";
import cat4 from "@/assets/cat4.jpg";
import cat5 from "@/assets/cat5.jpg";
import cat6 from "@/assets/cat6.jpg";
import cat7 from "@/assets/cat7.jpg";
import cat8 from "@/assets/cat8.jpg";
import cat9 from "@/assets/cat9.jpg";
import cat10 from "@/assets/cat10.jpg";
import cat11 from "@/assets/cat11.jpg";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";

// ─────────────────────────────────────────────────────────────────────────
// SEO CONSTANTS
// IMPORTANT: replace SITE_URL with your real production domain before deploy
// ─────────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.saharaconstructions.in";
const PAGE_URL = `${SITE_URL}/`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 social preview image — add this file to /public
const PAGE_TITLE = "Sahara Constructions Bhusawal — Building Trust. Creating Future.";
const PAGE_DESCRIPTION =
  "Sahara Constructions is Bhusawal's trusted construction company with 18+ years of experience and 50+ completed projects. We deliver residential, commercial, RCC, interior design, plumbing, electrical & waterproofing services with 100% quality-assured materials. Get a free quote today.";

// JSON-LD structured data for local SEO / Google Maps / rich results.
// GeneralContractor is a more specific subtype of LocalBusiness, which
// Google recognises and prefers for construction companies.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Sahara Constructions",
  "image": OG_IMAGE,
  "url": SITE_URL,
  "telephone": "+91-9834771993",
  "priceRange": "₹₹",
  "description": PAGE_DESCRIPTION,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhusawal",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN",
  },
  "areaServed": {
    "@type": "City",
    "name": "Bhusawal",
  },
  "sameAs": [
    "https://www.instagram.com/saharaconstructions_bhusawal/",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "50",
  },
  "founder": {
    "@type": "Organization",
    "name": "Sahara Constructions",
  },
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RCC Work" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing & Electrical" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waterproofing" } },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "construction company Bhusawal, builders Bhusawal, RCC construction Maharashtra, residential construction Bhusawal, commercial construction, interior design Bhusawal, Sahara Constructions",
      },
      { name: "robots", content: "index, follow" },

      // Open Graph
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Sahara Constructions" },
      { property: "og:locale", content: "en_IN" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Home, title: "Residential Construction", desc: "Custom homes, bungalows & row houses built with precision." },
  { icon: Building2, title: "Commercial Projects", desc: "Office complexes, showrooms & retail spaces." },
  { icon: Hammer, title: "RCC Work", desc: "Engineered structural framework with quality steel & concrete." },
  { icon: Paintbrush, title: "Interior Design", desc: "Bespoke interiors that blend comfort with character." },
  { icon: Wrench, title: "Plumbing & Electrical", desc: "Certified fittings, modern systems, lifetime reliability." },
  { icon: Droplets, title: "Waterproofing", desc: "Advanced solutions for monsoon-proof, lasting structures." },
];

const trustStats = [
  { icon: Award, value: "18+", label: "Years Experience" },
  { icon: Building2, value: "50+", label: "Projects Done" },
  { icon: ShieldCheck, value: "100%", label: "Quality Assured" },
  { icon: Users, value: "4.5/5", label: "Customer Rating" },
];

const featuredProjects = [
  { img: featured1, title: "Shri Niwas 2 BHK Luxury Bunglow", location: "Yawal Rd, Bhusawal", status: "Completed" },
  { img: featured2, title: "Golden Park II", location: "Khadke Shivar, Bhusawal", status: "Completed" },
  { img: featured3, title: "3 BHK Luxurious Flat", location: "Ring Road, Bhusawal", status: "Completed" },
  { img: featured4, title: "2 BHK Luxurious Bungalow", location: "Khadke Shivar, Bhusawal", status: "Completed" },
];

const testimonials = [
  { name: "Rahul Deshmukh", role: "Homeowner, Bhusawal", text: "Sahara delivered our dream home on time and on budget. The finish quality is outstanding — every detail handled with care." },
  { name: "Priya Patil", role: "Business Owner, Bhusawal", text: "Professional, transparent and incredibly skilled. Our showroom turned out exactly as envisioned." },
  { name: "Amit Joshi", role: "Developer, Bhusawal", text: "From RCC to handover, the team was reliable and the workmanship is best-in-class. Highly recommended." },
];

const catalogueImages = [
  { src: cat1, label: "Overview" },
  { src: cat2, label: "Services" },
  { src: cat3, label: "Building Construction & RCC" },
  { src: cat4, label: "Plastering & Furnishings" },
  { src: cat5, label: "Furniture & Plumbing" },
  { src: cat6, label: "Electric & Painting" },
  { src: cat7, label: "Row Houses & Bungalows" },
  { src: cat8, label: "Apartments & Rainwater" },
  { src: cat9, label: "Waterproofing & Cooling" },
  { src: cat10, label: "Projects" },
  { src: cat11, label: "Why Us?" },
];

const igReels = [
  "DUNOZY6Dcfd",
  "DSzzqX8DAJ3",
  "DHyAYBDMWnn",
  "DSNnZ_jiImY",
  "DSS3Y4EDJFN",
];

function processInstagramEmbeds() {
  try {
    (window as any).instgrm?.Embeds?.process();
  } catch (_) { }
}

function InstagramCarousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  const prev = () => setCurrent((c) => (c === 0 ? igReels.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === igReels.length - 1 ? 0 : c + 1));

  const handleLoad = (shortcode: string) => {
    setLoaded((prev) => ({ ...prev, [shortcode]: true }));
  };

  useEffect(() => {
    if (document.querySelector('script[src*="instagram.com/embed"]')) {
      processInstagramEmbeds();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = processInstagramEmbeds;
    script.onerror = () => { };
    document.body.appendChild(script);
  }, []);

  // On mobile show only current; on md+ show prev/current/next
  const visibleIndices = [
    (current - 1 + igReels.length) % igReels.length,
    current,
    (current + 1) % igReels.length,
  ];

  return (
    <>
      <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        {/* Prev */}
        <button
          onClick={prev}
          className="z-10 flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] grid place-items-center hover:bg-accent transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Cards */}
        <div className="flex items-center justify-center gap-3 md:gap-4 flex-1 min-w-0 overflow-hidden">
          {visibleIndices.map((reelIdx, position) => {
            const isCurrent = position === 1;
            const shortcode = igReels[reelIdx];

            // On mobile, hide side cards entirely
            const mobileHidden = !isCurrent ? "hidden md:flex" : "flex";

            return (
              <div
                key={`wrapper-${shortcode}`}
                className={`${mobileHidden} transition-all duration-500 flex-shrink-0 rounded-2xl overflow-hidden border border-border flex-col
                  ${isCurrent
                    ? "w-full max-w-[300px] sm:max-w-[340px] md:w-[320px] md:max-w-none lg:w-[360px] scale-100 opacity-100 z-10 shadow-[var(--shadow-elegant)]"
                    : "md:w-[220px] lg:w-[260px] scale-90 opacity-40 z-0"
                  }`}
              >
                {!loaded[shortcode] && (
                  <div className="w-full bg-muted flex items-center justify-center rounded-2xl" style={{ aspectRatio: "9/16", minHeight: 400 }}>
                    <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <iframe
                  key={`iframe-${shortcode}`}
                  src={`https://www.instagram.com/reel/${shortcode}/embed/`}
                  className={`w-full rounded-2xl transition-opacity duration-300 ${loaded[shortcode] ? "opacity-100" : "opacity-0 absolute"}`}
                  style={{
                    height: isCurrent ? 560 : 500,
                    border: "none",
                    display: loaded[shortcode] ? "block" : "none",
                  }}
                  allowFullScreen
                  scrolling="no"
                  onLoad={() => handleLoad(shortcode)}
                  title={`Instagram reel ${shortcode}`}
                />
              </div>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="z-10 flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] grid place-items-center hover:bg-accent transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {igReels.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current
                ? "w-6 h-2.5 bg-accent"
                : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40"
              }`}
            aria-label={`Go to reel ${i + 1}`}
          />
        ))}
      </div>

      {/* Follow Button */}
      <div className="text-center mt-8">
        <a
          href="https://www.instagram.com/saharaconstructions_bhusawal/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-soft)] hover:bg-accent transition-colors text-sm"
        >
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          Follow us on Instagram
        </a>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden diagonal-clip-b">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sahara Constructions modern luxury home construction project in Bhusawal" className="h-full w-full object-cover scale-105" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        <div className="absolute top-24 right-10 h-32 w-32 rounded-3xl glass-dark animate-[float_7s_ease-in-out_infinite] hidden md:block" />
        <div className="absolute bottom-32 left-10 h-20 w-20 rounded-2xl bg-accent/30 backdrop-blur-md animate-[float_5s_ease-in-out_infinite] hidden md:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark text-primary-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Bhusawal's Trusted Builders
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-[1.05]">
              Building Trust.<br />
              <span className="bg-gradient-to-r from-accent-glow to-accent bg-clip-text text-transparent">
                Creating Future.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              Premium end-to-end construction — from concept to keys. Crafted with precision, delivered with integrity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-all"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full glass-dark text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-white/15 transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS — fixed mobile layout */}
      <section className="relative -mt-16 sm:-mt-20 z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 shadow-[var(--shadow-elegant)] border border-white/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {trustStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-14 sm:w-14 flex-shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground shadow-[var(--shadow-soft)]">
                      <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text truncate">{s.value}</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">{s.label}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: "var(--gradient-mesh)" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="End-to-end construction services"
              subtitle="From foundation to finishing — a single trusted partner for every stage of your build."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative h-full rounded-3xl bg-card border border-border p-8 hover-lift overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Work"
              title="Projects we're proud of"
              subtitle="A glimpse into the homes, offices and communities we've helped bring to life."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link to="/projects" className="group block relative rounded-3xl overflow-hidden bg-card hover-lift">
                  <div className="aspect-[1/1] overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.location} | Sahara Constructions`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                    <span className="inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {p.status}
                    </span>
                    <h3 className="mt-1.5 text-sm font-bold leading-tight line-clamp-1">{p.title}</h3>
                    <p className="mt-0.5 text-[10px] flex items-center gap-1 text-primary-foreground/80">
                      <MapPin className="h-2.5 w-2.5" /> {p.location}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-all hover:scale-105">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Client Stories"
              title="Trusted by families & businesses"
              subtitle="Real stories from people who've trusted us with their most important projects."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="h-full rounded-3xl bg-card border border-border p-8 hover-lift relative">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/30" />
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-current" />))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT PROJECT FEATURE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden bg-primary text-primary-foreground p-8 md:p-14 shadow-[var(--shadow-elegant)]">
              <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-mesh)" }} />
              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-accent-foreground animate-pulse" /> Now Booking
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold">Kalash</h3>
                  <p className="mt-2 text-primary-foreground/80 flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Shantinagar, Near Kamal Ganpati Hall, Yawal Road, Bhusawal</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {["2 BHK luxury Duplex Row Houses", "24 hours water supply", "Separate borewell", "Home loan Facility available"].map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-primary-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/919834771993?text=I'd%20like%20to%20book%20a%20site%20visit%20for%20Kalash"
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform"
                    >
                      Book Site Visit <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-2 rounded-3xl bg-accent/30 blur-2xl" />
                  <img src={nowbooking} alt="Kalash — 2 BHK luxury duplex row houses, Shantinagar, Yawal Road, Bhusawal" loading="lazy" width={1280} height={960} className="relative rounded-3xl shadow-2xl" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATALOGUE MARQUEE */}
      <section className="py-24 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              title="Explore Our Catalogue"
              subtitle="Flip through our full catalogue"
            />
          </Reveal>
        </div>

        <div
          className="relative mt-14 w-full group"
          style={{ overflowX: "hidden", overflowY: "visible" }}
        >
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to right, var(--background, #fff), transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to left, var(--background, #fff), transparent)" }}
          />

          <div
            className="flex gap-7 w-max py-6"
            style={{ animation: "catalogueScroll 55s linear infinite" }}
          >
            {[...catalogueImages, ...catalogueImages].map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[320px] sm:w-[380px] rounded-2xl border border-border cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
                style={{
                  overflow: "hidden",
                  boxShadow: "var(--shadow-elegant)",
                  transformOrigin: "center center",
                  willChange: "transform",
                }}
              >
                <div className="aspect-[3/4] bg-muted">
                  <img
                    src={item.src}
                    alt={`Sahara Constructions catalogue — ${item.label}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-primary/90 to-transparent">
                  <p className="text-xs font-semibold text-primary-foreground truncate">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes catalogueScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .group:hover div[style*="catalogueScroll"] {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* INSTAGRAM REELS */}
      <section className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">From The Gram</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">We're on Instagram</h2>
              <a
                href="https://www.instagram.com/saharaconstructions_bhusawal/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all text-sm"
              >
                @saharaconstructions_bhusawal
              </a>
            </div>
          </Reveal>

          <InstagramCarousel />
        </div>
      </section>

      {/* AWARD RECOGNITION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Achievements"
              title="Award Recognition"
              subtitle="Proud moments that reflect our commitment to excellence in construction."
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <VideoCard src={video1} />
            </Reveal>
            <Reveal delay={200}>
              <VideoCard src={video2} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="relative rounded-[2rem] bg-gradient-to-br from-primary via-primary-glow to-primary p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
              <div className="relative">
                <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                  Let's build your <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">dream home</span>.
                </h3>
                <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
                  Talk to our team today. Get a personalised quote and an honest plan within 24 hours.
                </p>
                <a
                  href="https://wa.me/919834771993"
                  target="_blank" rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
                >
                  Talk on WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );

  function VideoCard({ src }: { src: string }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
      setPlaying(true);
      videoRef.current?.play();
    };

    return (
      <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] aspect-video bg-muted">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          controls={playing}
          playsInline
        />
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-primary/20"
            onClick={handlePlay}
          >
            <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center shadow-[var(--shadow-glow)] hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  }
}