export type Package = {
  package: {
    description: string;
    display_name: string;
    // added optional downloads in case we can get this data from the API in the future
    downloads?: number;
    icon_url?: string;
    last_updated?: string;
    name: string;
    platforms?: Array<string> | null;
    summary?: string;
    type?: string;
    charms?: Array<{
      name: string;
      display_name: string;
    }>;
    channel?: {
      name: string;
      risk: string;
      track: string;
    };
  };
  publisher?: {
    display_name: string;
    name: string;
    validation?: string;
  };
  categories?: Array<{
    display_name: string;
    name: string;
    featured?: boolean;
  }>;
  ratings?: {
    value: number | null;
    count: number | null;
  };
};
