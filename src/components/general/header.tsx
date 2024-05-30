import carina from "../../assets/carina_nebula~large-middle-third.png";

const headerAlt =
  "James Webb Space Telescope NIRCam Image of the \
  'Cosmic Cliffs' in Carina Nebula";
export default function Header() {
  return (
    <>
      <img src={carina} alt={headerAlt} className="w-full" />
    </>
  );
}
