import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, Search, Phone, Truck } from "lucide-react";
import { useCart } from "@/lib/cart";
import logoImg from "@/assets/logo-gold.png";

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
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top utility bar — disappears on scroll */}
      <div className={`transition-all duration-500 overflow-hidden ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"} bg-accent/30 border-b border-border/40`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          <span className="hidden sm:flex items-center gap-2"><Phone className="w-3 h-3" /> +40 21 555 0199</span>
          <span className="text-primary flex items-center gap-2"><Truck className="w-3 h-3" /> Livrare gratuită peste 300 RON</span>
          <span className="hidden md:block">RO / EN</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? "glass-strong" : "bg-background/80 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* TOP ROW — search left, logo center, cart right */}
          <div className={`flex items-center justify-between gap-4 ${scrolled ? "py-2" : "py-3 sm:py-4"} transition-all`}>
            {/* Left actions */}
            <div className="flex items-center gap-1 flex-1">
              <Link to="/categorii" className="hidden sm:inline-flex p-2 rounded-sm hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-primary" aria-label="Caută">
                <Search className="w-4 h-4" />
              </Link>
              <button className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-primary" onClick={() => setOpen(!open)} aria-label="Meniu">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Centered logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="Casa Tutunului - Acasă">
              <div className={`relative rounded-full bg-gradient-to-br from-card to-background border border-primary/30 shadow-card transition-all duration-500 overflow-hidden ${scrolled ? "w-12 h-12 sm:w-14 sm:h-14" : "w-16 h-16 sm:w-20 sm:h-20"}`}>
                <img
                  src={logoImg}
                  alt="Casa Tutunului"
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  style={{ mixBlendMode: "screen", filter: "brightness(1.05) contrast(1.1)" }}
                />
              </div>
              <div className={`hidden sm:flex flex-col leading-none transition-all ${scrolled ? "scale-90" : ""}`}>
                <span className="font-display font-semibold text-lg sm:text-xl tracking-[0.18em] text-foreground">CASA TUTUNULUI</span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.32em] uppercase text-primary/80 mt-0.5">Magazin de specialitate</span>
              </div>
            </Link>

            {/* Right actions */}
            <div className="flex items-center justify-end gap-1 flex-1">
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-sm hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-primary"
                aria-label="Coș"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* BOTTOM ROW — nav links centered */}
          <nav className={`hidden lg:flex items-center justify-center gap-10 border-t border-border/40 transition-all ${scrolled ? "py-2" : "py-3"}`}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[12px] font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-strong border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-base font-medium tracking-[0.18em] uppercase py-3 border-b border-border/40 text-muted-foreground" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
