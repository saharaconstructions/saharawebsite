import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, BadgeIndianRupee, Eye, Award, Target, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import heroImg from "@/assets/hero-construction.jpg";
import award from "@/assets/award.jpeg";

// ─────────────────────────────────────────────────────────────────────────
// SEO CONSTANTS — keep these in sync with index.tsx / other routes
// IMPORTANT: replace SITE_URL with your real production domain before deploy
// ─────────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.saharaconstructions.in";
const PAGE_URL = `${SITE_URL}/about`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 social preview image — add this file to /public
const PAGE_TITLE = "About Sahara Constructions — Vision, Mission & Team | Bhusawal";
const PAGE_DESCRIPTION =
  "Learn about Sahara Constructions: our journey since 2008, our vision, mission, and why families and businesses across Bhusawal and the Jalgaon region trust us with their most important builds.";

// JSON-LD: AboutPage + the same Organization details used site-wide.
// BreadcrumbList helps Google show the page's position in your site hierarchy.
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": PAGE_TITLE,
  "description": PAGE_DESCRIPTION,
  "url": PAGE_URL,
  "mainEntity": {
    "@type": "GeneralContractor",
    "name": "Sahara Constructions",
    "url": SITE_URL,
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhusawal",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
    "award": ["RERA Certified", "ISO 9001:2015"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "About", "item": PAGE_URL },
  ],
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "about Sahara Constructions, construction company history Bhusawal, builders vision mission, RERA certified builders Maharashtra, ISO certified construction company",
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
      { type: "application/ld+json", children: JSON.stringify(aboutJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2008", title: "Founded with a vision", desc: "Sahara Constructions began with a simple promise — quality, service, and trust on every build." },
  { year: "2012", title: "First commercial milestone", desc: "Delivered our first multi-floor commercial complex, expanding from residential into business spaces." },
  { year: "2020", title: "50+ families served", desc: "Crossed the century mark of completed homes across Maharashtra, with a 5-star reputation." },
  { year: "2026", title: "Premium townships", desc: "Launched signature township projects with smart-home ready apartments and curated amenities." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Quality Materials", desc: "Premium grade steel, cement & finishes — verified at source." },
  { icon: Users, title: "Experienced Team", desc: "Engineers, architects & artisans with decades of combined craft." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Transparent quotes, no hidden costs, value at every milestone." },
  { icon: Eye, title: "Transparent Process", desc: "Live project updates, weekly walkthroughs, full visibility." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              About Us
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Crafting <span className="gradient-text">trust</span><br />one structure at a time.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              For over 18 years, we've built more than buildings — we've built reputations, relationships and resilient futures for families across Bhusawal and Jalgaon region.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Vision", text: "To be Maharashtra's most trusted construction partner — known for craftsmanship, transparency and homes that stand the test of time." },
            { icon: Heart, title: "Our Mission", text: "Deliver every project with uncompromising quality, fair pricing and clear communication, turning blueprints into landmarks our clients are proud of." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 120}>
              <div className="rounded-3xl bg-card border border-border p-10 hover-lift">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Our Journey" title="Built brick by brick" subtitle="A timeline of milestones that shaped who we are today." />
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                    <div className="inline-block rounded-full bg-primary text-primary-foreground px-4 py-1 text-sm font-bold">{t.year}</div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <h4 className="text-xl font-bold">{t.title}</h4>
                    <p className="mt-2 text-muted-foreground">{t.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Why Choose Us" title="Reasons clients keep coming back" />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="h-full rounded-3xl bg-card border border-border p-8 text-center hover-lift">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-accent/15 text-primary flex items-center justify-center">
                    <w.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-lg font-bold">{w.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-mesh)" }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">

            {/* Left - text + badges */}
            <div>
              <Award className="h-10 w-10 text-accent" />
              <h3 className="mt-4 text-3xl md:text-4xl font-bold">Recognised for excellence.</h3>
              <p className="mt-3 text-primary-foreground/80">Trusted certifications and recognitions that back our craft.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {["RERA Certified", "ISO 9001:2015"].map((b) => (
                  <div key={b} className="rounded-2xl glass-dark p-4 text-center">
                    <div className="text-sm font-semibold text-accent uppercase tracking-wider">{b}</div>
                    <div className="mt-1 text-xs text-primary-foreground/70">Verified</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - award photo */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-accent/30 blur-2xl" />
              <img
                src={award}
                alt="Sahara Constructions receiving the Maharashtra Business Award for excellence in construction"
                loading="lazy"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}