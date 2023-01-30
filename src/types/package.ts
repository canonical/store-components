export type Package = {
  package: {
    description: string;
    display_name: string;
    icon_url: string;
    name: string;
    platforms?: Array<string> | null;
    type: "snap" | "charm" | "bundle";
  };
  publisher: {
    display_name: string;
    name: string;
    validation?: "star" | "verified" | null;
  };
  categories: [
    {
      display_name: string;
      name: string;
    }
  ];
};
