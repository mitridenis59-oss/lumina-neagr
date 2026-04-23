import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";
import { Minus, Plus, Check, ChevronLeft, Star, Flame, Truck, Shield, Package } from "lucide-react";

export const Route = createFileRoute("/produs/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.product.name} — Casa Tutunului` },
      { name: "description", content: loaderData.product.shortDescription },
      { property: "og:title", content: `${loaderData.product.name} — Casa Tutunului` },
      { property: "og:description", content: loaderData.product.shortDescription },
      { property: "og:image", content: loaderData.product.image },
    ] : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-bold mb-4">Produs inexistent</h1>
      <Link to="/categorii" className="text-primary">Vezi toate produsele</Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    add(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <Link to="/categorii" className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-primary tracking-[0.15em] uppercase">
          <ChevronLeft className="w-4 h-4" /> Înapoi
        </Link>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 grid lg:grid-cols-2 gap-6 sm:gap-12">
        <div className="relative aspect-square rounded-sm overflow-hidden bg-card border border-border shadow-card">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 font-semibold">{product.badge}</span>
          )}
        </div>
        <div className="flex flex-col justify-center animate-fade-up">
          <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-primary mb-3">{product.origin}</p>
          <h1 className="font-display text-3xl sm:text-5xl text-foreground mb-3 leading-tight">{product.name}</h1>

          {product.rating && (
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.round(product.rating!) ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <span className="text-sm text-foreground font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews} recenzii)</span>
            </div>
          )}

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">{product.description}</p>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {product.weight && (
              <div className="bg-card border border-border rounded-sm p-3">
                <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">Cantitate</div>
                <div className="font-display text-base text-foreground">{product.weight}</div>
              </div>
            )}
            {product.strength && (
              <div className="bg-card border border-border rounded-sm p-3">
                <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">Tărie</div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Flame key={i} className={`w-3.5 h-3.5 ${i <= product.strength! ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {product.notes && product.notes.length > 0 && (
            <div className="mb-6">
              <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2">Note de aromă</p>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((n) => (
                  <span key={n} className="text-[11px] tracking-[0.15em] uppercase border border-primary/30 text-primary px-3 py-1 rounded-sm">{n}</span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display text-4xl sm:text-5xl text-primary">{product.price}</span>
            <span className="text-sm tracking-widest uppercase text-muted-foreground">RON</span>
            {product.oldPrice && (
              <span className="text-base text-muted-foreground line-through ml-2">{product.oldPrice} RON</span>
            )}
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center bg-card border border-border rounded-sm">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-11 flex items-center justify-center hover:bg-secondary/50 text-muted-foreground"><Minus className="w-4 h-4" /></button>
              <span className="w-10 text-center font-display text-base text-foreground">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-11 h-11 flex items-center justify-center hover:bg-secondary/50 text-muted-foreground"><Plus className="w-4 h-4" /></button>
            </div>
            <Button onClick={handleAdd} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] uppercase text-xs h-11 rounded-sm">
              {added ? <><Check className="w-4 h-4 mr-2" /> Adăugat</> : "Adaugă în coș"}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-5 border-t border-border/50">
            {[
              { icon: Truck, txt: "Livrare 24h" },
              { icon: Shield, txt: "100% autentic" },
              { icon: Package, txt: "Ambalaj discret" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                <b.icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                <span className="truncate">{b.txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-6 sm:mb-8">Mai descoperă din aceeași categorie</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
