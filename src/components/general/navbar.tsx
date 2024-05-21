export default function NavBar() {
  return (
    <nav className={"text-red-600"}>
      <ul>
        <li>
          <a href={`/`}>Home</a>
        </li>
        <li>
          <a href={`/spacecraft`}>Species Spacecraft</a>
        </li>
        <li>
          <a href={`/performers`}>Actor Stats</a>
        </li>
        <li>
          <a href={`/run-date-stats`}>Series Run Dates</a>
        </li>
      </ul>
    </nav>
  );
}
