import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919834771993?text=Hi%20Sahara%20Constructions%2C%20I'd%20like%20a%20free%20quote."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--whatsapp)] animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-4 py-3 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </span>
    </a>
  );
}
