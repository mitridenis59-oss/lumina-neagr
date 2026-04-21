import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/lib/products";
import heroSmoke from "@/assets/hero-smoke.jpg";
import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOXE — Experiența premium a tutunului" },
      { name: "description", content: "Trabucuri rare, țigări premium, tutun vrac selectat și accesorii de lux. Livrare discretă în toată România." },
      { property: "og:title", content: "NOXE — Experiența premium a tutunului" },
      { property: "og:description", content: "Trabucuri rare, țigări premium, tutun vrac și accesorii de lux." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20">
        <img src={heroSmoke} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-radial)" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Colecția 2026 disponibilă</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              Fum, lumină, <br />
              <span className="text-gradient">eternitate.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
              O selecție curată de trabucuri rare, țigări premium și tutun vrac, livrate cu discreție către cunoscători adevărați.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/categorii">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-semibold px-8 glow-violet">
                  Explorează colecția <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/despre">
                <Button size="lg" variant="outline" className="px-8">Descoperă povestea</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-6 overflow-hidden bg-background/50">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm tracking-[0.3em] uppercase text-muted-foreground">
          {[...Array(2)].flatMap((_, i) => ["Cuba", "•", "Republica Dominicană", "•", "Virginia", "•", "Kentucky", "•", "Elveția", "•", "Italia", "•"].map((t, j) => (
            <span key={`${i}-${j}`}>{t}</span>
          )))}
        </div>
      </div>

      {/* CATEGORII */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Categorii</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Patru lumi distincte</h2>
          </div>
          <Link to="/categorii" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground items-center gap-1">
            Vezi toate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to="/categorie/$cat"
              params={{ cat: c.id }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-gradient transition-all">{c.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Selecția curatorilor</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Piese rare. Aleasă cu pasiune.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* VALORI */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "100% autentic", desc: "Fiecare produs vine cu certificat de proveniență." },
            { icon: Truck, title: "Livrare discretă", desc: "Ambalaj neutru, curier de încredere, 24-48h." },
            { icon: Sparkles, title: "Curatori experți", desc: "Selecție făcută de pasionați cu peste 20 de ani de experiență." },
          ].map((v) => (
            <div key={v.title} className="glass rounded-2xl p-8 neon-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                <v.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
