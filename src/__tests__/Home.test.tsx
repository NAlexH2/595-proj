import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { Home } from "../routes";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Home page render tests", () => {
  test("Home Page Renders", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("home-test"));
  });
});

describe("Home Page Has Content", () => {
  test("Has welcome heading.", async () => {
    const element = screen.getAllByText("Welcome!");
    expect(element.length).toBe(1);
    expect(element[0]).toBeInTheDocument();
  });

  test("Has h2 indicating additional messaging", async () => {
    const element = screen.getAllByRole("heading", { level: 2 });
    expect(element[0].innerHTML).toContain("About This Website");
    expect(element[1].innerHTML).toContain("Thanks and Accreditation");
  });

  test("Each <p> indicating additional messaging", async () => {
    const element = screen.getAllByText(
      (_, element) => element.tagName.toLowerCase() === "p",
    );
    expect(element[0].innerHTML).toContain(
      "As part of a final project for a class offered at Portland State Universities Computer Science department",
    );
    expect(element[1].innerHTML).toContain(
      "This website allows a person to explore various stats based on the entirety of the Star Trek franchise.",
    );
    expect(element[2].innerHTML).toContain(
      "Each of the pages you can visit will have a variety of information.",
    );
  });

  test("Each <p> indicating additional messaging", async () => {
    const element = screen.getAllByText(
      (_, element) => element.tagName.toLowerCase() === "li",
    );
    expect(element[0].innerHTML).toContain(
      "on GitHub for taking the time to make this API",
    );
    expect(element[1].innerHTML).toContain(
      "it's awesome James Web Space Telescope (JWST) for",
    );
  });
  describe("NavBar Renders Correctly", () => {
    test("Has Home Link", async () => {
      const element = screen.getAllByText("Home");
      expect(element[0].innerHTML).toContain("Home");
    });
    test("Has Show Dates Link", async () => {
      const element = screen.getAllByText("Show Dates");
      expect(element[0].innerHTML).toContain("Dates");
    });
    test("Has Actor Stats Link", async () => {
      const element = screen.getAllByText("Actor Stats");
      expect(element[0].innerHTML).toContain("Stats");
    });
    test("Has Spacecraft Link", async () => {
      const element = screen.getAllByText("Spacecraft");
      expect(element[0].innerHTML).toContain("Spacecraft");
    });
  });
});
