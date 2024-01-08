import { DocsContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import { Title, Description, ArgTypes, Stories } from '@storybook/blocks';

import "vanilla-framework/scss/build.scss";

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.vanillaish,
    container: ({ children, context }) => (
      <DocsContainer context={context}>{children}</DocsContainer>
    ),
    page: () => (
      <>
        <Title />
        <Description />
        <ArgTypes sort="alpha" />
        <Stories />
      </>
    ),
  },
};
