import { render } from "@testing-library/react";
import React from "react";

import Footer from "./Footer";

describe("Footer", () => {
  const props = {
    socialLinks: [
      {
        name: "Twitter",
        iconUrl: "https://example.com/icon1.png",
        href: "https://example.com/link1",
        altText: "Link 1",
      },
      {
        name: "Github",
        iconUrl: "https://example.com/icon2.png",
        href: "https://example.com/link2",
        altText: "Link 2",
      },
    ],
  };

  it("renders", () => {
    render(<Footer {...props} />);
    expect(true).toBe(true);
  });
});
