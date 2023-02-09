import { render } from "@testing-library/react";
import React from "react";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders", () => {
    render(<Footer />);
    expect(true).toBe(true);
  });
});
