// @ts-ignore
import { checkIngredients } from "is-vegan";
import { ExtendedIngredient } from "types";

const getNonVeganIngredients = async (
  extendedIngredients: ExtendedIngredient[]
) => {
  const cleanIngredients = extendedIngredients.map(
    (ingredient) => ingredient.name
  );
  return checkIngredients(cleanIngredients).nonvegan;
};

async function getSubstitutes(nonVeganIngredients: string[]): Promise<any> {
  const substitutesUrl = `${process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL}/food/ingredients/substitutes?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredientName=`;

  const urls = nonVeganIngredients.map(
    (ingredient) => `${substitutesUrl}${ingredient}`
  );

  return Promise.allSettled(urls.map((url) => fetch(url)))
    .then((results) =>
      Promise.all(
        results.map((result) =>
          result.status == "fulfilled"
            ? result.value.json()
            : result.reason.json()
        )
      )
    )
    .then((results) =>
      results.reduce(
        (acc, curr) =>
          curr.status === "success"
            ? [
                ...acc,
                { ingredient: curr.ingredient, substitutes: curr.substitutes },
              ]
            : acc,
        []
      )
    )
    .catch((err) => console.log("ERROR", err));
}

// TODO: subtitutes undefined if  [] or if no subs found

interface ISubstitutes {
  extendedIngredients: ExtendedIngredient[];
}

async function Subtitutes({
  extendedIngredients,
}: ISubstitutes): Promise<JSX.Element | null> {
  const nonVeganIngredients: string[] = await getNonVeganIngredients(
    extendedIngredients
  );

  const substitutes = await getSubstitutes(nonVeganIngredients);

  if (!substitutes) return null;

  return (
    <section>
      <h3>Substitutes</h3>

      {substitutes.map(
        ({
          ingredient,
          substitutes,
        }: {
          ingredient: string;
          substitutes: string[];
        }) => (
          <p key={ingredient}>{ingredient}</p>
        )
      )}
    </section>
  );
}

export default Subtitutes;
