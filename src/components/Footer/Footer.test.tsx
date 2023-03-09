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
    children: (
      <div className="row">
        <div className="col-3">
          <h2 className="p-heading--5">Charmed Operator Framework</h2>
          <ul className="p-list">
            <li className="p-list__item">
              <a className="p-link--soft" href="https://juju.is/#what-is-juju">
                <small>What is Juju?</small>
              </a>
            </li>
            <li className="p-list__item">
              <a className="p-link--soft" href="https://charmhub.io">
                <small>What is Charmhub?</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  it("renders", () => {
    render(<Footer {...props} />);
    expect(true).toBe(true);
  });
});
