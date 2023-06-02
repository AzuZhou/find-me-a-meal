import SearchBar from "(home)/search";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-12 lg:p-24">
      <section className="flex w-full justify-center">
        <SearchBar />
      </section>

      {children}
    </main>
  );
}

export default HomeLayout;
