import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">N</div>
            <span className="font-display font-bold text-xl tracking-widest">NOXE</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Un nou standard în lumea produselor premium din tutun. Selecție atentă, livrare discretă, experiență cinematografică.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Magazin</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/categorii" className="hover:text-foreground">Categorii</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/despre" className="hover:text-foreground">Despre noi</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Termeni și condiții</li>
            <li>Confidențialitate</li>
            <li>Returnări</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NOXE. Toate drepturile rezervate.</p>
          <p className="text-center"><span className="text-destructive font-semibold">⚠ Fumatul dăunează grav sănătății tale și a celor din jur.</span> Vânzarea interzisă minorilor.</p>
        </div>
      </div>
    </footer>
  );
}
