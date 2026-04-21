import cohibaImg from "@/assets/p-cohiba.jpg";
import montecristoImg from "@/assets/p-montecristo.jpg";
import davidoffImg from "@/assets/p-davidoff.jpg";
import marlboroImg from "@/assets/p-marlboro.jpg";
import dunhillImg from "@/assets/p-dunhill.jpg";
import virginiaImg from "@/assets/p-virginia.jpg";
import burleyImg from "@/assets/p-burley.jpg";
import lighterImg from "@/assets/p-lighter.jpg";
import humidorImg from "@/assets/p-humidor.jpg";
import ashtrayImg from "@/assets/p-ashtray.jpg";

export type Category = "trabucuri" | "tigari" | "tutun" | "accesorii";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  origin: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

export const categories: { id: Category; name: string; description: string; image: string; count: number }[] = [
  { id: "trabucuri", name: "Trabucuri", description: "Cuba, Republica Dominicană, Nicaragua.", image: cohibaImg, count: 2 },
  { id: "tigari", name: "Țigări", description: "Selecție internațională premium.", image: davidoffImg, count: 3 },
  { id: "tutun", name: "Tutun vrac", description: "Foi rare, păstrate la umiditate.", image: virginiaImg, count: 2 },
  { id: "accesorii", name: "Accesorii", description: "Brichete, humidoare, scrumiere.", image: humidorImg, count: 3 },
];

export const products: Product[] = [
  {
    id: "1", slug: "cohiba-noir-edition", name: "Cohiba Noir Edition", category: "trabucuri", price: 890,
    origin: "Habana, Cuba", badge: "Limited", rating: 4.9, reviews: 87,
    shortDescription: "Învelit în frunză de Maduro îmbătrânită 7 ani.",
    description: "Un trabuc de excepție pentru cunoscători. Note de cacao închis, lemn de cedru și un final lung, mătăsos. Produs în ediție limitată, fiecare exemplar este numerotat.",
    image: cohibaImg,
  },
  {
    id: "2", slug: "montecristo-obsidian", name: "Montecristo Obsidian", category: "trabucuri", price: 540, oldPrice: 620,
    origin: "Republica Dominicană", rating: 4.8, reviews: 134,
    shortDescription: "Aromă densă, accente de espresso și piele.",
    description: "Construcție impecabilă, ardere uniformă. Recomandat după o cină somptuoasă, alături de un cognac vechi.",
    image: montecristoImg,
  },
  {
    id: "3", slug: "davidoff-eclipse", name: "Davidoff Eclipse", category: "tigari", price: 78,
    origin: "Elveția", badge: "Best seller", rating: 4.7, reviews: 412,
    shortDescription: "Filtru de carbon, profil ușor mentolat.",
    description: "Linia Eclipse redefinește experiența clasică printr-un amestec rafinat de tutunuri Virginia și Burley, completat de un filtru tehnologic cu carbon activ.",
    image: davidoffImg,
  },
  {
    id: "4", slug: "marlboro-platinum", name: "Marlboro Platinum", category: "tigari", price: 65,
    origin: "SUA", rating: 4.5, reviews: 289,
    shortDescription: "Ediție specială cu finisaj metalic.",
    description: "Tutun selectat manual, ambalat într-o cutie cu inserții metalice. Un fum echilibrat, ușor dulce.",
    image: marlboroImg,
  },
  {
    id: "5", slug: "dunhill-aurora", name: "Dunhill Aurora", category: "tigari", price: 92,
    origin: "Marea Britanie", badge: "Nou", rating: 4.8, reviews: 56,
    shortDescription: "Linia premium — fum mătăsos, finisaj curat.",
    description: "Pachet sigilat individual, garantând prospețimea fiecărei țigări până la deschidere.",
    image: dunhillImg,
  },
  {
    id: "6", slug: "virginia-gold-leaf", name: "Virginia Gold Leaf", category: "tutun", price: 145,
    origin: "Virginia, SUA", rating: 4.6, reviews: 92,
    shortDescription: "Tutun blond, dulceag, pentru pipă sau rulat.",
    description: "Frunze selectate manual din culturile premium ale Virginiei, uscate la soare și depozitate în condiții controlate.",
    image: virginiaImg,
  },
  {
    id: "7", slug: "burley-midnight-reserve", name: "Burley Midnight Reserve", category: "tutun", price: 168,
    origin: "Kentucky, SUA", badge: "Reserve", rating: 4.9, reviews: 47,
    shortDescription: "Note de ciocolată neagră și nucă.",
    description: "O experiență de fumat profundă, dedicată cunoscătorilor care apreciază caracterul și personalitatea.",
    image: burleyImg,
  },
  {
    id: "8", slug: "lighter-titanium-arc", name: "Brichetă Titanium Arc", category: "accesorii", price: 320,
    origin: "Germania", rating: 4.7, reviews: 156,
    shortDescription: "Arc dual de plasmă, corp din titaniu.",
    description: "Tehnologie cu arc electric dual, fără combustibil. Reîncărcare prin USB-C, autonomie 200+ aprinderi.",
    image: lighterImg,
  },
  {
    id: "9", slug: "humidor-noir-50", name: "Humidor Noir 50", category: "accesorii", price: 1450,
    origin: "Italia", badge: "Limited", rating: 5.0, reviews: 23,
    shortDescription: "Cedru spaniol, capacitate 50 trabucuri.",
    description: "Higrometru digital integrat, sistem de umidificare automată. Finisaj negru pian, lăcuit manual.",
    image: humidorImg,
  },
  {
    id: "10", slug: "ashtray-obsidian", name: "Scrumieră Obsidian", category: "accesorii", price: 240, oldPrice: 290,
    origin: "Cehia", rating: 4.6, reviews: 71,
    shortDescription: "Cristal masiv, design arhitectural.",
    description: "Piesă de colecție realizată manual, cu patru locașuri pentru trabucuri și o bază grea, stabilă.",
    image: ashtrayImg,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (cat: Category) => products.filter((p) => p.category === cat);
