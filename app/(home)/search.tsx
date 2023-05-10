"use client";

function SearchBar() {
  return (
    <form className="flex w-full max-w-f justify-center items-center font-mono text-sm lg:max-w-5xl">
      <input
        type="search"
        placeholder="Search for a recipe"
        className="flex w-full bg-black border-b border-white py-6 dark:from-inherit lg:p-4 lg:rounded-xl lg:border"
      />
      <button
        type="submit"
        className="font-semibold uppercase p-6 lg:p-4 lg:ml-6"
      >
        search
      </button>
    </form>
  );
}

export default SearchBar;
