const packages = [
  {
    package: {
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      display_name: "GNU Image Manipulation Program",
      icon_url:
        "https://dashboard.snapcraft.io/site_media/appmedia/2017/07/gimp.png",
      name: "gimp",
      platforms: ["kubernetes"],
      type: "snap",
    },
    publisher: {
      display_name: "John Doe",
      name: "johndoe",
      validation: "verified",
    },
    categories: [
      {
        display_name: "Containers",
        name: "containers",
      },
      {
        display_name: "Networking",
        name: "networking",
      },
    ],
  },
  {
    package: {
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      display_name: "OBS Studio",
      icon_url:
        "https://dashboard.snapcraft.io/site_media/appmedia/2018/02/obs-studio.png",
      name: "obs-studio",
      platforms: ["vm"],
      type: "snap",
    },
    publisher: {
      display_name: "John Doe",
      name: "johndoe",
      validation: "star",
    },
    categories: [
      {
        display_name: "Big data",
        name: "bigdata",
      },
      {
        display_name: "Networking",
        name: "networking",
      },
    ],
  },
  {
    package: {
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      display_name: "fkill",
      icon_url:
        "https://dashboard.snapcraft.io/site_media/appmedia/2017/12/logo.svg.png",
      name: "fkill",
      platforms: null,
      type: "charm",
    },
    publisher: {
      display_name: "John Doe",
      name: "johndoe",
      validation: null,
    },
    categories: [
      {
        display_name: "Big data",
        name: "bigdata",
      },
      {
        display_name: "Containers",
        name: "containers",
      },
    ],
  },
  {
    package: {
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      display_name: "The Climate Trail",
      icon_url:
        "https://dashboard.snapcraft.io/site_media/appmedia/2019/09/icon_zWsf712.png",
      name: "climate-trail",
      platforms: null,
      type: "bundle",
    },
    publisher: {
      display_name: "John Doe",
      name: "johndoe",
      validation: "verified",
    },
    categories: [
      {
        display_name: "Big data",
        name: "bigdata",
      },
      {
        display_name: "Containers",
        name: "containers",
      },
      {
        display_name: "Networking",
        name: "networking",
      },
    ],
  },
];

export default packages;
