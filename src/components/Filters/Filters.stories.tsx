import type { Meta } from "@storybook/react";

import Filters from "./Filters";

const meta: Meta<typeof Filters> = {
  title: "Filters",
  component: Filters,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a [React](https://reactjs.org/) component for filters.",
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    categories: [
      {
        display_name: "AI/ML",
        name: "ai-ml",
      },
      {
        display_name: "Big Data",
        name: "big-data",
      },
      {
        display_name: "Cloud",
        name: "cloud",
      },
      {
        display_name: "Containers",
        name: "containers",
      },
      {
        display_name: "Databases",
        name: "databases",
      },
      {
        display_name: "Logging and Tracing",
        name: "logging-and-tracing",
      },
      {
        display_name: "Monitoring",
        name: "monitoring",
      },
      {
        display_name: "Networking",
        name: "networking",
      },
      {
        display_name: "Security",
        name: "security",
      },
      {
        display_name: "Storage",
        name: "storage",
      },
    ],
    selectedCategories: [],
    setSelectedCategories: () => false,
    platforms: [
      { display_name: "All", name: "all" },
      { display_name: "VM", name: "vm" },
      { display_name: "Kubernetes", name: "kubernetes" },
    ],
    selectedPlatform: "",
    setSelectedPlatform: () => false,
    packageTypes: [
      { display_name: "All", name: "all" },
      { display_name: "Charm", name: "charm" },
      { display_name: "Bundle", name: "bundle" },
    ],
    selectedPackageType: "",
    setSelectedPackageType: () => false,
    disabled: false,
  },
};

export const NoPlatformsDropdown = {
  args: {
    ...Default.args,
    platforms: null,
  },
};

export const NoFilterDropdown = {
  args: {
    ...Default.args,
    packageTypes: null,
  },
};

export const NoDropdowns = {
  args: {
    ...Default.args,
    platforms: null,
    packageTypes: null,
  },
};

export const WithFeaturedCategory = {
  args: {
    ...NoDropdowns.args,
    selectedCategories: ["featured"],
    setSelectedCategories: () => false,
    showFeatured: true,
  },
};

export const WithOrdering = {
  args: {
    categories: [
      {
        display_name: "Art and Design",
        name: "art-and-design",
      },
      {
        display_name: "Books and Reference",
        name: "books-and-reference",
      },
      {
        display_name: "Development",
        name: "development",
      },
      {
        display_name: "Devices and IoT",
        name: "devices-and-iot",
      },
      {
        display_name: "Education",
        name: "education",
      },
      {
        display_name: "Entertainment",
        name: "entertainment",
      },
      {
        display_name: "Finance",
        name: "finance",
      },
      {
        display_name: "Games",
        name: "games",
      },
      {
        display_name: "Health and Fitness",
        name: "health-and-fitness",
      },
      {
        display_name: "Music and Audio",
        name: "music-and-audio",
      },
      {
        display_name: "News and Weather",
        name: "news-and-weather",
      },
      {
        display_name: "Personalisation",
        name: "personalisation",
      },
      {
        display_name: "Photo and Video",
        name: "photo-and-video",
      },
      {
        display_name: "Productivity",
        name: "productivity",
      },
      {
        display_name: "Science",
        name: "science",
      },
      {
        display_name: "Security",
        name: "security",
      },
      {
        display_name: "Server and Cloud",
        name: "server-and-cloud",
      },
      {
        display_name: "Social",
        name: "social",
      },
      {
        display_name: "Utilities",
        name: "utilities",
      },
    ],
    selectedCategories: [],
    setSelectedCategories: () => false,
    disabled: false,
    showFeatured: true,
    order: [
      "development",
      "games",
      "social",
      "productivity",
      "utilities",
      "music-and-audio",
      "art-and-design",
      "photo-and-video",
      "server-and-cloud",
    ],
  },
};

export const WithShowMore = {
  args: {
    showMore: true,
    showMoreCount: 10,
    categories: [
      { display_name: "Development", name: "development" },
      { display_name: "Games", name: "games" },
      { display_name: "Social", name: "social" },
      { display_name: "Productivity", name: "productivity" },
      { display_name: "Utilities", name: "utilities" },
      { display_name: "Music and Audio", name: "music-and-audio" },
      { display_name: "Art and Design", name: "art-and-design" },
      { display_name: "Photo and Video", name: "photo-and-video" },
      { display_name: "Server and Cloud", name: "server-and-cloud" },
      { display_name: "Books and Reference", name: "books-and-reference" },
      { display_name: "Devices and IoT", name: "devices-and-iot" },
      { display_name: "Education", name: "education" },
      { display_name: "Entertainment", name: "entertainment" },
      { display_name: "Finance", name: "finance" },
      { display_name: "Health and Fitness", name: "health-and-fitness" },
      { display_name: "News and Weather", name: "news-and-weather" },
      { display_name: "Personalisation", name: "personalisation" },
      { display_name: "Science", name: "science" },
      { display_name: "Security", name: "security" },
    ],
  },
};

export const WithArchitectures = {
  args: {
    categories: [
      {
        display_name: "AI/ML",
        name: "ai-ml",
      },
      {
        display_name: "Big Data",
        name: "big-data",
      },
      {
        display_name: "Cloud",
        name: "cloud",
      },
      {
        display_name: "Containers",
        name: "containers",
      },
      {
        display_name: "Databases",
        name: "databases",
      },
      {
        display_name: "Logging and Tracing",
        name: "logging-and-tracing",
      },
      {
        display_name: "Monitoring",
        name: "monitoring",
      },
      {
        display_name: "Networking",
        name: "networking",
      },
      {
        display_name: "Security",
        name: "security",
      },
      {
        display_name: "Storage",
        name: "storage",
      },
    ],
    selectedCategories: [],
    setSelectedCategories: () => false,
    architectures: [
      { name: "all", display_name: "All" },
      { name: "amd64", display_name: "AMD64" },
      { name: "arm64", display_name: "ARM64" },
    ],
    selectedArchitecture: "",
    setSelectedArchitecture: () => false,
    disabled: false,
  },
};
