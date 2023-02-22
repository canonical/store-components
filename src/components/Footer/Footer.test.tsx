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
    additionalLinks: [
      {
        name: "Terms of service",
        href: "https://example.com/link3",
      },
    ],
    optionalLinks: [
      {
        name: "Join the Forum",
        href: "https://example.com/link4",
      },
    ],
    charmedOperatorFrameworkLinks: [
      {
        heading: "Charmed Operator Framework",
        name: "What is Juju?",
        bold_name: "What is Juju?",
        href: "https://example.com/link5",
      },
    ],
    charmedOperatorLinks: [
      {
        heading: "Charmed Operator",
        name: "Data",
        bold_name: "Data",
        href: "https://example.com/link6",
      },
    ],
    compareLinks: [
      {
        heading: "Compare",
        name: "Operators & Charmed Operators",
        bold_name: "Operators & Charmed Operators",
        href: "https://example.com/link7",
      },
    ],
    blogLinks: [
      {
        heading: "Blog",
        name: "Best Practices for Creating Charms",
        bold_name: "Best Practices for Creating Charms",
        href: "https://example.com/link8",
      },
    ],
  };

  it("renders", () => {
    render(<Footer {...props} />);
    expect(true).toBe(true);
  });
});
