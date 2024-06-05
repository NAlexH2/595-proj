import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { SpeciesSpacecraft } from "../routes";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Spacecraft page render tests", () => {
  test("Species Spacecraft Page Renders", async () => {
    render(
      <MemoryRouter>
        <SpeciesSpacecraft />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("spacecraft-test"));
  });
});
