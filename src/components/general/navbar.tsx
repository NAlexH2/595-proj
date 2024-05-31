export default function NavBar({ pageTitle }: { title: string }) {
  const home = "/";
  const spacecraft = "/spacecraft";
  const performers = "/performers";
  const runStats = "/run-date-stats";

  return (
    <header>
      <div className="flex justify-center">
        <nav className="mt-4">
          <a
            className="me-4 rounded-2xl border-blue-500 p-2 bg-gradient-to-tr from-orange-300 from-5%
              to-blue-700 text-xl font-extrabold text-transparent bg-clip-text"
            href={`/`}
          >
            Home
          </a>
          <a className="me-4" href={`/spacecraft`}>
            Species Spacecraft
          </a>
          <a className="me-4" href={`/performers`}>
            Actor Stats
          </a>
          <a className="me-4" href={`/run-date-stats`}>
            Series Run Dates
          </a>
        </nav>
      </div>
    </header>
  );
}
