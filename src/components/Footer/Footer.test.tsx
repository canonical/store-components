import { render } from "@testing-library/react";
import React from "react";

import Footer from "./Footer";

describe("Footer", () => {
  const props = {
    copyrightYear: 2023,
    companyName: "Canonical Ltd.",
  };

  it("renders", () => {
    render(<Footer {...props} />);
    expect(true).toBe(true);
  });
});
