import cigar from "@/assets/product-cigar.jpg";
import cigarettes from "@/assets/product-cigarettes.jpg";
import tobacco from "@/assets/product-tobacco.jpg";
import accessories from "@/assets/product-accessories.jpg";

export type Category = "trabucuri" | "tigari" | "tutun" | "accesorii";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  origin: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
}

export const categories: { id: Category; name: string; description: string; image: string }[] = [
  { id: "trabucuri", name: "Trabucuri", description: "Selecție rară din Cuba și Republica Dominicană.", image: cigar },
  { id: "tigari", name: "Țigări", description: "Branduri premium internaționale.", image: cigarettes },
  { id: "tutun", name: "Tutun vrac", description: "Foi alese, păstrate la umiditate optimă.", image: tobacco },
  { id: "accesorii", name: "Accesorii", description: "Brichete, scrumiere, humidoare de colecție.", image: accessories },
];

export const products: Product[] = [
  {
    id: "1", slug: "cohiba-noir-edition", name: "Cohiba Noir Edition", category: "trabucuri", price: 890,
    origin: "Habana, Cuba", badge: "Limited",
    shortDescription: "Trabuc rar, învelit în frunză de Maduro îmbătrânită 7 ani.",
    description: "Un trabuc de excepție pentru cunoscători. Note de cacao închis, lemn de cedru și un final lung, mătăsos. Produs în ediție limitată, fiecare exemplar este numerotat.",
    image: cigar,
  },
  {
    id: "2", slug: "montecristo-obsidian", name: "Montecristo Obsidian", category: "trabucuri", price: 540,
    origin: "Republica Dominicană",
    shortDescription: "Aromă densă, cu accente de espresso și piele.",
    description: "Construcție impecabilă, ardere uniformă. Recomandat după o cină somptuoasă, alături de un cognac vechi.",
    image: cigar,
  },
  {
    id: "3", slug: "davidoff-eclipse", name: "Davidoff Eclipse", category: "tigari", price: 78,
    origin: "Elveția", badge: "Best seller",
    shortDescription: "Pachet negru mat, filtru de carbon, profil ușor mentolat.",
    description: "Linia Eclipse redefinește experiența clasică printr-un amestec rafinat de tutunuri Virginia și Burley, completat de un filtru tehnologic cu carbon activ.",
    image: cigarettes,
  },
  {
    id: "4", slug: "marlboro-platinum", name: "Marlboro Platinum", category: "tigari", price: 65,
    origin: "SUA",
    shortDescription: "Ediție specială cu finisaj metalic și aromă rotundă.",
    description: "Tutun selectat manual, ambalat într-o cutie cu inserții metalice. Un fum echilibrat, ușor dulce.",
    image: cigarettes,
  },
  {
    id: "5", slug: "dunhill-aurora", name: "Dunhill Aurora", category: "tigari", price: 92,
    origin: "Marea Britanie", badge: "Nou",
    shortDescription: "Linia premium Dunhill — fum mătăsos, finisaj curat.",
    description: "Pachet sigilat individual, garantând prospețimea fiecărei țigări până la deschidere.",
    image: cigarettes,
  },
  {
    id: "6", slug: "virginia-gold-leaf", name: "Virginia Gold Leaf", category: "tutun", price: 145,
    origin: "Virginia, SUA",
    shortDescription: "Tutun blond, dulceag, perfect pentru pipă sau rulat.",
    description: "Frunze selectate manual din culturile premium ale Virginiei, uscate la soare și depozitate în condiții controlate.",
    image: tobacco,
  },
  {
    id: "7", slug: "burley-midnight-reserve", name: "Burley Midnight Reserve", category: "tutun", price: 168,
    origin: "Kentucky, SUA", badge: "Reserve",
    shortDescription: "Amestec robust, cu note de ciocolată neagră și nucă.",
    description: "O experiență de fumat profundă, dedicată cunoscătorilor care apreciază caracterul și personalitatea.",
    image: tobacco,
  },
  {
    id: "8", slug: "lighter-titanium-arc", name: "Brichetă Titanium Arc", category: "accesorii", price: 320,
    origin: "Germania",
    shortDescription: "Arc dual de plasmă, corp din titaniu sablat.",
    description: "Tehnologie cu arc electric dual, fără combustibil. Reîncărcare prin USB-C, autonomie 200+ aprinderi.",
    image: accessories,
  },
  {
    id: "9", slug: "humidor-noir-50", name: "Humidor Noir 50", category: "accesorii", price: 1450,
    origin: "Italia", badge: "Limited",
    shortDescription: "Humidor din lemn de cedru spaniol, capacitate 50 trabucuri.",
    description: "Higrometru digital integrat, sistem de umidificare automată. Finisaj negru pian, lăcuit manual.",
    image: accessories,
  },
  {
    id: "10", slug: "ashtray-obsidian", name: "Scrumieră Obsidian", category: "accesorii", price: 240,
    origin: "Cehia",
    shortDescription: "Sculptată din cristal masiv, design arhitectural.",
    description: "Piesă de colecție realizată manual, cu patru locașuri pentru trabucuri și o bază grea, stabilă.",
    image: accessories,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (cat: Category) => products.filter((p) => p.category === cat);
