import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, ArrowRight, IndianRupee, Calendar, Ruler, Building2, CheckCircle2, X, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import project1 from "@/assets/project1.jpeg";
import project2 from "@/assets/project2.jpeg";
import project3 from "@/assets/project3.jpeg";
import project4 from "@/assets/project4.png";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.png";
import project7 from "@/assets/project7.png";
import project8 from "@/assets/project8.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sahara Constructions Portfolio" },
      { name: "description", content: "Explore our portfolio: residential villas, commercial complexes, row houses and signature apartment projects across Maharashtra." },
      { property: "og:title", content: "Projects — Sahara Constructions" },
      { property: "og:description", content: "Browse 100+ delivered and ongoing projects spanning homes, offices and townships." },
      { property: "og:image", content: project1 },
    ],
  }),
  component: ProjectsPage,
});

type Category = "All" | "Residential" | "Commercial" | "Ongoing" | "Completed";

interface Project {
  title: string; img: string; location: string; status: "Ongoing" | "Completed";
  category: "Residential" | "Commercial"; budget: string; size: "tall" | "wide" | "normal";
  year: string; area: string; units: string; tagline: string; highlights: string[];
}

const projects: Project[] = [
  { title: "Kalash", img: project1, location: "Shantinagar, Bhusawal", status: "Completed", category: "Residential", budget: "48 Lakhs", size: "normal",
    year: "", area: "1025 sq. ft", units: "", tagline: "A modern 2 BHK Duplex row houses in the nature of Shantinagar.",
    highlights: ["24 hours water availability", "Separate Boring"] },

  { title: "Luxurious Bunglow", img: project2, location: "Bhusawal", status: "Completed", category: "Residential", budget: "40 Lakhs", size: "wide",
    year: "", area: "2400 sq.ft", units: "", tagline: "A luxurious Bunglow in the Bhusawal city with all modern amenities and specifications.",
    highlights: ["24 hours water availability", "Separate Boring"] },

  { title: "Luxurious Villa", img: project3, location: "Bhusawal", status: "Ongoing", category: "Residential", budget: "", size: "normal",
    year: "", area: "", units: "", tagline: "A luxiours Villa in the Bhusawal city with all modern amenities and specifications.",
    highlights: ["24 hours water availability", "Separate Boring"] },

  { title: "Golden Park II", img: project4, location: "Khadke Shivar, Bhusawal", status: "Ongoing", category: "Residential", budget: "18 Lakhs", size: "tall",
    year: "", area: "800 sq.ft", units: "", tagline: "A budget friendly project in the Bhusawal city with all modern amenities and specifications.",
    highlights: ["24 hours water availability", "Layered ambient lighting"] },

  { title: "Mazjha Ghar", img: project5, location: "Ring Road, Bhusawal", status: "Completed", category: "Residential", budget: "38 Lakhs", size: "normal",
    year: "", area: "1,175 sq.ft", units: "", tagline: "A warm, modern interior makeover with bespoke joinery and ambient lighting.",
    highlights: ["24 hours water availability", "Layered ambient lighting", "Curated art & decor"] },

  { title: "2 BHK Luxurious Bunglow", img: project6, location: "Khadka, Bhusawal", status: "Ongoing", category: "Residential", budget: "35 Lakhs", size: "wide",
    year: "", area: "1,800 sq.ft", units: "", tagline: "A luxurious Bunglow in the Bhusawal city with all modern amenities and specifications.",
    highlights: ["24 hours water availability", "Layered ambient lighting", "Curated art & decor", "Terrace access"] },

  { title: "Shri Niwas", img: project7, location: "Shanti Nagar, Bhusawal", status: "Ongoing", category: "Residential", budget: "45 Lakhs", size: "wide",
    year: "", area: "2,200 sq.ft", units: "", tagline: "A modern 2 BHK Luxurious Bunglow in the nature of Shantinagar, Bhusawal.",
    highlights: ["24 hours water availability", "Layered ambient lighting", "Curated art & decor"] },

  { title: "Golden Park", img: project8, location: "Khadke Shivar, Bhusawal", status: "Completed", category: "Residential", budget: "", size: "wide",
    year: "", area: "", units: "", tagline: "Highly cheaper project in the Bhusawal city with all modern amenities and specifications.",
    highlights: ["24 hours water availability", "Layered ambient lighting"] },
];

const filters: Category[] = ["All", "Residential", "Commercial", "Ongoing", "Completed"];

function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">Portfolio</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Our finest <span className="gradient-text">work</span>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A growing collection of homes, offices and townships built with precision and pride across Maharashtra.
            </p>
          </Reveal>
        </div>
      </section>

      
      {/* Masonry grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
  <Reveal key={i} delay={i * 70}>
                <article
                  onClick={() => setSelected(p)}
                  className="group relative rounded-3xl overflow-hidden bg-card hover-lift cursor-pointer aspect-[4/3]"
                >
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-primary-foreground flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-bold leading-tight line-clamp-1">{p.title}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xm text-primary-foreground/85">
                        <span className="flex items-center gap-1.5"><MapPin className="h-5 w-5 text-accent" />{p.location}</span>
                        {/*<span className="flex items-center gap-1.5"><IndianRupee className="h-3 w-3 text-accent" />{p.budget}</span> */}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all flex-shrink-0 ml-3">
                      <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-4 w-4 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
              <div className="relative">
                <SectionHeading inverted title="Like what you see?" subtitle="Let's plan your project together. Share your idea and we'll respond with a tailored proposal." />
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Detail Modal — Blueprint card ideology */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-0 rounded-3xl bg-background shadow-[var(--shadow-elegant)] [&>button]:hidden max-h-[92vh] overflow-y-auto">
          {selected && (
            <div className="grid md:grid-cols-2">
              {/* Left: Image hero with blueprint overlay */}
              <div className="relative h-72 md:h-full min-h-[420px] overflow-hidden">
                <img src={selected.img} alt={selected.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/50" />
                <button onClick={() => setSelected(null)} aria-label="Close" className="absolute top-5 right-5 h-10 w-10 rounded-full glass-dark text-primary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-primary-foreground">
                  <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight">{selected.title}</DialogTitle>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/90">
                    <MapPin className="h-4 w-4 text-accent" />{selected.location}
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-6 md:p-8 flex flex-col">
                <DialogDescription className="text-base text-foreground/80 leading-relaxed">
                  {selected.tagline}
                </DialogDescription>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: IndianRupee, label: "Budget", value: selected.budget },
                    { icon: Ruler, label: "Area", value: selected.area },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-secondary/60 p-4 border border-border/50">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        <s.icon className="h-3.5 w-3.5 text-primary" />{s.label}
                      </div>
                      <div className="mt-1.5 text-sm font-bold text-foreground">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Project Highlights</h4>
                  <ul className="mt-3 space-y-2.5">
                    {selected.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <Link to="/contact" onClick={() => setSelected(null)} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                    <Phone className="h-4 w-4" /> Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
