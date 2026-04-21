import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";
import { Minus, Plus, Check, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/produs/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.product.name} — NOXE` },
      { name: "description", content: loaderData.product.shortDescription },
      { property: "og:title", content: `${loaderData.product.name} — NOXE` },
      { property: "og:description", content: loaderData.product.shortDescription },
      { property: "og:image", content: loaderData.product.image },
    ] : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-bold mb-4">Produs inexistent</h1>
      <Link to="/categorii" className="text-accent">Vezi toate produsele</Link>
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
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link to="/categorii" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="w-4 h-4" /> Înapoi</Link>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-3xl overflow-hidden glass">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </div>
        <div className="flex flex-col justify-center animate-fade-up">
          {product.badge && <span className="self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full glass text-accent mb-4">{product.badge}</span>}
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{product.origin}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>
          <div className="text-4xl font-bold text-shimmer mb-8">{product.price} RON</div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center glass rounded-xl">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-11 flex items-center justify-center hover:bg-secondary/50"><Minus className="w-4 h-4" /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-11 h-11 flex items-center justify-center hover:bg-secondary/50"><Plus className="w-4 h-4" /></button>
            </div>
            <Button onClick={handleAdd} size="lg" className="flex-1 bg-primary text-primary-foreground hover:opacity-90 font-semibold glow-gold">
              {added ? <><Check className="w-4 h-4 mr-2" /> Adăugat</> : "Adaugă în coș"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Livrare discretă 24-48h • Plata la livrare disponibilă</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl font-bold mb-8">Mai descoperă</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
