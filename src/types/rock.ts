export type Rock = {
  package: {
    description: string;
    summary: string;
    display_name: string;
    icon_url?: string;
    name: string;
    platforms?: Array<string> | null;
    type?: string;
    support?: string;
    cves?: number;
    last_updated?: string;
  };
  publisher?: {
    display_name: string;
    name: string;
    validation?: string;
  };
  id?: string;
};
