export default function NavBar({ title = "" }: { title: string }) {
  const home = "/home";
  const spacecraft = "/spacecraft";
  const performers = "/performers";
  const runStats = "/run-date-stats";
  const currentStyle =
    "me-4 rounded-2xl p-2 text-3xl bg-clip-text font-outline \
  text-transparent font-extrabold transition-all duration-500 bg-gradient-to-tl \
  via-orange-300 to-60% from-purple-800 to-blue-200 from-20% bg-size-200 \
  bg-pos-0 hover:bg-pos-100 uppercase";

  const linkStyle =
    "me-4 rounded-2xl p-2 text-3xl bg-clip-text font-outline \
text-transparent font-extrabold transition-all duration-500 bg-gradient-to-tl \
to-orange-300 to-60% via-purple-800 from-blue-200 from-20% bg-size-200 \
bg-pos-0 hover:bg-pos-100";

  return (
    <header>
      <div className="flex justify-center">
        <nav className="my-4">
          <a
            className={title.search(home) !== -1 ? currentStyle : linkStyle}
            href={`/home`}
          >
            Home
          </a>
          <a
            className={
              title.search(spacecraft) !== -1 ? currentStyle : linkStyle
            }
            href={`/spacecraft`}
          >
            Spacecraft
          </a>
          <a
            className={
              title.search(performers) !== -1 ? currentStyle : linkStyle
            }
            href={`/performers`}
          >
            Actor Stats
          </a>
          <a
            className={title.search(runStats) !== -1 ? currentStyle : linkStyle}
            href={`/run-date-stats`}
          >
            Show Dates
          </a>
        </nav>
      </div>
    </header>
  );
}
