import { render } from "@testing-library/react";
import React from "react";

import PackageCard from "./PackageCard";

describe("PackageCard", () => {
  const props = {
    item: {
      package: {},
      publisher: {},
      categories: [],
    },
  };

  it("renders", () => {
    render(<PackageCard {...props} />);
    expect(true).toBe(true);
  });
});
