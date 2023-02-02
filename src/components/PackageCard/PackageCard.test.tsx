import { render, screen } from "@testing-library/react";
import React from "react";

import PackageCard from "./PackageCard";

describe("PackageCard", () => {
  const props = {
    item: {
      package: {
        description: "Lorem ipsum dolor sit amet",
        display_name: "Hello, Kubecon!",
        icon_url: "https://example.com/image.jpg",
        name: "hello-kubecon",
        platforms: ["kubernetes"],
        type: "charm",
        charms: [],
      },
      publisher: {
        display_name: "Joe Blogs",
        name: "joeblogs",
        validation: "star",
      },
      categories: [],
    },
  };

  it("renders", () => {
    render(<PackageCard {...props} />);
    expect(screen.getByText("Hello, Kubecon!")).toBeInTheDocument();
  });

  it("renders an icon if URL is provided", () => {
    props.item.package.icon_url = "https://example.com/image.jpg";
    render(<PackageCard {...props} />);
    expect(screen.getByTestId("package-card-icon")).toBeInTheDocument();
  });

  it("uses the media object pattern if icon is present", () => {
    props.item.package.icon_url = "https://example.com/image.jpg";
    render(<PackageCard {...props} />);
    const packageCardContainer = screen.getByTestId("package-card-container");
    expect(packageCardContainer).toBeInTheDocument();
    expect(packageCardContainer).toHaveClass("p-media-object");
  });

  it("doesn't render an img element if no icon URL is provided", () => {
    props.item.package.icon_url = "";
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("package-card-icon")).not.toBeInTheDocument();
  });

  it("doesn't use the media object pattern if no icon is present", () => {
    props.item.package.icon_url = "";
    render(<PackageCard {...props} />);
    const packageCardContainer = screen.getByTestId("package-card-container");
    expect(packageCardContainer).toBeInTheDocument();
    expect(packageCardContainer).not.toHaveClass(".p-media-object");
  });

  it("shows a list of bundled charm icons if card is for a bundle", () => {
    props.item.package.type = "bundle";
    render(<PackageCard {...props} />);
    expect(screen.getByTestId("bundled-charms")).toBeInTheDocument();
  });

  it("doesn't show a list of bundled charm icons if card is for a bundle", () => {
    props.item.package.type = "charm";
    props.item.package.charms = [];
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("bundled-charms")).not.toBeInTheDocument();
  });

  it("shows a platform if platforms are available", () => {
    props.item.package.platforms.push("kubernetes");
    render(<PackageCard {...props} />);
    expect(screen.getByTestId("package-platforms")).toBeInTheDocument();
  });

  it("doesn't show a platform if platforms are available", () => {
    props.item.package.platforms = [];
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("package-platforms")).not.toBeInTheDocument();
  });

  it("shows a libraries link if the card is for an interface", () => {
    props.item.package.type = "interface";
    render(<PackageCard {...props} />);
    expect(screen.getByTestId("interface-libraries")).toBeInTheDocument();
  });

  it("doesn't show a libraries link if the card isn't for an interface", () => {
    props.item.package.type = "charm";
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("interface-libraries")).not.toBeInTheDocument();
  });

  it("shows the star developer icon if publisher is a star developer", () => {
    props.item.publisher.validation = "star";
    render(<PackageCard {...props} />);
    expect(screen.getByTestId("star-developer-icon")).toBeInTheDocument();
  });

  it("doesn't shows the star developer icon if publisher is not a star developer", () => {
    props.item.publisher.validation = "";
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("star-developer-icon")).not.toBeInTheDocument();
  });

  it("shows the verified accunt icon if publisher is a verified accunt", () => {
    props.item.publisher.validation = "verified";
    render(<PackageCard {...props} />);
    expect(screen.getByTestId("verified-account-icon")).toBeInTheDocument();
  });

  it("doesn't shows the verfied account icon if publisher is not a verfied account", () => {
    props.item.publisher.validation = "star";
    render(<PackageCard {...props} />);
    expect(
      screen.queryByTestId("verified-account-icon")
    ).not.toBeInTheDocument();
  });
});
