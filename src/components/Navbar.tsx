import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, Search, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Acasă" },
  { to: "/categorii", label: "Magazin" },
  { to: "/blog", label: "Jurnal" },
  { to: "/despre", label: "Despre" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top utility bar */}
      <div className={`transition-all duration-500 overflow-hidden ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"} bg-accent/40 border-b border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <span className="hidden sm:flex items-center gap-2"><Phone className="w-3 h-3" /> +40 21 555 0199</span>
          <span className="text-primary">Livrare gratuită peste 500 RON · Ambalaj discret</span>
          <span className="hidden md:block">Cont · RO / EN</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? "glass-strong py-3" : "bg-background/30 backdrop-blur-md py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-display font-bold text-xl text-primary-foreground group-hover:scale-105 transition-transform">N</div>
              <div className="absolute inset-0 rounded-sm gold-border opacity-50" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-semibold text-2xl tracking-[0.2em] text-foreground">NOXE</span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-muted-foreground mt-0.5">Maison du Tabac</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[13px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors relative"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/categorii" className="hidden sm:inline-flex p-2.5 rounded-sm hover:bg-secondary/60 transition-colors text-muted-foreground hover:text-primary" aria-label="Caută">
              <Search className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 rounded-sm hover:bg-secondary/60 transition-colors text-muted-foreground hover:text-primary"
              aria-label="Coș"
            >
              <ShoppingBag className="w-4 h-4" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[18px] px-1 h-[18px] rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
            <button className="lg:hidden p-2.5" onClick={() => setOpen(!open)} aria-label="Meniu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border animate-fade-in">
          <nav className="flex flex-col p-6 gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-base font-medium tracking-wider uppercase py-3 border-b border-border/50" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
