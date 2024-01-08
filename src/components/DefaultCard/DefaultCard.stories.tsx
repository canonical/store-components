import type { Meta } from "@storybook/react";

import DefaultCard from "./DefaultCard";

const meta: Meta<typeof DefaultCard> = {
  title: "DefaultCard",
  component: DefaultCard,
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

export const NoHeading = {
  args: {
    data: {
      ...Default.args.data,
      package: {
        ...Default.args.data.package,
        display_name: "",
        name: "",
      },
    },
  },
};

export const LongDescription = {
  args: {
    data: {
      ...Default.args.data,
      package: {
        ...Default.args.data.package,
        description:
          "Privacy-oriented voice, video, chat, and conference platform and SIP phone. Privacy-oriented voice, video, chat, and conference platform and SIP phone. Privacy-oriented voice, video, chat, and conference platform and SIP phone. Privacy-oriented voice, video, chat, and conference platform and SIP phone. Privacy-oriented voice, video, chat, and conference platform and SIP phone. Privacy-oriented voice, video, chat, and conference platform and SIP phone",
      },
    },
  },
};

export const NoPublisher = {
  args: {
    data: {
      ...Default.args.data,
      package: {
        ...Default.args.data.package,
      },
      publisher: null,
    },
  },
};

export const Featured = {
  args: {
    data: {
      ...Default.args.data,
      package: {
        ...Default.args.data.package,
      },
      publisher: null,
      categories: [
        { name: "books-and-reference", featured: true },
        { name: "development", featured: false },
        { name: "featured", featured: true },
      ],
    },
  },
};

export const MissingIconUrl = {
  args: {
    data: {
      ...Default.args.data,
      package: {
        ...Default.args.data.package,
        icon_url: null,
      },
      publisher: null,
      categories: [
        { name: "books-and-reference", featured: true },
        { name: "development", featured: false },
        { name: "featured", featured: true },
      ],
    },
  },
};
