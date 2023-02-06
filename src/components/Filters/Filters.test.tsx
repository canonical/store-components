import { render, screen } from "@testing-library/react";
import React from "react";

import Filters from "./Filters";

describe("Filters", () => {
  const props = {
    categories: [],
    types: [],
    packages: [],
    setFilteredPackages: jest.fn(),
    platforms: [],
  };

  it("renders", () => {
    render(<Filters {...props} />);
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("shows category checkboxes", () => {
    render(
      <Filters
        {...props}
        categories={[{ display_name: "Category 1", name: "category-1" }]}
      />
    );
    expect(screen.getByLabelText("Category 1")).toBeInTheDocument();
  });

  it("shows Platforms filter if there are platforms", () => {
    render(<Filters {...props} />);
    expect(screen.getByLabelText("Platforms")).toBeInTheDocument();
  });

  it("doesn't show Platforms filter if there are no platforms", () => {
    render(<Filters {...props} platforms={null} />);
    expect(screen.queryByLabelText("Platforms")).not.toBeInTheDocument();
  });

  it("shows Types filter if there are types", () => {
    render(<Filters {...props} />);
    expect(screen.getByLabelText("Types")).toBeInTheDocument();
  });

  it("doesn't show Types filter if there are no types", () => {
    render(<Filters {...props} types={null} />);
    expect(screen.queryByLabelText("Types")).not.toBeInTheDocument();
  });
});
