import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/lib/products";
import heroMain from "@/assets/hero-main.jpg";
import bannerLounge from "@/assets/banner-lounge.jpg";
import bannerPlantation from "@/assets/banner-plantation.jpg";
import bannerCraft from "@/assets/banner-craft.jpg";
import { ArrowRight, Award, Truck, Shield, Sparkles, Quote, Star, Leaf, Globe2, Gift } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOXE — Maison du Tabac · Trabucuri & Tutun Premium" },
      { name: "description", content: "Casa NOXE — selecție rară de trabucuri cubaneze, țigări premium, tutun vrac și accesorii de lux. Livrare discretă în toată România." },
      { property: "og:title", content: "NOXE — Maison du Tabac" },
      { property: "og:description", content: "Trabucuri rare, țigări premium și accesorii de lux pentru cunoscători adevărați." },
      { property: "og:image", content: heroMain },
    ],
  }),
  component: Index,
});

function Index() {
  const bestSellers = products.filter(p => p.badge === "Best seller" || p.rating! >= 4.8).slice(0, 4);
  const newArrivals = [...products].reverse().slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden -mt-28 pt-28">
        <img src={heroMain} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-primary" /> Maison du Tabac · Est. 2024
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-8 text-foreground">
              Arta tutunului, <br />
              <em className="text-shimmer not-italic">redefinită</em>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10 font-light">
              O colecție atent curată de trabucuri rare, țigări premium și accesorii de lux. Livrare discretă, ambalaj impecabil, experiență cinematografică.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/categorii">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-[0.2em] uppercase text-xs px-10 h-14 rounded-sm">
                  Descoperă colecția <ArrowRight className="ml-3 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/despre">
                <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary tracking-[0.2em] uppercase text-xs px-10 h-14 rounded-sm">
                  Povestea casei
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-border/50 max-w-md">
              <div>
                <div className="font-display text-3xl text-primary">12+</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">Țări de origine</div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary">2.4k</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">Clienți fideli</div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary">4.9</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">Recenzii medii</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] tracking-[0.3em] uppercase">Explorează</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* USP STRIP */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { icon: Truck, title: "Livrare gratuită", sub: "Comenzi peste 500 RON" },
            { icon: Shield, title: "100% autentic", sub: "Certificat de proveniență" },
            { icon: Award, title: "Curatori experți", sub: "20+ ani de experiență" },
            { icon: Gift, title: "Ambalaj cadou", sub: "Disponibil gratuit" },
          ].map((v, i) => (
            <div key={i} className="flex items-center gap-4 px-4 md:px-6 py-7">
              <v.icon className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-display text-base text-foreground">{v.title}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">{v.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORII */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Universul NOXE</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">Patru lumi distincte</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Fiecare categorie reprezintă o tradiție, o regiune, o filosofie.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to="/categorie/$cat"
              params={{ cat: c.id }}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">{c.count} produse</p>
                <h3 className="font-display text-3xl text-foreground mb-2">{c.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{c.description}</p>
                <div className="flex items-center gap-2 text-xs text-primary tracking-[0.2em] uppercase">
                  Explorează <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-3">Cele mai apreciate</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">Best sellers</h2>
            </div>
            <Link to="/categorii" className="text-xs tracking-[0.25em] uppercase text-primary hover:text-primary/80 inline-flex items-center gap-2 border-b border-primary/40 pb-1">
              Vezi tot magazinul <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BANNER — LOUNGE */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden flex items-center">
        <img src={bannerLounge} alt="Salon NOXE" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl animate-fade-up">
            <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-5">Vizitează boutique-ul</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5 leading-tight">
              Un salon unde timpul <em className="text-primary not-italic">curge altfel</em>.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fotolii Chesterfield, șemineu de marmură, raft cu humidoare clasice. În inima Bucureștiului, pe Calea Victoriei nr. 88.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-primary/40 hover:bg-primary/10 tracking-[0.2em] uppercase text-xs px-8 h-12 rounded-sm">
                Programează o vizită
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE — origine */}
      <div className="border-y border-border py-7 overflow-hidden bg-background">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm tracking-[0.4em] uppercase text-muted-foreground/60">
          {[...Array(2)].flatMap((_, i) => ["Habana", "✦", "Santiago", "✦", "Tampa", "✦", "Virginia", "✦", "Kentucky", "✦", "Geneva", "✦", "Milano", "✦", "London", "✦"].map((t, j) => (
            <span key={`${i}-${j}`} className={t === "✦" ? "text-primary" : ""}>{t}</span>
          )))}
        </div>
      </div>

      {/* NOI ÎN MAGAZIN */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Recent adăugate</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Noutăți selectate de curatori</h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newArrivals.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* SPLIT BANNER — origini & meșteșug */}
      <section className="grid md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] overflow-hidden group">
          <img src={bannerPlantation} alt="Plantație de tutun" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          <div className="absolute inset-x-0 bottom-0 p-10">
            <Leaf className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-3xl text-foreground mb-3">De la frunză la fum.</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-5">Lucrăm direct cu plantațiile din Vuelta Abajo, Republica Dominicană și Connecticut Valley.</p>
            <Link to="/despre" className="text-xs tracking-[0.25em] uppercase text-primary inline-flex items-center gap-2">Originile <ArrowRight className="w-3 h-3" /></Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] overflow-hidden group bg-accent/20">
          <img src={bannerCraft} alt="Meșteșug" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          <div className="absolute inset-x-0 bottom-0 p-10">
            <Sparkles className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-3xl text-foreground mb-3">Meșteșug torcedor.</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-5">Fiecare trabuc — o operă rulată manual de maeștri cu zeci de ani de experiență.</p>
            <Link to="/blog" className="text-xs tracking-[0.25em] uppercase text-primary inline-flex items-center gap-2">Citește jurnalul <ArrowRight className="w-3 h-3" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Vocea cunoscătorilor</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Spuse de oameni cu gust.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Andrei P.", role: "Sommelier", text: "Cohiba Noir Edition mi-a confirmat că mai există case care înțeleg ce înseamnă cu adevărat lux. Discret, perfect ambalat, livrat la timp." },
            { name: "Cristina M.", role: "Arhitect", text: "Humidorul Noir 50 nu e doar funcțional — e o piesă de mobilier. L-am cumpărat ca cadou și am rămas eu cu el." },
            { name: "Mihai I.", role: "Antreprenor", text: "Servicii impecabile. Am fost în boutique-ul lor de pe Calea Victoriei — atmosferă greu de găsit în București." },
          ].map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-colors">
              <Quote className="w-8 h-8 text-primary mb-5 opacity-60" />
              <p className="text-foreground/90 leading-relaxed mb-6 font-light italic">{t.text}</p>
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="font-display text-lg text-foreground">{t.name}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JURNAL PREVIEW */}
      <section className="bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-primary mb-3">Jurnalul NOXE</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">Eseuri pentru cunoscători</h2>
            </div>
            <Link to="/blog" className="text-xs tracking-[0.25em] uppercase text-primary inline-flex items-center gap-2 border-b border-primary/40 pb-1">
              Citește toate <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Cum să asociezi un trabuc cu un whisky single malt", date: "12 Apr 2026", cat: "Ghid", img: bannerCraft },
              { title: "Vuelta Abajo: pământul care naște legendele", date: "28 Mar 2026", cat: "Origini", img: bannerPlantation },
              { title: "Anatomia unui humidor perfect", date: "15 Mar 2026", cat: "Accesorii", img: bannerLounge },
            ].map((post, i) => (
              <Link key={i} to="/blog" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5 bg-secondary">
                  <img src={post.img} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  <span className="text-primary">{post.cat}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-accent/40 via-card to-card border border-primary/20 p-12 md:p-20 text-center">
          <div className="absolute inset-0 paper-texture opacity-50" />
          <div className="relative">
            <Globe2 className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 max-w-3xl mx-auto leading-tight">
              Ai întrebări? <em className="text-shimmer not-italic">Concierge-ul</em> nostru te așteaptă.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Pentru clienți privați și corporate, oferim consultanță personalizată și acces la colecții care nu apar în magazin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] uppercase text-xs px-10 h-14 rounded-sm">
                  Contactează-ne
                </Button>
              </Link>
              <Link to="/categorii">
                <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 tracking-[0.2em] uppercase text-xs px-10 h-14 rounded-sm">
                  Răsfoiește colecția
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
