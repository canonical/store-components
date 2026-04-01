import { DocsContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import "./vanilla.scss";

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.vanillaish,
    container: ({ children, context }) => (
      <DocsContainer context={context}>{children}</DocsContainer>
    ),
  },
};
