import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { categories, getByCategory, type Category } from "@/lib/products";

export const Route = createFileRoute("/categorie/$cat")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.id === params.cat);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.cat.name} — NOXE` },
      { name: "description", content: loaderData.cat.description },
      { property: "og:title", content: `${loaderData.cat.name} — NOXE` },
      { property: "og:description", content: loaderData.cat.description },
      { property: "og:image", content: loaderData.cat.image },
    ] : [],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-bold mb-4">Categorie inexistentă</h1>
      <Link to="/categorii" className="text-accent">Înapoi la categorii</Link>
    </div>
  ),
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const items = getByCategory(cat.id as Category);
  return (
    <>
      <section className="relative h-[50vh] overflow-hidden">
        <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Categorie</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-3">{cat.name}</h1>
          <p className="text-muted-foreground max-w-xl">{cat.description}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
