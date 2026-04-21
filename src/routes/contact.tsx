import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NOXE" },
      { name: "description", content: "Ia legătura cu echipa NOXE. Suntem aici pentru orice întrebare despre selecția noastră." },
      { property: "og:title", content: "Contact — NOXE" },
      { property: "og:description", content: "Contactează echipa NOXE." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
      <div className="animate-fade-up">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Hai să vorbim.</h1>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">Recomandări personalizate, comenzi speciale, colaborări — răspundem în maxim 24 de ore.</p>
        <div className="space-y-5">
          {[{icon: Mail, label: "contact@noxe.ro"}, {icon: Phone, label: "+40 700 000 000"}, {icon: MapPin, label: "Calea Victoriei 120, București"}].map((c, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center"><c.icon className="w-4 h-4 text-accent" /></div>
              <span className="text-foreground">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="glass rounded-2xl p-8 space-y-4 "
      >
        <Input required placeholder="Numele tău" className="bg-secondary/40 h-12" />
        <Input required type="email" placeholder="Email" className="bg-secondary/40 h-12" />
        <Input placeholder="Subiect" className="bg-secondary/40 h-12" />
        <Textarea required placeholder="Mesajul tău..." rows={5} className="bg-secondary/40" />
        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold">
          {sent ? "Mesaj trimis ✓" : "Trimite mesajul"}
        </Button>
      </form>
    </div>
  );
}
