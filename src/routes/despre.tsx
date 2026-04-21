import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre NOXE — Povestea noastră" },
      { name: "description", content: "NOXE este o casă de selecție pentru pasionații de tutun premium. Cunoaște-ne povestea." },
      { property: "og:title", content: "Despre NOXE" },
      { property: "og:description", content: "O casă de selecție pentru pasionații de tutun premium." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 animate-fade-up">
      <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Despre noi</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">Mai mult decât un magazin. <span className="text-gradient">Un ritual.</span></h1>
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>NOXE s-a născut în 2024, dintr-o obsesie simplă: aceea de a redefini felul în care un cunoscător își alege trabucul, țigările sau accesoriile.</p>
        <p>Călătorim de două ori pe an în Habana, Santo Domingo și Lexington pentru a selecta direct de la producători piesele care merită să poarte semnătura noastră. Fiecare cutie care ajunge la tine a trecut prin mâinile a cel puțin trei specialiști.</p>
        <p>Credem că lux înseamnă timp. Timpul foilor de tutun să se maturizeze. Timpul tău, când deschizi o cutie sigilată. Timpul unei seri în care lumea se oprește pentru câteva minute.</p>
        <p>Bun venit în NOXE.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-border">
        {[{n: "12+", l: "Țări de origine"}, {n: "3.000+", l: "Clienți pasionați"}, {n: "24h", l: "Livrare în RO"}].map((s) => (
          <div key={s.l}>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.n}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
