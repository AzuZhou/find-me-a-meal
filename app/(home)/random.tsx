import Image from "next/image";
import { Recipe } from "types";

import { vollkorn } from "utils/fonts";

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

  // if (!recipes.length) return <div></div>;

  const { title, summary, image } = recipes[0];

  return (
    <section className="my-32 flex flex-col">
      <div className="flex flex-col">
        <h2 className={`${vollkorn.className} text-4xl`}>{title}</h2>
        <div className="flex flex-col lg:flex-row">
          <p
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>

          <div className="relative flex-1">
            <Image
              src={image}
              alt={title}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RandomRecipe;
