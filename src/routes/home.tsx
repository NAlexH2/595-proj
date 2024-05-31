import { NavBar } from "../components/general";

export default function Home() {
  return (
    <>
      <NavBar title={window.location.href} />
      <h1 className="text-center mt-2 -mb-3">Welcome!</h1>
      <main className="mt-5 grid grid-cols-12 grid-rows-12">
        <section className="col-start-2 col-end-12 row-start-1 row-end-12 bg-slate-500 p-5">
          <h2 className="max-md:text-2xl underline">About This Website:</h2>
          <div className="max-md:text-base text-2xl ml-3 mt-2">
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
              <a href="https://stapi.co">stapi.co</a> we built out a simple
              dashboard to search for a variety of information that exists in
              the Star Trek franchise. This also allowed each of us to each
              develope a unique view, while maintaining a style. We went with
              this API because of it's free cost use, and the flexibility that
              comes with that and the structure that was provided.
            </p>
          </div>
          <h2 className="max-md:text-2xl underline mt-2">
            Thanks and Accreditation:
          </h2>
          <div className="max-md:text-base text-2xl ml-3 mt-2">
            <ul>
              <li>a</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
