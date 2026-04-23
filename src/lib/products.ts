import virginiaImg from "@/assets/t-virginia.jpg";
import burleyImg from "@/assets/t-burley.jpg";
import pipeImg from "@/assets/t-pipe.jpg";
import rollingImg from "@/assets/t-rolling.jpg";
import orientalImg from "@/assets/t-oriental.jpg";
import latakiaImg from "@/assets/t-latakia.jpg";
import cavendishImg from "@/assets/t-cavendish.jpg";
import englishImg from "@/assets/t-english.jpg";
import periqueImg from "@/assets/t-perique.jpg";
import kentuckyImg from "@/assets/t-kentucky.jpg";
import accImg from "@/assets/t-accessories.jpg";

export type Category = "vrac" | "rulat" | "pipa" | "foi" | "aromat" | "accesorii";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  weight?: string;
  origin: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  notes?: string[];
  strength?: 1 | 2 | 3 | 4 | 5;
}

export const categories: { id: Category; name: string; description: string; image: string; count: number }[] = [
  { id: "vrac", name: "Tutun vrac", description: "Frunze tăiate fin, gata de rulat.", image: virginiaImg, count: 4 },
  { id: "rulat", name: "Pentru rulat", description: "Amestecuri echilibrate pentru țigări.", image: rollingImg, count: 3 },
  { id: "pipa", name: "Tutun de pipă", description: "Blend-uri clasice englezești.", image: englishImg, count: 3 },
  { id: "foi", name: "Foi întregi", description: "Frunze nefărâmițate, premium.", image: burleyImg, count: 2 },
  { id: "aromat", name: "Aromat", description: "Vanilie, fructe, miere — note dulci.", image: cavendishImg, count: 2 },
  { id: "accesorii", name: "Accesorii", description: "Pipe, foițe, filtre, pungi.", image: accImg, count: 2 },
];

