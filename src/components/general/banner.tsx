import carina from "../../assets/carina_nebula-crop.png";

const headerAlt =
  "James Webb Space Telescope NIRCam Image of the \
  'Cosmic Cliffs' in Carina Nebula";
export default function Banner() {
  return (
    <>
      <img src={carina} alt={headerAlt} className="w-full" />
    </>
  );
}
