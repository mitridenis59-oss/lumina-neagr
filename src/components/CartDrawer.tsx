import { useCart } from "@/lib/cart";
import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { items, isOpen, setOpen, setQty, remove, total } = useCart();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md glass-strong flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-display text-xl font-bold">Coșul tău</h3>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-secondary rounded-lg"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-12">Coșul este gol.</p>
          )}
          {items.map((i) => (
            <div key={i.product.id} className="flex gap-4 glass rounded-xl p-3">
              <img src={i.product.image} alt={i.product.name} loading="lazy" className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{i.product.name}</p>
                <p className="text-xs text-muted-foreground">{i.product.price} RON</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => setQty(i.product.id, i.quantity - 1)} className="w-7 h-7 rounded-md bg-secondary hover:bg-secondary/70 flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm w-6 text-center">{i.quantity}</span>
                  <button onClick={() => setQty(i.product.id, i.quantity + 1)} className="w-7 h-7 rounded-md bg-secondary hover:bg-secondary/70 flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                  <button onClick={() => remove(i.product.id)} className="ml-auto p-1.5 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-border space-y-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-gradient text-xl">{total} RON</span>
          </div>
          <Link to="/checkout" onClick={() => setOpen(false)}>
            <Button disabled={items.length === 0} className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-semibold" size="lg">
              Finalizează comanda
            </Button>
          </Link>
        </div>
      </aside>
    </div>
  );
}
