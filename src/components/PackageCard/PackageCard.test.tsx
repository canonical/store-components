import React from "react";
import { render, screen } from "@testing-library/react";

import PackageCard from "./PackageCard";

describe("PackageCard", () => {
  const props = {
    data: {
      package: {
        charms: [
          {
            display_name: "Traefik Ingress",
            name: "traefik-k8s",
          },
          {
            display_name: "MicroK8s",
            name: "microk8s",
          },
          {
            display_name: "Kafka",
            name: "kafka",
          },
          {
            display_name: "PostgreSQL",
            name: "postgresql",
          },
          {
            display_name: "Prometheus",
            name: "prometheus-k8s",
          },
          {
            display_name: "Landscape Server",
            name: "landscape-server",
          },
          {
            display_name: "Grafana",
            name: "grafana-k8s",
          },
          {
            display_name: "LXD",
            name: "lxd",
          },
        ],
        description:
          "Privacy-oriented voice, video, chat, and conference platform and SIP phone",
        display_name: "Jami",
        icon_url:
          "https://dashboard.snapcraft.io/site_media/appmedia/2020/11/jami-512.png",
        name: "jami",
        platforms: ["vm", "kubernetes"],
        channel: {
          name: "stable",
          risk: "stable",
          track: "latest",
        },
      },
      publisher: {
        display_name: "Savoir-faire Linux",
        name: "sfljami",
        validation: "star",
      },
      ratings: {
        value: 4,
        count: 50,
      },
    },
  };

  it("doesn't show icon if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("package-icon")).not.toBeInTheDocument();
  });

  it("shows icon if enabled", () => {
    render(<PackageCard {...props} showIcon={true} />);
    expect(screen.getByTestId("package-icon")).toBeInTheDocument();
  });

  it("doesn't show bundle header if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByText("Bundle")).not.toBeInTheDocument();
  });

  it("shows bundle header if enabled", () => {
    render(<PackageCard {...props} isBundle={true} />);
    expect(screen.getByText("Bundle")).toBeInTheDocument();
  });

  it("doesn't show featured packages if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("featured-charms")).not.toBeInTheDocument();
  });

  it("shows featured packages if enabled", () => {
    render(<PackageCard {...props} showFeaturedPackages={true} />);
    expect(screen.getByTestId("featured-packages")).toBeInTheDocument();
  });

  it("doesn't show libraries if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByText("Libraries")).not.toBeInTheDocument();
  });

  it("shows libraries when showPlatforms is enabled", () => {
    render(
      <PackageCard {...props} showPlatforms={true} showLibraries={true} />
    );
    expect(screen.getByText("Libraries")).toBeInTheDocument();
  });

  it("doesn't show platforms if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByAltText("Machine")).not.toBeInTheDocument();
  });

  it("shows platforms if enabled", () => {
    render(<PackageCard {...props} showPlatforms={true} />);
    expect(screen.getByAltText("Machine")).toBeInTheDocument();
  });

  it("doesn't show ratings if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("ratings")).not.toBeInTheDocument();
  });

  it("shows ratings if enabled", () => {
    render(<PackageCard {...props} showRatings={true} />);
    expect(screen.getByTestId("ratings")).toBeInTheDocument();
  });

  it("doesn't show verification if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByAltText("Star developer")).not.toBeInTheDocument();
  });

  it("shows verfication if enabled", () => {
    render(<PackageCard {...props} showVerification={true} />);
    expect(screen.getByAltText("Star developer")).toBeInTheDocument();
  });

  it("doesn't show channel if not enabled", () => {
    render(<PackageCard {...props} />);
    expect(screen.queryByTestId("package-channel")).not.toBeInTheDocument();
  });

  it("shows channel if enabled", () => {
    render(<PackageCard {...props} showChannel={true} />);
    expect(screen.getByTestId("package-channel")).toBeInTheDocument();
  });
});
