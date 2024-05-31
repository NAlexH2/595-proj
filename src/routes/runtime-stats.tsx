import { NavBar } from "../components/general";

export default function RuntimeStats() {
  return (
    <>
      <NavBar title={window.location.href} />
      <h1>Runtime Stats</h1>
    </>
  );
}
