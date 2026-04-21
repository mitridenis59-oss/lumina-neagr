import { createFileRoute } from "@tanstack/react-router";
import cigar from "@/assets/product-cigar.jpg";
import tobacco from "@/assets/product-tobacco.jpg";
import accessories from "@/assets/product-accessories.jpg";

const posts = [
  { title: "Anatomia unui trabuc cubanez", excerpt: "De la frunza Volado la Ligero — cum se construiește un Habano clasic și de ce contează proporțiile.", date: "12 Apr 2026", img: cigar },
  { title: "Tutunul Virginia: aurul blond al Sudului", excerpt: "O scurtă istorie a celui mai cultivat tutun din lume și a notelor sale dulci, mătăsoase.", date: "28 Mar 2026", img: tobacco },
  { title: "Brichetele cu arc de plasmă: trecut sau viitor?", excerpt: "Tehnologia modernă întâlnește ritualul clasic. Merită să renunți la Zippo?", date: "10 Mar 2026", img: accessories },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — NOXE" },
      { name: "description", content: "Articole, ghiduri și povești despre lumea trabucurilor, țigărilor premium și a tutunului fin." },
      { property: "og:title", content: "Blog — NOXE" },
      { property: "og:description", content: "Articole și ghiduri despre tutun premium." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 animate-fade-up">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Jurnal</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Blog</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article key={i} className="group glass rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{p.date}</p>
              <h2 className="font-display text-xl font-bold mb-3 group-hover:text-shimmer transition-all">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
