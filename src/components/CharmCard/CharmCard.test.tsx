import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import CharmCard from "./CharmCard";

describe("CharmCard", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2026-08-25T12:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const data = {
    package: {
      description: "A MongoDB operator charm",
      display_name: "MongoDB",
      icon_url: "https://example.com/mongodb.png",
      last_updated: "2026-08-17T12:00:00Z",
      name: "mongodb-k8s",
      platforms: ["kubernetes"],
      summary: "A MongoDB operator charm",
      channel: {
        name: "6/stable",
        risk: "stable",
        track: "6",
      },
    },
    publisher: {
      display_name: "Canonical",
      name: "canonical",
      validation: "verified",
    },
    categories: [{ display_name: "Databases", name: "databases" }],
  };

  it("renders all charm details", () => {
    render(<CharmCard data={data} />);

    expect(screen.getByRole("link", { name: "MongoDB" })).toHaveAttribute(
      "href",
      "/mongodb-k8s"
    );
    expect(screen.getByText("Canonical")).toBeInTheDocument();
    expect(screen.getByAltText("Verified account")).toBeInTheDocument();
    expect(screen.getByText("A MongoDB operator charm")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
    expect(screen.getByAltText("Kubernetes")).toBeInTheDocument();
    expect(screen.getByTitle("Default channel 6/stable")).toHaveTextContent(
      "6/stable"
    );
    expect(screen.getByText("8 days ago")).toBeInTheDocument();
    expect(screen.getByTestId("revisions-icon")).toHaveClass(
      "p-icon--revisions"
    );
  });

  it("falls back to the package name when the display name is empty", () => {
    const packageData = {
      ...data,
      package: { ...data.package, display_name: "" },
    };

    render(<CharmCard data={packageData} />);

    expect(
      screen.getByRole("link", { name: "mongodb k8s" })
    ).toBeInTheDocument();
    expect(packageData.package.display_name).toBe("");
  });

  it("falls back to the publisher name when its display name is empty", () => {
    render(
      <CharmCard
        data={{
          ...data,
          publisher: { ...data.publisher, display_name: "" },
        }}
      />
    );

    expect(screen.getByText("canonical")).toBeInTheDocument();
  });

  it("keeps the verified badge separate from a long publisher name", () => {
    render(
      <CharmCard
        data={{
          ...data,
          publisher: {
            ...data.publisher,
            display_name: "A publisher name that is too long for the card",
          },
        }}
      />
    );

    expect(
      screen.getByText("A publisher name that is too long for the card")
    ).toHaveClass("sc-charm-card__publisher-name");
    expect(screen.getByAltText("Verified account")).toHaveClass(
      "sc-charm-card__verified"
    );
  });

  it("supports existing data without optional metrics", () => {
    render(
      <CharmCard
        data={{
          ...data,
          package: {
            ...data.package,
            channel: undefined,
            last_updated: undefined,
          },
        }}
      />
    );

    expect(screen.queryByTitle(/Default channel/)).not.toBeInTheDocument();
    expect(screen.queryByRole("contentinfo")).not.toBeInTheDocument();
  });

  it("does not render an empty footer", () => {
    render(
      <CharmCard
        data={{
          ...data,
          package: {
            ...data.package,
            channel: { name: "", risk: "", track: "" },
            last_updated: "",
          },
        }}
      />
    );

    expect(screen.queryByRole("contentinfo")).not.toBeInTheDocument();
  });

  it("renders the star developer badge", () => {
    render(
      <CharmCard
        data={{
          ...data,
          publisher: { ...data.publisher, validation: "starred" },
        }}
      />
    );

    expect(screen.getByAltText("Star developer")).toBeInTheDocument();
  });

  it("navigates when the card is clicked", () => {
    const location = window.location;
    delete window.location;
    window.location = { ...location, href: "" };

    render(<CharmCard data={data} />);
    fireEvent.click(screen.getByRole("group"));

    expect(window.location.href).toBe("/mongodb-k8s");
    window.location = location;
  });

  it("does not divide platforms when there are no categories", () => {
    render(<CharmCard data={{ ...data, categories: [] }} />);

    expect(screen.getByTestId("charm-platforms")).not.toHaveClass(
      "sc-charm-card__platforms--divided"
    );
  });

  it("collapses additional categories into a count chip", () => {
    render(
      <CharmCard
        data={{
          ...data,
          categories: [
            ...data.categories,
            { display_name: "Storage", name: "storage" },
            { display_name: "Cloud", name: "cloud" },
          ],
        }}
      />
    );

    expect(screen.getByText("Databases")).toBeInTheDocument();
    expect(screen.getByTestId("primary-category")).toHaveClass("is-readonly");
    expect(screen.getByTitle("Storage, Cloud")).toHaveClass("is-readonly");
    expect(screen.getByTitle("Storage, Cloud")).toHaveTextContent("+2");
    expect(screen.queryByText("Storage")).not.toBeInTheDocument();
  });

  it("renders a consumer-provided platform icon", () => {
    render(
      <CharmCard
        data={data}
        platformIcons={{
          kubernetes: <svg aria-label="Custom Kubernetes" />,
        }}
      />
    );

    expect(screen.getByTestId("revisions-icon")).toBeInTheDocument();
    expect(screen.getByLabelText("Custom Kubernetes")).toBeInTheDocument();
  });
});
