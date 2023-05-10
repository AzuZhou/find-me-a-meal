import { Suspense } from "react";
import RandomRecipe from "./random";

function Home() {
  return (
    <section className="flex flex-col items-center justify-between">
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* @ts-expect-error Server Component */}
        <RandomRecipe />
      </Suspense>
    </section>
  );
}

export default Home;
