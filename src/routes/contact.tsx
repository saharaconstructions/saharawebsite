import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import officeImg from "@/assets/office.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sahara Constructions — Get a Free Quote" },
      { name: "description", content: "Talk to Sahara Constructions about your project. Call +91 98347 71993, WhatsApp us or fill the form for a free quote within 24 hours." },
      { property: "og:title", content: "Contact Sahara Constructions" },
      { property: "og:description", content: "Get a personalised quote within 24 hours. Call, WhatsApp or message us today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll call you back within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Let's <span className="gradient-text">build</span> together.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us about your project. We'll get back within 24 hours with a free, detailed plan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-[2rem] bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]">
              <h2 className="text-2xl md:text-3xl font-bold">Request a free quote</h2>
              <p className="mt-2 text-muted-foreground text-sm">Fill in your details and we'll be in touch shortly.</p>
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="Project Location" name="location" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Service Needed</label>
                  <select name="service" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
                    <option>Residential Construction</option>
                    <option>Commercial Project</option>
                    <option>RCC Work</option>
                    <option>Interior Design</option>
                    <option>Renovation / Repairs</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Message</label>
                  <textarea name="message" rows={4} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="Tell us a bit about your project..." />
                </div>
                <button type="submit" disabled={submitting} className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary-glow transition-all hover:scale-[1.02] disabled:opacity-60">
                  {submitting ? "Sending..." : (<>Send Request <Send className="h-4 w-4" /></>)}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="lg:col-span-2 flex flex-col gap-3">
            <InfoCard icon={Phone} label="Call us" value="+91 98347 71993" href="tel:+919834771993" />
            <InfoCard icon={Mail} label="Email" value="saharaconstructions29@gmail.com" href="mailto:saharaconstructions29@gmail.com" />
            <InfoCard icon={MapPin} label="Office" value="Khadka - Bhusawal Rd, Samrth Nagar, Khadake, Maharashtra 425201" />
            
            {/* Office Photo with Map overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={officeImg}
                alt="Sahara Constructions Office"
                className="w-full h-97 object-cover"
              />
              {/* Map overlay - bottom right corner */}
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


    </>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
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

function InfoCard({ icon: Icon, label, value, href, accent }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; accent?: boolean }) {
  const inner = (
    <div className={`rounded-2xl p-6 border transition-all hover-lift ${accent ? "bg-accent text-accent-foreground border-transparent" : "bg-card border-border"}`}>
      <div className="flex items-start gap-4">
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${accent ? "bg-accent-foreground/10" : "bg-primary/10 text-primary"}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className={`text-xs font-semibold uppercase tracking-wider ${accent ? "text-accent-foreground/75" : "text-muted-foreground"}`}>{label}</div>
          <div className="mt-1 text-base font-semibold">{value}</div>
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
