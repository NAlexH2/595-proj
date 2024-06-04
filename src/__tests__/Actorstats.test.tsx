import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { SeriesActorStats } from "../routes";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Home page render tests", () => {
  test("Actor Stats Page Renders", async () => {
    render(
      <MemoryRouter>
        <SeriesActorStats pages={1} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("sas-test"));
  });

  test("Renders loading", async () => {
    const element = screen.getByTestId("sas-loading");
    expect(element.innerHTML).toContain("of data to collect, please wait...");
  });
});
