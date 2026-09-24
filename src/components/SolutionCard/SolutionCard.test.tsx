import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SolutionCard from "./SolutionCard";

describe("SolutionCard", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2026-08-25T12:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const data = {
    categories: ["databases", "data-storage"],
    charms: [
      "postgresql-k8s",
      "data-integrator",
      "traefik-k8s",
      "s3-integrator",
      "grafana-k8s",
      "prometheus-k8s",
    ],
    icon: "https://example.com/data-mesh.svg",
    last_updated: "2026-08-14T12:00:00Z",
    name: "data-mesh",
    platform: "kubernetes",
    platform_version: [">= 1.25"],
    publisher: "Commercial Systems",
    summary:
      "A composable data platform built on trusted open source projects.",
    title: "Data Mesh Solution",
  };
  const charmIcons = Object.fromEntries(
    data.charms.map((charm) => [charm, `https://example.com/${charm}.svg`])
  );

  it("renders solution details", () => {
    render(
      <SolutionCard charmIcons={charmIcons} data={data} publisherVerified />
    );

    expect(
      screen.getByRole("link", { name: "Data Mesh Solution" })
    ).toHaveAttribute("href", "/solutions/data-mesh");
    expect(screen.getByText("Commercial Systems")).toBeInTheDocument();
    expect(screen.getByAltText("Verified account")).toBeInTheDocument();
    expect(screen.getByText(data.summary)).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
    expect(screen.getByText("Data Storage")).toBeInTheDocument();
    expect(screen.getByLabelText("1 more categories")).toHaveTextContent("+1");
    expect(screen.getByAltText("Kubernetes")).toBeInTheDocument();
    expect(screen.getByTestId("solution-platform")).toHaveClass(
      "sc-solution-card__platform--divided"
    );
    expect(screen.getByText("1.25+")).toBeInTheDocument();
    expect(screen.getByText("11 days ago")).toBeInTheDocument();
    expect(screen.getByLabelText("6 included charms")).toBeInTheDocument();
    expect(screen.getByText("6 Charms")).toBeInTheDocument();
    expect(screen.getByTitle("grafana-k8s")).toBeInTheDocument();
    expect(screen.queryByTitle("prometheus-k8s")).not.toBeInTheDocument();
    expect(screen.getAllByText("+1")).toHaveLength(2);
  });

  it("accepts publisher and category objects from the solutions service", () => {
    render(
      <SolutionCard
        data={{
          ...data,
          categories: [{ display_name: "AI/ML", name: "ai-ml" }],
          publisher: {
            display_name: "Canonical AI",
            username: "canonical-ai",
          },
        }}
      />
    );

    expect(screen.getByText("Canonical AI")).toBeInTheDocument();
    expect(screen.getByText("AI/ML")).toBeInTheDocument();
  });

  it("uses fallback icons when charm icon URLs are unavailable", () => {
    render(
      <SolutionCard
        data={{
          ...data,
          categories: [],
          last_updated: null,
          platform: undefined,
        }}
      />
    );

    expect(screen.getByLabelText("6 included charms")).toBeInTheDocument();
    expect(screen.getByTitle("postgresql-k8s")).toHaveAttribute(
      "src",
      "https://assets.ubuntu.com/v1/be6eb412-snapcraft-missing-icon.svg"
    );
    expect(screen.getAllByTitle(/-k8s$|integrator$/)).toHaveLength(5);
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.queryByAltText("Verified account")).not.toBeInTheDocument();
    expect(screen.queryByText("11 days ago")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Kubernetes")).not.toBeInTheDocument();
  });

  it("only shows group dividers when preceding metadata is present", () => {
    render(
      <SolutionCard
        charmIcons={charmIcons}
        data={{ ...data, categories: [], last_updated: null }}
      />
    );

    expect(screen.getByTestId("solution-platform")).not.toHaveClass(
      "sc-solution-card__platform--divided"
    );
    expect(screen.getByLabelText("6 included charms")).not.toHaveClass(
      "sc-solution-card__charms--divided"
    );
  });

  it("navigates when the card is clicked", () => {
    const location = window.location;
    delete window.location;
    window.location = { ...location, href: "" };

    render(<SolutionCard data={data} />);
    fireEvent.click(screen.getByRole("group"));

    expect(window.location.href).toBe("/solutions/data-mesh");
    window.location = location;
  });
});
