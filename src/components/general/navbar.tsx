import { Link } from "react-router-dom";
import carina from "../../assets/carina_nebula-orig.png";

const headerAlt =
  "James Webb Space Telescope NIRCam Image of the \
  'Cosmic Cliffs' in Carina Nebula";

export default function NavBar({ title = "" }: { title: string }) {
  const home = "/home";
  const spacecraft = "/spacecraft";
  const performers = "/performers";
  const runStats = "/run-date-stats";
  const activeLinkStyle =
    "me-4 rounded-2xl p-2 text-3xl max-md:text-lg  bg-clip-text  \
  text-transparent sm:font-semibold lg:font-bold transition-all \
  duration-500 bg-gradient-to-tl via-orange-300 from-purple-800 from-20% \
  to-blue-200 to-[90%] bg-size-200 bg-pos-0 hover:bg-pos-100 uppercase";

  const linkStyle =
    "me-4 rounded-2xl p-2 text-3xl max-md:text-lg bg-clip-text \
text-transparent sm:font-semibold lg:font-bold transition-all \
duration-500 bg-gradient-to-tl to-orange-300 to-[80%] via-purple-800 \
from-blue-200 from-20% bg-size-200 bg-pos-0 hover:bg-pos-100";

  return (
    <header>
      <img
        src={carina}
        alt={headerAlt}
        className="w-full z-[1] relative object-cover object-center max-h-20"
      />
      <div className="flex justify-center sm:top-0 sm:left-0 sm:right-0 sm:z-10 sm:absolute">
        <nav className="my-4 bg-black bg-opacity-70 rounded-full p-1 pl-6">
          <Link
            className={title.search(home) !== -1 ? activeLinkStyle : linkStyle}
            to={`/home`}
          >
            Home
          </Link>
          <Link
            className={
              title.search(spacecraft) !== -1 ? activeLinkStyle : linkStyle
            }
            to={`/spacecraft`}
          >
            Spacecraft
          </Link>
          <Link
            className={
              title.search(performers) !== -1 ? activeLinkStyle : linkStyle
            }
            to={`/performers`}
          >
            Actor Stats
          </Link>
          <Link
            className={
              title.search(runStats) !== -1 ? activeLinkStyle : linkStyle
            }
            to={`/run-date-stats`}
          >
            Show Dates
          </Link>
        </nav>
      </div>
    </header>
  );
}
