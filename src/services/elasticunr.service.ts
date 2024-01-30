import elasticlunr from "elasticlunr";
import type { IPal, ISuitability } from "../common/interfaces";
const file = Bun.file("src/pals.json");

// Define a type for the modified pal structure
interface IProcessedPal extends Omit<IPal, 'types' | 'suitabilities' | 'drops'> {
  types: string[];
  suitabilities: string[];
  drops: string[];
}

// Load and convert text fields to lowercase when the data is loaded from JSON
const pals: IProcessedPal[] = (await file.json()).map(pal => ({
  aura: pal.aura,
  description: pal.description,
  image: pal.imageWiki,
  key: pal.key,
  suitability: pal.suitability,
  types: pal.types.map((type: string) => type.toLowerCase()),
  suitabilities: pal.suitability.map((suitability: ISuitability) => suitability.type.toLowerCase()),
  name: pal.name.toLowerCase(),
  drops: pal.drops.map((drop: string) => drop.toLowerCase()),
  id: pal.id // Keep the ID as it is
}));

const search = elasticlunr<IProcessedPal>(function () {
  this.addField("types");
  this.addField("suitabilities");
  this.addField("name");
  this.addField("drops");
  this.addField("key");
  // ID is used as reference but not a field to search
  this.setRef("id");
});

// Add the lowercased documents to the search index
pals.forEach(pal => search.addDoc(pal));

export const execute = (query?: string) => {
  if (!query) return pals;

  const result = search.search(query);
  return pals.filter((pal) => result.some((item) => +item.ref === pal.id));
};
