"use client";

function SearchBar() {
  return (
    <form className="flex w-full flex-col items-center justify-center gap-2 text-sm md:flex-row md:gap-0">
      <input
        type="search"
        placeholder="Search for a recipe"
        className="flex w-full rounded-lg border border-amber-400 bg-white p-4 md:rounded-r-none"
      />
      <button
        type="submit"
        className="w-full rounded-lg border border-amber-400 bg-amber-400 p-4 font-semibold uppercase text-white transition-colors md:w-auto md:rounded-l-none md:border-l-0 md:hover:bg-white md:hover:text-amber-400"
      >
        search
      </button>
    </form>
  );
}

export default SearchBar;
