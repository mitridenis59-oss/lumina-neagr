import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizare comandă — Casa Tutunului" },
      { name: "description", content: "Completează datele de livrare pentru comanda ta." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, total, clear } = useCart();
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  if (done) {
    return (
      <div className="max-w-xl mx-auto px-6 py-32 text-center animate-fade-up">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 glow-gold">
          <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold mb-4">Mulțumim!</h1>
        <p className="text-muted-foreground mb-8">Comanda ta a fost înregistrată. Vei primi un email cu detaliile în câteva minute.</p>
        <Link to="/"><Button size="lg" className="bg-primary text-primary-foreground">Înapoi acasă</Button></Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Coșul tău este gol</h1>
        <Link to="/categorii"><Button>Explorează produsele</Button></Link>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    clear();
    setDone(true);
    setTimeout(() => navigate({ to: "/" }), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_400px] gap-10">
      <div className="animate-fade-up">
        <h1 className="font-display text-4xl font-bold mb-8">Finalizare comandă</h1>
        <form onSubmit={submit} className="space-y-6">
          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="font-semibold mb-3">Date de contact</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input required placeholder="Prenume" className="bg-secondary/40 h-11" />
              <Input required placeholder="Nume" className="bg-secondary/40 h-11" />
            </div>
            <Input required type="email" placeholder="Email" className="bg-secondary/40 h-11" />
            <Input required placeholder="Telefon" className="bg-secondary/40 h-11" />
          </section>
          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="font-semibold mb-3">Adresă livrare</h2>
            <Input required placeholder="Stradă, număr, bloc" className="bg-secondary/40 h-11" />
            <div className="grid sm:grid-cols-2 gap-3">
              <Input required placeholder="Oraș" className="bg-secondary/40 h-11" />
              <Input required placeholder="Cod poștal" className="bg-secondary/40 h-11" />
            </div>
          </section>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold glow-gold">
            Plasează comanda • {total} RON
          </Button>
        </form>
      </div>

      <aside className="glass rounded-2xl p-6 h-fit lg:sticky lg:top-28">
        <h3 className="font-semibold mb-4">Sumar</h3>
        <div className="space-y-3 mb-5">
          {items.map((i) => (
            <div key={i.product.id} className="flex gap-3 text-sm">
              <img src={i.product.image} alt="" className="w-14 h-14 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium">{i.product.name}</p>
                <p className="text-muted-foreground text-xs">{i.quantity} × {i.product.price} RON</p>
              </div>
              <span className="font-semibold">{i.product.price * i.quantity} RON</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4 space-y-2 text-sm">
          <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>{total} RON</span></div>
          <div className="flex justify-between text-muted-foreground"><span>Livrare</span><span>Gratuit</span></div>
          <div className="flex justify-between font-bold text-lg pt-2"><span>Total</span><span className="text-shimmer">{total} RON</span></div>
        </div>
      </aside>
    </div>
  );
}
