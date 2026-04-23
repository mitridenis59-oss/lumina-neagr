import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/lib/products";
import heroTobacco from "@/assets/hero-tobacco.jpg";
import bannerField from "@/assets/banner-field.jpg";
import bannerCuring from "@/assets/banner-curing.jpg";
import bannerHands from "@/assets/banner-hands.jpg";
import virginiaImg from "@/assets/t-virginia.jpg";
import burleyImg from "@/assets/t-burley.jpg";
import pipeImg from "@/assets/t-pipe.jpg";
import latakiaImg from "@/assets/t-latakia.jpg";
import { ArrowRight, Award, Truck, Shield, Quote, Star, Leaf, Flame, Package, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Tutunului — Magazin de specialitate · Tutun premium" },
      { name: "description", content: "Tutun de pipă, vrac, pentru rulat, foi întregi și accesorii. Selecție atent curată din cele mai bune regiuni. Livrare discretă în România." },
      { property: "og:title", content: "Casa Tutunului — Magazin de specialitate" },
      { property: "og:description", content: "Tutun premium din Virginia, Kentucky, Turcia, Siria. Pipe, foițe, accesorii." },
      { property: "og:image", content: heroTobacco },
    ],
  }),
  component: Index,
});

function Index() {
  const bestSellers = products.filter(p => p.badge === "Best seller" || (p.rating ?? 0) >= 4.8).slice(0, 6);
  const newArrivals = products.filter(p => p.badge === "Nou").concat(products.slice(-4)).slice(0, 4);
  const featured = products.find(p => p.slug === "perique-louisiana")!;

  return (
    <>
      {/* HERO — compact pe mobil, larg pe desktop */}
      <section className="relative min-h-[80vh] sm:min-h-[88vh] flex items-center overflow-hidden -mt-32 pt-32">
        <img src={heroTobacco} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-primary mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-px bg-primary" /> Magazin de specialitate · Est. 2024
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] mb-5 sm:mb-7 text-foreground">
              Arta tutunului, <br />
              <em className="text-shimmer not-italic">redescoperită</em>.
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed mb-7 sm:mb-9 font-light">
              Tutun de pipă, vrac, pentru rulat și foi întregi din cele mai prestigioase regiuni ale lumii. Curat, autentic, livrat discret.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/categorii">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-[0.18em] uppercase text-[11px] sm:text-xs px-6 sm:px-9 h-12 sm:h-13 rounded-sm">
                  Descoperă colecția <ArrowRight className="ml-2 sm:ml-3 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/despre">
                <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary tracking-[0.18em] uppercase text-[11px] sm:text-xs px-6 sm:px-9 h-12 sm:h-13 rounded-sm">
                  Povestea casei
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 max-w-md">
              <div>
                <div className="font-display text-2xl sm:text-3xl text-primary">15+</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Soiuri rare</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-primary">4.8</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Notă medie</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-primary">24h</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Livrare</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP STRIP — compact pe mobil */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { icon: Truck, title: "Livrare 24h", sub: "Gratuit peste 300 RON" },
            { icon: Shield, title: "100% autentic", sub: "Direct de la sursă" },
            { icon: Award, title: "Curatori experți", sub: "Selecție garantată" },
            { icon: Package, title: "Ambalaj discret", sub: "Fără logo exterior" },
          ].map((v, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-4 px-2 sm:px-5 py-4 sm:py-6">
              <v.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary shrink-0" strokeWidth={1.5} />
              <div className="min-w-0">
                <div className="font-display text-sm sm:text-base text-foreground truncate">{v.title}</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-0.5 truncate">{v.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER PRINCIPAL CU CTA — full width, compact pe mobil */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Banner mare stânga */}
          <Link to="/categorie/$cat" params={{ cat: "vrac" }} className="lg:col-span-7 relative h-[260px] sm:h-[360px] lg:h-[480px] overflow-hidden group">
            <img src={virginiaImg} alt="Tutun vrac" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="relative h-full flex items-center p-6 sm:p-10 lg:p-14">
              <div className="max-w-md">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Categoria lunii</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4 leading-tight">
                  Tutun vrac<br /><em className="text-primary not-italic">de excepție</em>
                </h2>
                <p className="text-sm text-muted-foreground mb-5 max-w-xs">Frunze tăiate fin, păstrate la umiditate optimă. Virginia, Burley, Oriental.</p>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary border-b border-primary/40 pb-1 group-hover:gap-3 transition-all">
                  Vezi categoria <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
          {/* Două bannere mici dreapta */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-0">
            <Link to="/categorie/$cat" params={{ cat: "pipa" }} className="relative h-[180px] sm:h-[220px] lg:h-[240px] overflow-hidden group">
              <img src={pipeImg} alt="Tutun pipă" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-[9px] tracking-[0.3em] uppercase text-primary mb-1">Pentru pipă</p>
                <h3 className="font-display text-xl sm:text-2xl text-foreground">Blend-uri clasice</h3>
              </div>
            </Link>
            <Link to="/categorie/$cat" params={{ cat: "rulat" }} className="relative h-[180px] sm:h-[220px] lg:h-[240px] overflow-hidden group bg-accent/30">
              <img src={burleyImg} alt="Pentru rulat" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-[9px] tracking-[0.3em] uppercase text-primary mb-1">Pentru rulat</p>
                <h3 className="font-display text-xl sm:text-2xl text-foreground">Amestecuri fine</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORII — pile pe mobil, grid pe desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-primary mb-3">Universul Casa Tutunului</p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-3">Șase categorii distincte</h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to="/categorie/$cat"
              params={{ cat: c.id }}
              className="group relative aspect-square rounded-sm overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-up shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-center">
                <h3 className="font-display text-base sm:text-xl text-foreground leading-tight mb-0.5">{c.name}</h3>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">{c.count} produse</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS — 2 col mobile, 3-4 desktop */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-end justify-between mb-8 sm:mb-10 flex-wrap gap-3">
            <div>
              <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-primary mb-2">Cele mai apreciate</p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground">Best sellers</h2>
            </div>
            <Link to="/categorii" className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-primary hover:text-primary/80 inline-flex items-center gap-2 border-b border-primary/40 pb-1">
              Vezi tot <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* PRODUS FEATURED — banner cu un singur produs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid md:grid-cols-2 gap-0 bg-gradient-to-br from-accent/30 via-card to-card border border-primary/20 rounded-sm overflow-hidden shadow-warm">
          <div className="relative aspect-square md:aspect-auto md:min-h-[420px] overflow-hidden">
            <img src={featured.image} alt={featured.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-semibold">Produsul lunii</span>
            </div>
          </div>
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">{featured.origin}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">{featured.name}</h2>
            <div className="flex items-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-xs text-muted-foreground ml-1">({featured.reviews} recenzii)</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.notes?.map((n) => (
                <span key={n} className="text-[10px] tracking-[0.18em] uppercase border border-primary/30 text-primary px-3 py-1 rounded-sm">{n}</span>
              ))}
            </div>
            <div className="flex items-end gap-4 mb-6">
              <span className="font-display text-4xl sm:text-5xl text-primary">{featured.price}</span>
              <span className="text-sm tracking-widest uppercase text-muted-foreground mb-1.5">RON / {featured.weight}</span>
            </div>
            <Link to="/produs/$slug" params={{ slug: featured.slug }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] uppercase text-xs px-8 h-12 rounded-sm w-full sm:w-auto">
                Vezi produsul <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE — origini */}
      <div className="border-y border-border py-5 sm:py-7 overflow-hidden bg-background">
        <div className="flex animate-marquee whitespace-nowrap gap-8 sm:gap-12 text-xs sm:text-sm tracking-[0.35em] uppercase text-muted-foreground/60">
          {[...Array(2)].flatMap((_, i) => ["Virginia", "✦", "Kentucky", "✦", "Izmir", "✦", "Latakia", "✦", "Cavendish", "✦", "Perique", "✦", "Burley", "✦", "Oriental", "✦"].map((t, j) => (
            <span key={`${i}-${j}`} className={t === "✦" ? "text-primary" : ""}>{t}</span>
          )))}
        </div>
      </div>

      {/* SPLIT BANNER MARE — câmpuri & uscare */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[280px] sm:h-[400px] md:h-[480px] overflow-hidden group">
          <img src={bannerField} alt="Plantație de tutun" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <Leaf className="w-7 h-7 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">De la frunză la fum.</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-4">Lucrăm direct cu plantațiile din Vuelta Abajo, Kentucky și Connecticut Valley.</p>
            <Link to="/despre" className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-primary inline-flex items-center gap-2">Originile <ArrowRight className="w-3 h-3" /></Link>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-[400px] md:h-[480px] overflow-hidden group bg-accent/20">
          <img src={bannerCuring} alt="Uscare tutun" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <Sparkles className="w-7 h-7 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">Maturare lentă.</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-4">Fiecare frunză — uscată natural, fermentată luni de zile, atent supravegheată.</p>
            <Link to="/blog" className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-primary inline-flex items-center gap-2">Citește jurnalul <ArrowRight className="w-3 h-3" /></Link>
          </div>
        </div>
      </section>

      {/* RECOMANDĂRI — bento mix banner + produse */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-primary mb-3">Recomandate</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">Selectate de curatori</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Banner intercalat */}
          <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-sm group">
            <img src={latakiaImg} alt="Latakia" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <Flame className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2 leading-tight">Pentru cei care<br/>caută caracter</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 max-w-xs">Latakia, Perique, Kentucky Dark Fired — tutunuri intense.</p>
              <Link to="/categorie/$cat" params={{ cat: "foi" }} className="text-[11px] tracking-[0.22em] uppercase text-primary inline-flex items-center gap-2">
                Explorează <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          {newArrivals.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BANNER ARTIZAN cu hands */}
      <section className="relative h-[300px] sm:h-[420px] overflow-hidden flex items-center">
        <img src={bannerHands} alt="Mâini de meșter" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-xl">
            <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-primary mb-3">Tradiție vie</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Tutunul ales <em className="text-primary not-italic">manual</em>.
            </h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-md">
              Fiecare frunză din colecția noastră trece prin mâinile unui maestru cu zeci de ani de experiență. Nimic la întâmplare.
            </p>
            <Link to="/despre">
              <Button variant="outline" className="border-primary/40 hover:bg-primary/10 tracking-[0.18em] uppercase text-[11px] sm:text-xs px-6 sm:px-8 h-11 sm:h-12 rounded-sm">
                Despre noi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TOATE PRODUSELE GRID DENS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex items-end justify-between mb-8 sm:mb-10 flex-wrap gap-3">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-primary mb-2">Catalog complet</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Tot ce avem mai bun</h2>
          </div>
          <Link to="/categorii" className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-primary hover:text-primary/80 inline-flex items-center gap-2 border-b border-primary/40 pb-1">
            Vezi tot magazinul <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {products.slice(0, 10).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* TESTIMONIALE compact */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-primary mb-3">Vocea clienților</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Spuse de oameni cu gust</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { name: "Andrei P.", role: "Pasionat pipă", text: "Am descoperit Latakia Syrian aici și mi-am schimbat complet rutina de seară. Calitate impecabilă." },
              { name: "Cristian M.", role: "Colecționar", text: "Foile întregi de Burley sunt exact ce căutam. Le primesc proaspete, perfect ambalate, de fiecare dată." },
              { name: "Mihai I.", role: "Cumpărător fidel", text: "Servicii premium, livrare în 24h, ambalaj ireproșabil. Cei mai buni din România pentru tutun de specialitate." },
            ].map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-5 sm:p-7 hover:border-primary/40 transition-colors">
                <Quote className="w-6 h-6 text-primary mb-4 opacity-60" />
                <p className="text-sm text-foreground/90 leading-relaxed mb-5 font-light italic">{t.text}</p>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
                <div className="pt-3 border-t border-border/50">
                  <div className="font-display text-base text-foreground">{t.name}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-accent/40 via-card to-card border border-primary/20 p-8 sm:p-14 lg:p-20 text-center">
          <div className="absolute inset-0 paper-texture opacity-50" />
          <div className="relative">
            <Heart className="w-9 h-9 text-primary mx-auto mb-5" strokeWidth={1.5} />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-5 max-w-3xl mx-auto leading-tight">
              Nu știi ce să alegi? <em className="text-shimmer not-italic">Te ajutăm.</em>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-7">
              Scrie-ne preferințele tale — îți recomandăm tutunul potrivit gusturilor, gratuit.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] uppercase text-xs px-8 sm:px-10 h-12 sm:h-13 rounded-sm">
                  Cere o recomandare
                </Button>
              </Link>
              <Link to="/categorii">
                <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 tracking-[0.2em] uppercase text-xs px-8 sm:px-10 h-12 sm:h-13 rounded-sm">
                  Răsfoiește singur
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
