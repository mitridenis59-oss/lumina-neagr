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
      { title: `${loaderData.cat.name} — Casa Tutunului` },
      { name: "description", content: loaderData.cat.description },
      { property: "og:title", content: `${loaderData.cat.name} — Casa Tutunului` },
      { property: "og:description", content: loaderData.cat.description },
      { property: "og:image", content: loaderData.cat.image },
    ] : [],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-bold mb-4">Categorie inexistentă</h1>
      <Link to="/categorii" className="text-primary">Înapoi la categorii</Link>
    </div>
  ),
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const items = getByCategory(cat.id as Category);
  return (
    <>
      <section className="relative h-[40vh] sm:h-[45vh] overflow-hidden">
        <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-8 sm:pb-12">
          <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-primary mb-2">Categorie</p>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground mb-2">{cat.name}</h1>
          <p className="text-sm text-muted-foreground max-w-xl">{cat.description}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {items.length === 0 && <p className="text-center text-muted-foreground py-20">Curând în această categorie.</p>}
      </section>
    </>
  );
}
