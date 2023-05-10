import { Recipe } from "types";

async function getRandomRecipe(): Promise<{ recipes: Array<Recipe> }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL}/recipes/random/?apiKey=${process.env.SPOONACULAR_API_KEY}&number=1`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function RandomRecipe() {
  const { recipes } = await getRandomRecipe();
  console.log("recipes: ", recipes);

  if (!recipes.length) return <div></div>;

  return <section className="my-32 flex flex-col">{recipes[0].id}</section>;
}

export default RandomRecipe;
