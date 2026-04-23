import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, type Category } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/categorii")({
  head: () => ({
    meta: [
      { title: "Magazin — Casa Tutunului" },
      { name: "description", content: "Întreaga colecție: tutun vrac, pentru rulat, pipă, foi întregi, aromat și accesorii." },
      { property: "og:title", content: "Magazin — Casa Tutunului" },
      { property: "og:description", content: "Toate categoriile premium." },
    ],
  }),
  component: AllProducts,
});

function AllProducts() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [q, setQ] = useState("");

  const filtered = products.filter((p) =>
    (filter === "all" || p.category === filter) &&
    (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="text-center mb-10 sm:mb-12 animate-fade-up">
        <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-primary mb-3">Catalog complet</p>
        <h1 className="font-display text-3xl sm:text-5xl text-foreground mb-3">Întreaga colecție</h1>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">Filtrează după categorie sau caută un produs anume.</p>
      </div>

      <div className="flex flex-col gap-4 mb-8 sm:mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Caută produs..." className="pl-10 bg-card border-border h-11 rounded-sm" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-sm text-xs tracking-[0.18em] uppercase whitespace-nowrap transition-all ${filter === "all" ? "bg-primary text-primary-foreground font-semibold" : "bg-card border border-border hover:border-primary/40 text-muted-foreground"}`}>Toate</button>
          {categories.map((c) => (
            <button key={c.id} onClick={() => setFilter(c.id)} className={`px-4 py-2 rounded-sm text-xs tracking-[0.18em] uppercase whitespace-nowrap transition-all ${filter === c.id ? "bg-primary text-primary-foreground font-semibold" : "bg-card border border-border hover:border-primary/40 text-muted-foreground"}`}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-20">Niciun rezultat.</p>}
    </div>
  );
}
