import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import officeImg from "@/assets/office.jpeg";

// ─────────────────────────────────────────────────────────────────────────
// SEO CONSTANTS — keep these in sync with index.tsx / other routes
// IMPORTANT: replace SITE_URL with your real production domain before deploy
// ─────────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.saharaconstructions.in";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 social preview image — add this file to /public
const PAGE_TITLE = "Contact Sahara Constructions — Get a Free Quote | Bhusawal";
const PAGE_DESCRIPTION =
  "Talk to Sahara Constructions about your project. Call +91 98347 71993, WhatsApp us or fill the form for a free, personalised quote within 24 hours. Office in Khadka, Bhusawal.";

// Coordinates pulled from the existing Google Maps embed (2d=lng, 3d=lat)
const GEO_LAT = 21.0313018;
const GEO_LNG = 75.8005562;

// JSON-LD: ContactPage wrapping the same GeneralContractor entity, with
// full address, phone and geo-coordinates for local/maps SEO.
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": PAGE_TITLE,
  "description": PAGE_DESCRIPTION,
  "url": PAGE_URL,
  "mainEntity": {
    "@type": "GeneralContractor",
    "name": "Sahara Constructions",
    "url": SITE_URL,
    "telephone": "+91-9834771993",
    "email": "saharaconstructions29@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khadka - Bhusawal Rd, Samrth Nagar, Khadake",
      "addressLocality": "Bhusawal",
      "addressRegion": "Maharashtra",
      "postalCode": "425201",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GEO_LAT,
      "longitude": GEO_LNG,
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": PAGE_URL },
  ],
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "contact Sahara Constructions, construction company Bhusawal phone number, get free quote builder, Khadka Bhusawal construction office, RERA builder contact Maharashtra",
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
      { type: "application/ld+json", children: JSON.stringify(contactJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Quote Request - Sahara Constructions");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Thanks! We'll call you back within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]">
              Let's <span className="gradient-text">build</span> together.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us about your project. We'll get back within 24 hours with a free, detailed plan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info Cards — shown above form on mobile */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4 lg:hidden">
        <div className="mx-auto max-w-7xl flex flex-col gap-3">
          <InfoCard icon={Phone} label="Call us" value="+91 98347 71993" href="tel:+919834771993" />
          <InfoCard icon={Mail} label="Email" value="saharaconstructions29@gmail.com" href="mailto:saharaconstructions29@gmail.com" />
          <InfoCard icon={MapPin} label="Office" value="Khadka - Bhusawal Rd, Samrth Nagar, Khadake, Maharashtra 425201" />
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">

          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl sm:rounded-[2rem] bg-card border border-border p-5 sm:p-8 md:p-10 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Request a free quote</h2>
              <p className="mt-1.5 text-muted-foreground text-sm">Fill in your details and we'll be in touch shortly.</p>

              <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="Project Location" name="location" className="sm:col-span-2" />

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  >
                    <option>Residential Construction</option>
                    <option>Commercial Project</option>
                    <option>RCC Work</option>
                    <option>Interior Design</option>
                    <option>Renovation / Repairs</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                    placeholder="Tell us a bit about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary-glow transition-all hover:scale-[1.02] disabled:opacity-60 w-full"
                >
                  {submitting ? "Sending..." : (<>Send Request <Send className="h-4 w-4" /></>)}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Info — desktop only (hidden on mobile, shown above) */}
          <Reveal delay={120} className="lg:col-span-2 hidden lg:flex flex-col gap-3">
            <InfoCard icon={Phone} label="Call us" value="+91 98347 71993" href="tel:+919834771993" />
            <InfoCard icon={Mail} label="Email" value="saharaconstructions29@gmail.com" href="mailto:saharaconstructions29@gmail.com" />
            <InfoCard icon={MapPin} label="Office" value="Khadka - Bhusawal Rd, Samrth Nagar, Khadake, Maharashtra 425201" />

            {/* Office Photo with Map overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={officeImg}
                alt="Sahara Constructions office building, Khadka - Bhusawal Road, Maharashtra"
                loading="lazy"
                className="w-full h-64 xl:h-80 object-cover"
              />
              <div className="absolute bottom-3 right-3 w-36 h-28 rounded-xl overflow-hidden border-2 border-white shadow-lg">
                <iframe
                  title="Sahara Constructions location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.8493737012113!2d75.8005562!3d21.031301799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9a6712ed636fb%3A0x7584fe899210b086!2sSAHARA%20CONSTRUCTIONS!5e1!3m2!1sen!2sin!4v1779882237169!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, display: "block" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Office photo + map — mobile only, below form */}
      <section className="px-4 sm:px-6 lg:hidden pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <img
              src={officeImg}
              alt="Sahara Constructions office building, Khadka - Bhusawal Road, Maharashtra"
              loading="lazy"
              className="w-full h-72 sm:h-80 object-cover"
            />
            <div className="absolute bottom-3 right-3 w-32 h-24 sm:w-36 sm:h-28 rounded-xl overflow-hidden border-2 border-white shadow-lg">
              <iframe
                title="Sahara Constructions location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.8493737012113!2d75.8005562!3d21.031301799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9a6712ed636fb%3A0x7584fe899210b086!2sSAHARA%20CONSTRUCTIONS!5e1!3m2!1sen!2sin!4v1779882237169!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, className = "",
}: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon, label, value, href,
}: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string;
}) {
  const inner = (
    <div className="rounded-2xl p-4 sm:p-6 border border-border bg-card transition-all hover-lift">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-1 text-sm sm:text-base font-semibold break-words">{value}</div>
        </div>
      </div>
    </div>
  );
  return href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a>
    : inner;
}