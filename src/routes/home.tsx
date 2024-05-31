import { Banner, NavBar } from "../components/general";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar title={window.location.href} />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
