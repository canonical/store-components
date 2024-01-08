import type { Meta } from "@storybook/react";

import CharmCard from "./CharmCard";

const meta: Meta<typeof CharmCard> = {
  title: "CharmCard",
  component: CharmCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a [React](https://reactjs.org/) component for a default package card.",
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
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
  },
};
