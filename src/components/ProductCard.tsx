import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produs/$slug"
      params={{ slug: product.slug }}
      className="group relative block bg-card rounded-sm overflow-hidden border border-border/60 hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-warm hover:-translate-y-1"
    >
      <div className="aspect-[4/5] overflow-hidden relative bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm bg-primary text-primary-foreground">
              {product.badge}
            </span>
          )}
          {product.oldPrice && (
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm bg-accent text-accent-foreground">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Quick view on hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <div className="bg-background/90 backdrop-blur text-center py-2.5 text-[11px] tracking-[0.25em] uppercase text-primary border border-primary/30 rounded-sm">
            Vezi detalii
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-primary/80 mb-1.5">{product.origin}</p>
        <h3 className="font-display text-xl text-foreground mb-2 leading-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{product.shortDescription}</p>

        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className={`w-3 h-3 ${i <= Math.round(product.rating!) ? "fill-primary text-primary" : "text-muted"}`} />
            ))}
            <span className="text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
          </div>
        )}

        <div className="flex items-baseline justify-between pt-3 border-t border-border/50">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-primary">{product.price}</span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground">RON</span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through ml-1">{product.oldPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
