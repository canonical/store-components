export type Package = {
  package: {
    description?: string;
    display_name?: string;
    icon_url?: string;
    name?: string;
    platforms?: Array<string> | null;
    type?: "snap" | "charm" | "bundle" | "interface";
    charms?: Array<{
      name?: string;
      display_name?: string;
    }> | null;
  };
  publisher: {
    display_name?: string;
    name?: string;
    validation?: "star" | "verified" | null;
  };
  categories: Array<{
    display_name?: string;
    name?: string;
  }>;
};
