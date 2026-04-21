import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, type Category } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/categorii")({
  head: () => ({
    meta: [
      { title: "Categorii — NOXE" },
      { name: "description", content: "Explorează toate categoriile NOXE: trabucuri, țigări, tutun vrac și accesorii premium." },
      { property: "og:title", content: "Categorii — NOXE" },
      { property: "og:description", content: "Toate categoriile premium NOXE." },
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
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12 animate-fade-up">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Catalog</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Întreaga colecție</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Filtrează după categorie sau caută o piesă anume.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Caută produs..." className="pl-10 bg-secondary/50 border-border h-11" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${filter === "all" ? "bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold" : "glass hover:border-primary/40"}`}>Toate</button>
          {categories.map((c) => (
            <button key={c.id} onClick={() => setFilter(c.id)} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${filter === c.id ? "bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold" : "glass hover:border-primary/40"}`}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-20">Niciun rezultat.</p>}
    </div>
  );
}