export const products: Product[] = [
  {
    id: "1", slug: "virginia-gold-leaf", name: "Virginia Gold Leaf", category: "vrac", price: 145, weight: "100g",
    origin: "Virginia, SUA", badge: "Best seller", rating: 4.8, reviews: 312, strength: 2,
    notes: ["Dulce", "Citrice", "Fân uscat"],
    shortDescription: "Tutun blond, dulceag, cu finețe naturală.",
    description: "Frunze selectate manual din culturile premium ale Virginiei, uscate la soare timp de 8 săptămâni. Aroma echilibrată, perfectă pentru pipă sau pentru rulat.",
    image: virginiaImg,
  },
  {
    id: "2", slug: "burley-midnight", name: "Burley Midnight Reserve", category: "foi", price: 168, weight: "100g",
    origin: "Kentucky, SUA", badge: "Reserve", rating: 4.9, reviews: 147, strength: 4,
    notes: ["Cacao", "Nucă", "Lemn"],
    shortDescription: "Foi întregi, fermentate îndelung.",
    description: "Burley închis la culoare, fermentat 18 luni. Profil intens, ideal pentru amestecuri proprii.",
    image: burleyImg,
  },
  {
    id: "3", slug: "pipa-black-cavendish", name: "Black Cavendish Royal", category: "pipa", price: 132, weight: "50g",
    origin: "Danemarca", rating: 4.7, reviews: 218, strength: 2,
    notes: ["Vanilie", "Bourbon", "Cremă"],
    shortDescription: "Cavendish negru aromat cu vanilie.",
    description: "Tutun de pipă presat și aromat tradițional cu vanilie naturală de Madagascar și o notă subtilă de bourbon.",
    image: pipeImg,
  },
  {
    id: "4", slug: "rulat-classic-blend", name: "Classic Rolling Blend", category: "rulat", price: 89, oldPrice: 105, weight: "40g",
    origin: "Olanda", rating: 4.6, reviews: 489, strength: 3,
    notes: ["Echilibrat", "Aromă caldă"],
    shortDescription: "Amestec clasic pentru rulat — Virginia & Burley.",
    description: "Tăiere fină, ardere lentă, aromă rotundă. Cel mai bine vândut amestec pentru rulat din colecție.",
    image: rollingImg,
  },
  {
    id: "5", slug: "oriental-turkish", name: "Oriental Turkish Sun-Cured", category: "vrac", price: 178, weight: "100g",
    origin: "Izmir, Turcia", badge: "Limited", rating: 4.9, reviews: 76, strength: 2,
    notes: ["Floral", "Mirodenii", "Miere"],
    shortDescription: "Tutun turcesc galben, uscat la soare.",
    description: "Frunze mici, aromate, culese de pe versanții egeeni. Profil delicat, ușor floral, recomandat pentru amestecuri rafinate.",
    image: orientalImg,
  },
  {
    id: "6", slug: "latakia-syrian", name: "Latakia Syrian Smoke", category: "pipa", price: 215, weight: "50g",
    origin: "Siria", badge: "Rar", rating: 5.0, reviews: 41, strength: 5,
    notes: ["Fum", "Pin", "Piele"],
    shortDescription: "Tutun fumigat tradițional, aromă intensă.",
    description: "Frunze fumigate peste lemn de pin și mirt timp de 3 luni. Caracter dramatic, pentru cunoscători.",
    image: latakiaImg,
  },
  {
    id: "7", slug: "cavendish-vanilie", name: "Cavendish Vanilie & Miere", category: "aromat", price: 124, weight: "50g",
    origin: "Germania", rating: 4.5, reviews: 267, strength: 1,
    notes: ["Vanilie", "Miere", "Caramel"],
    shortDescription: "Aromat dulce, perfect pentru începători.",
    description: "Tutun cu aromă naturală de vanilie și miere de salcâm. Fum dulce, parfumat, plăcut.",
    image: cavendishImg,
  },
  {
    id: "8", slug: "english-blend-no7", name: "English Blend No.7", category: "pipa", price: 196, weight: "50g",
    origin: "Anglia", badge: "Nou", rating: 4.8, reviews: 92, strength: 4,
    notes: ["Latakia", "Oriental", "Lemn"],
    shortDescription: "Blend englezesc clasic cu Latakia.",
    description: "Amestec maturat 6 luni: 40% Virginia, 30% Latakia, 20% Oriental, 10% Perique. Echilibru perfect.",
    image: englishImg,
  },
  {
    id: "9", slug: "perique-louisiana", name: "Perique Louisiana", category: "vrac", price: 245, weight: "50g",
    origin: "St. James, Louisiana", badge: "Limited", rating: 4.9, reviews: 38, strength: 5,
    notes: ["Fructat", "Piper", "Smochine"],
    shortDescription: "Tutun fermentat sub presiune, caracter unic.",
    description: "Cultivat exclusiv în parohia St. James. Fermentat în butoaie de stejar, presat manual. Adaugă profunzime oricărui amestec.",
    image: periqueImg,
  },
  {
    id: "10", slug: "kentucky-dark-fired", name: "Kentucky Dark Fired", category: "foi", price: 188, weight: "100g",
    origin: "Kentucky, SUA", rating: 4.7, reviews: 84, strength: 5,
    notes: ["Afumat", "Whisky", "Pământ"],
    shortDescription: "Frunze afumate la lemn de stejar.",
    description: "Procesul tradițional de afumare la foc oferă o aromă densă, similară unui whisky turbat.",
    image: kentuckyImg,
  },
  {
    id: "11", slug: "rulat-virginia-blond", name: "Virginia Blond Roll", category: "rulat", price: 78, weight: "40g",
    origin: "Belgia", rating: 4.4, reviews: 356, strength: 2,
    notes: ["Blând", "Dulce", "Citrice"],
    shortDescription: "Amestec ușor pentru rulat de zi cu zi.",
    description: "Pe bază de Virginia blond. Fum ușor, aromă curată, ardere uniformă.",
    image: rollingImg,
  },
  {
    id: "12", slug: "rulat-american-mix", name: "American Mix Special", category: "rulat", price: 95, weight: "40g",
    origin: "SUA", rating: 4.6, reviews: 198, strength: 3,
    notes: ["Robust", "Cremos"],
    shortDescription: "Virginia + Burley + un strop de Cavendish.",
    description: "Reproduce profilul unei țigări americane clasice. Ideal pentru cei care apreciază robustețea.",
    image: rollingImg,
  },
  {
    id: "13", slug: "aromat-cirese-rom", name: "Cireșe Negre & Rom", category: "aromat", price: 138, weight: "50g",
    origin: "Italia", badge: "Nou", rating: 4.6, reviews: 124, strength: 2,
    notes: ["Cireșe", "Rom", "Cacao"],
    shortDescription: "Aromat fructat cu accente de rom închis.",
    description: "Macerare lentă cu esențe naturale de cireșe negre și rom de trestie. Fum bogat, dulce-amărui.",
    image: cavendishImg,
  },
  {
    id: "14", slug: "set-pipa-clasica", name: "Set Pipă Clasică & Pungă", category: "accesorii", price: 420, weight: "Set",
    origin: "Italia", rating: 4.8, reviews: 67,
    notes: ["Pipă brier", "Pungă piele", "Curățitor"],
    shortDescription: "Pipă din brier italian, pungă din piele.",
    description: "Pipă lucrată manual din rădăcină de brier, alături de pungă din piele naturală cu compartiment pentru tutun.",
    image: accImg,
  },
  {
    id: "15", slug: "foite-rulat-premium", name: "Foițe Premium Slim — 50 carnete", category: "accesorii", price: 65, weight: "50 buc",
    origin: "Spania", badge: "Best seller", rating: 4.7, reviews: 542,
    notes: ["Cânepă", "Fără clor", "Slim"],
    shortDescription: "Foițe slim din cânepă naturală.",
    description: "50 de carnete a câte 50 foițe. Hârtie ultra-subțire din cânepă naturală, ardere lentă, fără adaosuri chimice.",
    image: accImg,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (cat: Category) => products.filter((p) => p.category === cat);
