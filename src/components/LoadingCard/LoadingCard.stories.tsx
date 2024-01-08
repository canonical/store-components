import type { Meta } from "@storybook/react";

import LoadingCard from "./LoadingCard";

const meta: Meta<typeof LoadingCard> = {
  title: "LoadingCard",
  component: LoadingCard,
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

export const Default = {};

export const CustomHeight = {
  args: {
    height: 120,
  },
};
