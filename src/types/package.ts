const PackageType = ["snap", "charm", "bundle", "interface"];
const ValidationType = ["star", "verified", undefined];

export type Package = {
  package: {
    description: string;
    display_name: string;
    icon_url?: string;
    name: string;
    platforms?: Array<string> | null;
    type: typeof PackageType[number];
    charms?: Array<{
      name: string;
      display_name: string;
    }>;
  };
  publisher?: {
    display_name?: string;
    name?: string;
    validation?: typeof ValidationType[number];
  };
  categories?: Array<{
    display_name: string;
    name: string;
  }>;
};
