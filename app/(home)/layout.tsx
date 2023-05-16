import SearchBar from "(home)/search";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 lg:container lg:p-24">
      <section className="flex w-full justify-center">
        <SearchBar />
      </section>

      {children}
    </main>
  );
}

export default HomeLayout;
