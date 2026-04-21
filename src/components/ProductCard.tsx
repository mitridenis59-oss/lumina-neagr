import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produs/$slug"
      params={{ slug: product.slug }}
      className="group relative block rounded-2xl overflow-hidden glass neon-border transition-all duration-500 hover:-translate-y-1"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        {product.badge && (
          <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full glass text-accent">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">{product.origin}</p>
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-gradient transition-all">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{product.shortDescription.split(",")[0]}</span>
          <span className="font-bold text-foreground">{product.price} RON</span>
        </div>
      </div>
    </Link>
  );
}
