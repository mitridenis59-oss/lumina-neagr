import { Link } from "@tanstack/react-router";
import { Star, Flame } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produs/$slug"
      params={{ slug: product.slug }}
      className="group relative block bg-card rounded-sm overflow-hidden border border-border/60 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-warm hover:-translate-y-1"
    >
      <div className="aspect-square sm:aspect-[4/5] overflow-hidden relative bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && (
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 sm:py-1 rounded-sm bg-primary text-primary-foreground">
              {product.badge}
            </span>
          )}
          {product.oldPrice && (
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 sm:py-1 rounded-sm bg-accent text-accent-foreground">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Strength meter */}
        {product.strength && (
          <div className="absolute top-2 right-2 flex gap-0.5 bg-background/70 backdrop-blur-sm px-1.5 py-1 rounded-sm">
            {[1,2,3,4,5].map(i => (
              <Flame key={i} className={`w-2.5 h-2.5 ${i <= product.strength! ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
            ))}
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-primary/80 mb-1 truncate">{product.origin}</p>
        <h3 className="font-display text-base sm:text-lg text-foreground mb-1 leading-tight line-clamp-1">{product.name}</h3>
        <p className="text-[11px] sm:text-xs text-muted-foreground mb-2 line-clamp-1 hidden sm:block">{product.shortDescription}</p>

        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-[10px] sm:text-[11px] text-foreground font-medium">{product.rating}</span>
            <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
            {product.weight && <span className="text-[10px] text-muted-foreground ml-auto">{product.weight}</span>}
          </div>
        )}

        <div className="flex items-baseline justify-between pt-2 border-t border-border/50">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg sm:text-xl font-semibold text-primary">{product.price}</span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-muted-foreground">RON</span>
          </div>
          {product.oldPrice && (
            <span className="text-[11px] text-muted-foreground line-through">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
