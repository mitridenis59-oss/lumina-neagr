import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone, Clock, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 sm:mt-28 bg-card/40 border-t border-border">
      {/* Newsletter strip */}
      <div className="border-b border-border bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-primary mb-2">Cercul Casa Tutunului</p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">Acces privilegiat la lansări rare.</h3>
            <p className="text-sm text-muted-foreground mt-3 max-w-md">Soiuri limitate, ediții speciale și reduceri exclusive — direct în inbox.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="adresa.ta@email.com"
              className="flex-1 bg-background border border-border rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold rounded-sm hover:bg-primary/90 transition-colors">
              Abonare
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-card to-background border border-primary/30 flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-semibold text-lg sm:text-xl tracking-[0.18em] text-foreground">CASA TUTUNULUI</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.32em] uppercase text-primary/80 mt-0.5">Magazin de specialitate</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-5">
            Tutun premium din cele mai prestigioase regiuni — selectat manual, livrat discret.
          </p>
          <div className="flex gap-2">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4 sm:mb-5">Magazin</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/categorii" className="hover:text-primary transition-colors">Toate produsele</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"vrac"}} className="hover:text-primary transition-colors">Tutun vrac</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"rulat"}} className="hover:text-primary transition-colors">Pentru rulat</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"pipa"}} className="hover:text-primary transition-colors">Tutun pipă</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"foi"}} className="hover:text-primary transition-colors">Foi întregi</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"accesorii"}} className="hover:text-primary transition-colors">Accesorii</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4 sm:mb-5">Despre</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/despre" className="hover:text-primary transition-colors">Povestea noastră</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Jurnal</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Carieră</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Parteneri B2B</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4 sm:mb-5">Magazin fizic</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" /> Calea Victoriei 88, București</li>
            <li className="flex items-start gap-2"><Phone className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" /> +40 21 555 0199</li>
            <li className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" /> L–S 11:00 — 22:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-[11px] sm:text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Casa Tutunului. Toate drepturile rezervate.</p>
          <div className="flex gap-4 sm:gap-5">
            <a href="#" className="hover:text-primary">Termeni</a>
            <a href="#" className="hover:text-primary">Confidențialitate</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
        <div className="bg-destructive/10 border-t border-destructive/30">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-center text-[10px] sm:text-[11px] tracking-wider text-destructive-foreground/90">
            ⚠ FUMATUL DĂUNEAZĂ GRAV SĂNĂTĂȚII. VÂNZAREA INTERZISĂ MINORILOR (SUB 18 ANI).
          </p>
        </div>
      </div>
    </footer>
  );
}
