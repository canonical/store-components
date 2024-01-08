import type { Meta } from "@storybook/react";

import TopicCard from "./TopicCard";

const meta: Meta<typeof TopicCard> = {
  title: "TopicCard",
  component: TopicCard,
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
      description:
        "At Canonical, we have been referring to LMA as a system of machine charms currently in use to monitor Canonical and customer systems. COS draws a lot of learning from years of operational experience with LMA, but it is also different enough that we felt we needed to make a distinction from the previous iteration.",
      name: "Canonical Observability Stack",
      slug: "canonical-observability-stack",
    },
  },
};

export const TruncateTitle = {
  args: {
    truncateTitle: true,
    data: {
      description:
        "At Canonical, we have been referring to LMA as a system of machine charms currently in use to monitor Canonical and customer systems. COS draws a lot of learning from years of operational experience with LMA, but it is also different enough that we felt we needed to make a distinction from the previous iteration.",
      name: "Canonical Observability Stack: Reimagining observability with MicroK8s and Grafana, Prometheus and Grafana Loki",
      slug: "canonical-observability-stack",
    },
  },
};

export const TruncateContent = {
  args: {
    truncateContent: true,
    data: {
      description:
        "At Canonical, we have been referring to LMA as a system of machine charms currently in use to monitor Canonical and customer systems. COS draws a lot of learning from years of operational experience with LMA, but it is also different enough that we felt we needed to make a distinction from the previous iteration. At Canonical, we have been referring to LMA as a system of machine charms currently in use to monitor Canonical and customer systems. COS draws a lot of learning from years of operational experience with LMA, but it is also different enough that we felt we needed to make a distinction from the previous iteration.",
      name: "Canonical Observability Stack",
      slug: "canonical-observability-stack",
    },
  },
};
