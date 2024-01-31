export const projects = [
  {
    id: "green-harmony",
    title: "Green Harmony",
    subtitle: "A Sustainable Lifestyle",
    description: `"Green Harmony" captures the tranquility of eco-friendly living in a modern setting.
         The cover photo depicts a minimalist living room integrated with nature, highlighting sustainability.
         Accompanying images focus on recycling, green transportation, renewable energy, and eco-conscious household practices.
         This project aims to inspire and promote a greener, more sustainable lifestyle.`,
    cover: "/green-harmony/cover.png",
    images: ["/green-harmony/1.png", "/green-harmony/2.png"],
  },
  {
    id: "urban-oasis",
    title: "Urban Oasis",
    subtitle: "Revitalizing City Spaces",
    description: `"Urban Oasis" envisions the transformation of city spaces into green, vibrant areas.
         It highlights innovative urban gardening, sustainable architecture, and public spaces enriched with nature.
         This project is a visual journey through rejuvenated cityscapes, aiming to inspire urban environmentalism.
        `,
    cover: "/urban-oasis/cover.png",
    images: ["/urban-oasis/1.png", "/urban-oasis/2.png"],
  },
  {
    id: "digital-canvas",
    title: "Digital Canvas",
    subtitle: "A Visual Exploration of Web Design",
    description: `"Digital Canvas" explores the aesthetics of web design.
         It focuses on the use of color, typography, and composition to create a unique visual experience.
         This project aims to inspire and promote the use of aesthetics in web design.
        `,
    cover: "/digital-canvas/cover.png",
    images: ["/digital-canvas/1.png", "/digital-canvas/2.png"],
  },
  {
    id: "social-spectrum",
    title: "Social Spectrum",
    subtitle: "A Visual Exploration of Social Media",
    description: `"Social Spectrum" is a visual exploration of social media.
         It highlights the use of color, typography, and composition to create a unique visual experience.
         This project aims to inspire and promote the use of aesthetics in web design.
        `,
    cover: "/social-spectrum/cover.png",
    images: ["/social-spectrum/1.png", "/social-spectrum/2.png"],
  },
  {
    id: "culinary-delights",
    title: "Culinary Delights",
    subtitle: "Gourmet Branding, Packaging, and Events",
    description: `"Culinary Delights" dives into the world of gourmet food branding.
         It showcases elegant and appetizing designs for restaurants,
         food products, and culinary events, focusing on mouth-watering visuals and sophisticated branding.`,
    cover: "/culinary-delights/cover.png",
    images: ["/culinary-delights/1.png", "/culinary-delights/2.png"],
  },
  {
    id: "tech-innovation",
    title: "Tech Innovations",
    subtitle: "Futuristic Design Concepts",
    description: `"Tech Innovations" explores futuristic design concepts.
         It showcases innovative designs for smart devices, focusing on minimalism and functionality.
         This project aims to inspire and promote the use of aesthetics in web design.
        `,
    cover: "/tech-innovation/cover.png",
    images: ["/tech-innovation/1.png"],
  },
  {
    id: "web-creations",
    title: "Digital Showcase",
    subtitle: "Web Creation Highlights",
    description: `Digital Showcase" highlights our company's expertise in web development,
        featuring the homepage of a site we've crafted and key snippets that demonstrate our design and functionality skills.`,
    cover: "/web-creations/cover.png",
    images: [
      "/web-creations/1.png",
      "/web-creations/2.png",
      "/web-creations/3.png",
    ],
  },
  {
    id: "vision-play",
    title: "VisionPlay",
    subtitle: "A Video Player Web Design Concept",
    description: `"VisionPlay" is a video player web design concept.
         It showcases a sleek and modern interface, focusing on minimalism and functionality.
         This project aims to inspire and promote the use of aesthetics in web design.
        `,
    cover: "/vision-play/cover.png",
    images: ["/vision-play/1.png", "/vision-play/2.png"],
  },
];

export const projectMap = new Map(
  projects.map((project) => [project.id, project])
);
