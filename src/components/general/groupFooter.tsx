import alex from "../../assets/alex-gh.svg";
import melissa from "../../assets/melissa-gh.svg";
import baylie from "../../assets/baylie-gh.svg";
import StyledLink from "./styledLink";
export default function GroupFooter() {
  const melGH = "https://github.com/IcarusGirl16";
  const bayGH = "https://github.com/baylie-r-g";
  const alexGH = "https://github.com/NAlexH2";
  return (
    <>
      <div className="-mt-8 text-center font-semibold max-md:text-2xl md:text-4xl">
        <StyledLink
          href="https://github.com/NAlexH2/frontend-stapi"
          text={"Visit This Sites GitHub Repo Here"}
        />
      </div>
      <div className="text-center max-md:text-lg md:text-2xl mt-4">
        ...or visit our GitHubs!
      </div>
      <footer
        className="text-lg font-semibold grid max-md:grid-cols-9 grid-cols-12 place-items-center
          place-content-center"
      >
        <div className="max-md:col-start-3 max-md:col-end-4 col-start-5 col-end-6 text-center">
          <StyledLink href={melGH} text="Melissa">
            <img src={melissa} alt="" className="h-14" />
          </StyledLink>
        </div>
        <div className="max-md:col-start-5 max-md:col-end-6 col-start-6 col-end-8 text-center">
          <StyledLink href={bayGH} text="Baylie">
            <img src={baylie} alt="" className="h-14" />
          </StyledLink>
        </div>
        <div className="max-md:col-start-7 max-md:col-end-8 col-start-8 col-end-9 text-center">
          <StyledLink href={alexGH} text="Alex">
            <img src={alex} alt="" className="h-14" />
          </StyledLink>
        </div>
      </footer>
    </>
  );
}
