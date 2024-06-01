import { NavBar, GroupFooter, StyledLink } from "../components/general";

export default function Home() {
  return (
    <>
      <NavBar title={window.location.href} />
      <h1 className="text-center mt-2 -mb-3">Welcome!</h1>
      <main className="mt-5 grid grid-cols-12 grid-rows-12">
        <section className="col-start-2 col-end-12 row-start-1 row-end-12 bg-black bg-opacity-50 p-5">
          <h2 className="max-lg:text-2xl underline">About This Website:</h2>
          <div className="max-lg:text-base text-xl ml-3 mt-2">
            <p>
              As part of a final project for a class offered at Portland State
              Universities Computer Science department - Front End Web
              Technologies - we set out to create something that interested our
              group. The team consisted of three people: Baylie Gende, Melissa
              Shanks, and Alex Harris. You can find links to our GitHubs at the
              bottom of every page.
            </p>
            <p>
              This website allows a person to explore various stats based on the
              entirety of the Star Trek franchise. Using{" "}
              <StyledLink href="https://stapi.co" text="stapi.co" /> we built
              out a simple dashboard to search for a variety of information that
              exists in the Star Trek franchise. This also allowed each of us to
              each develope a unique view, while maintaining a style. We went
              with this API because of it's free cost use, and the flexibility
              that comes with that and the structure that was provided.
            </p>
          </div>
          <h2 className="max-lg:text-2xl underline mt-2">
            Thanks and Accreditation:
          </h2>
          <div className="max-lg:text-base text-xl ml-3 mt-2">
            <ul>
              <li>
                <StyledLink
                  href="https://github.com/cezarykluczynski"
                  text="cezarykluczynski"
                />{" "}
                on GitHub for taking the time to make this API.
              </li>
              <li>
                <StyledLink
                  href="https://images.nasa.gov/details/carina_nebula"
                  text="NASA"
                />{" "}
                and it's awesome James Web Space Telescope (JWST) for capturing
                a great image of the Carina Nebula, which is used as our banner
                image in tangent with the navbar.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <GroupFooter />
    </>
  );
}
