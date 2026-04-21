import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-card/40 border-t border-border">
      {/* Newsletter strip */}
      <div className="border-b border-border bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-2">Cercul NOXE</p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">Acces privilegiat la colecții rare.</h3>
            <p className="text-sm text-muted-foreground mt-3 max-w-md">Lansări limitate, evenimente private și reduceri exclusive — direct în inbox-ul tău.</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="adresa.ta@email.com"
              className="flex-1 bg-background border border-border rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 text-[12px] tracking-[0.2em] uppercase font-semibold rounded-sm hover:bg-primary/90 transition-colors">
              Abonare
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-display font-bold text-xl text-primary-foreground">N</div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-semibold text-2xl tracking-[0.2em]">NOXE</span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-muted-foreground mt-0.5">Maison du Tabac</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-5">
            O casă dedicată artei tutunului. Selecții rare din cele mai prestigioase regiuni ale lumii, livrate cu discreție și grijă.
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
          <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">Magazin</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/categorii" className="hover:text-primary transition-colors">Toate produsele</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"trabucuri"}} className="hover:text-primary transition-colors">Trabucuri</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"tigari"}} className="hover:text-primary transition-colors">Țigări</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"tutun"}} className="hover:text-primary transition-colors">Tutun vrac</Link></li>
            <li><Link to="/categorie/$cat" params={{cat:"accesorii"}} className="hover:text-primary transition-colors">Accesorii</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">Casa NOXE</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/despre" className="hover:text-primary transition-colors">Povestea noastră</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Jurnal</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Carieră</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Parteneri B2B</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">Boutique</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" /> Calea Victoriei 88, București</li>
            <li className="flex items-start gap-2"><Phone className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" /> +40 21 555 0199</li>
            <li className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" /> L–S 11:00 — 22:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NOXE Maison du Tabac. Toate drepturile rezervate.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Termeni</a>
            <a href="#" className="hover:text-primary">Confidențialitate</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
        <div className="bg-destructive/10 border-t border-destructive/30">
          <p className="max-w-7xl mx-auto px-6 py-3 text-center text-[11px] tracking-wider text-destructive-foreground/90">
            ⚠ FUMATUL DĂUNEAZĂ GRAV SĂNĂTĂȚII TALE ȘI A CELOR DIN JUR. VÂNZAREA INTERZISĂ MINORILOR (SUB 18 ANI).
          </p>
        </div>
      </div>
    </footer>
  );
}
