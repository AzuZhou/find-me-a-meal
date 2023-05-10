export interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: boolean;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Array<ExtendedIngredient>;
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: Array<{
    name: string;
    steps: Array<step>;
  }>;
  originalId: number | null;
  spoonacularSourceUrl: string;
}

export type step = {
  number: number;
  step: string;
  ingredients: Array<Ingredient>;
  equipment: Array<Equipment>;
  legth: {
    number: number;
    unit: string;
  };
};

type Equipment = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

type Ingredient = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

interface ExtendedIngredient extends Ingredient {
  aisle: string;
  consistency: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: [];
  measures: { measures: Measure; metric: Measure };
}

interface Measure {
  amount: number;
  unitShort: string;
  unitLong: string;
}
