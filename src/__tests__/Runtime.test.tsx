import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { RuntimeStats } from "../routes";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Home page render tests", () => {
  test("Runtime Stats Page Renders", async () => {
    render(
      <MemoryRouter>
        <RuntimeStats />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("runtime-test"));
  });
});
