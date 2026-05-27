import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, Hammer, Layers, Sofa, Armchair, Wrench, Zap, Paintbrush,
  Home, CloudRain, Droplets, Snowflake, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Img1 from "@/assets/service1.png";
import Img2 from "@/assets/service2.png";
import Img3 from "@/assets/service3.png";
import Img4 from "@/assets/service4.png";
import Img5 from "@/assets/service5.png";
import Img6 from "@/assets/service6.png";
import Img7 from "@/assets/service7.png";
import Img8 from "@/assets/service8.png";
import Img9 from "@/assets/service9.png";
import Img10 from "@/assets/service10.png";
import Img11 from "@/assets/service11.png";
import Img12 from "@/assets/service12.png";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sahara Constructions | RCC, Interiors, Plumbing & More" },
      { name: "description", content: "Comprehensive construction services: building construction, RCC, plastering, interiors, plumbing, electrical, painting, waterproofing, rainwater harvesting and more." },
      { property: "og:title", content: "Construction Services — Sahara Constructions" },
      { property: "og:description", content: "Everything from foundation to finishing under one trusted roof." },
      { property: "og:image", content: Img1 },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Building2, title: "Building Construction", img: Img1, desc: "Complete turnkey construction — from soil testing and design through structural completion to handover. Built to last with premium materials and engineering precision." },
  { icon: Hammer, title: "RCC Work", img: Img2, desc: "Engineered reinforced concrete structures: footings, columns, beams and slabs designed for earthquake resistance and lasting structural integrity." },
  { icon: Layers, title: "Plastering", img: Img3, desc: "Smooth, crack-free internal and external plastering with premium cement-sand mixes and skilled application for flawless finishing surfaces." },
  { icon: Sofa, title: "Home Furnishing", img: Img4, desc: "Full furnishing solutions: curtains, lighting, soft furnishings and styling tailored to your home's character and your lifestyle." },
  { icon: Armchair, title: "Furniture", img: Img5, desc: "Bespoke modular kitchens, wardrobes, beds and built-ins crafted from premium boards and finishes — designed to fit and last." },
  { icon: Wrench, title: "Plumbing", img: Img6, desc: "Concealed and surface plumbing using ISI-marked CPVC/UPVC pipes, with leak-tested installations and 24/7 service support." },
  { icon: Zap, title: "Electrical Fittings", img: Img7, desc: "Certified electrical work: modular switches, copper wiring, MCB-protected circuits and smart-home ready wiring layouts." },
  { icon: Paintbrush, title: "Painting (Interior & Exterior)", img: Img8, desc: "Premium emulsion and weather-resistant exterior paints with proper surface preparation for a flawless, long-lasting finish." },
  { icon: Home, title: "Row Houses, Bungalows & Apartments", img: Img9, desc: "Custom-built row houses, independent bungalows and multi-storey apartment projects designed for modern living." },
  { icon: CloudRain, title: "Rainwater Harvesting", img: Img10, desc: "Sustainable rainwater collection and groundwater recharge systems — eco-friendly and compliant with municipal norms." },
  { icon: Droplets, title: "Waterproofing", img: Img11, desc: "Multi-layer waterproofing for terraces, basements and bathrooms — engineered to keep monsoons firmly outside your home." },
  { icon: Snowflake, title: "Centralised Air Cooling", img: Img12, desc: "Energy-efficient central HVAC and VRV systems for residential and commercial spaces, sized and zoned to your layout." },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">Services</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Everything you need <br /><span className="gradient-text">under one roof.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A complete suite of construction and finishing services — delivered with the same craftsmanship and care, end to end.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={50}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/20 blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)]">
                    <img src={s.img} alt={s.title} loading="lazy" width={1280} height={960} className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground shadow-[var(--shadow-glow)] hidden md:flex">
                    <span className="text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center shadow-[var(--shadow-soft)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-3xl md:text-4xl font-bold">{s.title}</h2>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-all hover:scale-105">
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
              <SectionHeading inverted eyebrow="Ready to Start" title="Get a personalised service quote" subtitle="Tell us what you're planning. We'll respond within 24 hours with a detailed plan and transparent pricing." />
              <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
