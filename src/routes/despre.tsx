import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre — Casa Tutunului" },
      { name: "description", content: "Casa Tutunului este un magazin de specialitate dedicat tutunului premium. Cunoaște-ne povestea." },
      { property: "og:title", content: "Despre — Casa Tutunului" },
      { property: "og:description", content: "Magazin de specialitate pentru pasionații de tutun premium." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 animate-fade-up">
      <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Despre noi</p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-8">Mai mult decât un magazin. <span className="text-shimmer">Un ritual.</span></h1>
      <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>Casa Tutunului s-a născut dintr-o pasiune simplă: aceea de a aduce în România cele mai bune soiuri de tutun din lume — Virginia, Burley, Latakia, Perique, Kentucky.</p>
        <p>Lucrăm direct cu plantațiile din SUA, Turcia, Siria și Italia. Fiecare lot care ajunge la noi este verificat manual și depozitat în condiții optime de umiditate.</p>
        <p>Credem că tutunul bun cere timp. Timpul frunzelor să se matureze. Timpul tău, când deschizi pachetul. Timpul unui ritual care se face cu atenție.</p>
        <p>Bun venit la Casa Tutunului.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-border">
        {[{n: "12+", l: "Țări de origine"}, {n: "3.000+", l: "Clienți pasionați"}, {n: "24h", l: "Livrare în RO"}].map((s) => (
          <div key={s.l}>
            <div className="text-3xl md:text-4xl font-display font-bold text-shimmer">{s.n}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
