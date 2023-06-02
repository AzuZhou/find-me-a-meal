import { Suspense } from "react";
import Image from "next/image";

import Subtitutes from "./substitutes";

import { Recipe } from "types";

import { vollkorn } from "utils/fonts";

async function getRandomRecipe(): Promise<{ recipes: Array<Recipe> }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL}/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=1`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function RandomRecipe() {
  const { recipes } = await getRandomRecipe();

  const { title, summary, image, vegan, extendedIngredients } = recipes[0];

  return (
    <article className="flex flex-col lg:my-16">
      <section className="mt-16 flex flex-col">
        <h2 className={`${vollkorn.className} mb-8 text-4xl`}>{title}</h2>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <p
            className="flex-1 text-sm"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>

          <div className="relative flex-1">
            <Image
              src={image}
              alt={title}
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              priority={true}
            />
          </div>
        </div>
      </section>

      {!vegan && (
        <Suspense fallback={<p>Loading substitutes...</p>}>
          {/* @ts-expect-error Server Component */}
          <Subtitutes extendedIngredients={extendedIngredients} />
        </Suspense>
      )}
    </article>
  );
}

export default RandomRecipe;
