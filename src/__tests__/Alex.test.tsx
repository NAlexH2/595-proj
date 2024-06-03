import { getAllByRole, render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { Home, RuntimeStats, SpeciesSpacecraft } from "../routes";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import { log } from "console";
import { NavBar } from "../components/general";

describe("Page render tests", () => {
  test("Home Page Renders", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });

  test("Runtime Stats Page Renders", async () => {
    render(
      <BrowserRouter>
        <RuntimeStats />
      </BrowserRouter>,
    );
  });

  test("Runtime Stats Page Renders", async () => {
    render(
      <BrowserRouter>
        <RuntimeStats />
      </BrowserRouter>,
    );
  });

  test("Species Spacecraft Page Renders", async () => {
    render(
      <BrowserRouter>
        <SpeciesSpacecraft />
      </BrowserRouter>,
    );
  });

  test("Actor Stats Page Renders", async () => {
    render(
      <BrowserRouter>
        <SpeciesSpacecraft />
      </BrowserRouter>,
    );
  });
});

describe("Home Page Has Content", () => {
  test("Has welcome heading.", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const element = screen.getAllByText("Welcome!");
    expect(element.length).toBe(2);
    expect(element[0]).toBeInTheDocument();
  });
  test("Has h2 indicating additional messaging", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const element = screen.getAllByRole("heading", { level: 2 });
    expect(element[0].innerHTML).toContain("About This Website");
    expect(element[1].innerHTML).toContain("Thanks and Accreditation");
  });
  test("Each <p> indicating additional messaging", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const element = screen.getAllByText(
      (content, element) => element.tagName.toLowerCase() === "p",
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
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const element = screen.getAllByText(
      (content, element) => element.tagName.toLowerCase() === "li",
    );
    expect(element[0].innerHTML).toContain(
      "on GitHub for taking the time to make this API",
    );
    expect(element[1].innerHTML).toContain(
      "it's awesome James Web Space Telescope (JWST) for",
    );
  });
});

describe("NavBar Renders Correctly", () => {
  test("Has Home Link", async () => {
    render(
      <BrowserRouter>
        <NavBar title={""} />
      </BrowserRouter>,
    );
    const element = screen.getAllByText("Home");
    expect(element[0].innerHTML).toContain("Home");
  });
  test("Has Show Dates Link", async () => {
    render(
      <BrowserRouter>
        <NavBar title={""} />
      </BrowserRouter>,
    );
    const element = screen.getAllByText("Show Dates");
    expect(element[0].innerHTML).toContain("Dates");
  });
  test("Has Actor Stats Link", async () => {
    render(
      <BrowserRouter>
        <NavBar title={""} />
      </BrowserRouter>,
    );
    const element = screen.getAllByText("Actor Stats");
    expect(element[0].innerHTML).toContain("Stats");
  });
  test("Has Spacecraft Link", async () => {
    render(
      <BrowserRouter>
        <NavBar title={""} />
      </BrowserRouter>,
    );
    const element = screen.getAllByText("Spacecraft");
    expect(element[0].innerHTML).toContain("Spacecraft");
  });
});

describe("Actor Stats Page Tests", () => {
  test("Has Home Link", async () => {
    render(
      <BrowserRouter>
        <NavBar title={""} />
      </BrowserRouter>,
    );
    const element = screen.getAllByText("Home");
    expect(element[0].innerHTML).toContain("Home");
  });
});
