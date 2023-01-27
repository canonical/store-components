import { render } from "@testing-library/react";
import React from "react";

import CardList from "./CardList";

describe("CardList", () => {
  const props = {
    packages: [],
    itemsPerPage: 10,
  };

  it("renders", () => {
    render(<CardList {...props} />);
    expect(true).toBe(true);
  });

  // It renders
  // It contains pagination if items > items per page
  // It has no pagination if items < items per page
  // Technically this is tested an already tested component
  // Pagination shows next page of items when clicked
  // Correct page is highlighted
  // Prev/next disabled if appropriate
});
