import React from "react";
import { render, screen } from "@testing-library/react";

import SolutionLoadingCard from "./SolutionLoadingCard";

describe("SolutionLoadingCard", () => {
  it("announces its loading state", () => {
    render(<SolutionLoadingCard />);

    expect(
      screen.getByRole("group", { name: "Loading solution" })
    ).toHaveAttribute("aria-busy", "true");
  });
});
