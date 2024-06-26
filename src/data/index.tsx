export const projects = [
  {
    id: "logo",
    title: "Branding",
    // subtitle: "תפזורת",
    cover: "/cover/branding.webp",
    coverBackground: "bg-white",
    images: [
      "/logo/C.C.E.C-Group-Ltd.png",
      "/logo/Maddy4Moms-Pink-Logo.png",
      "/logo/Mirav-logo-gold-navy.png",
      "/yarden/cover.png",
    ],
  },
  {
    id: "harvest",
    title: "Harvest",
    cover: "/cover/branding.webp",
    coverBackground: "bg-white",
    images: [
      "/branding/Roll-Up.png",
      "/branding/Harvest-business-card.png",
      "/branding/Shirt.png",
    ],
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

type ProjectImage = {
  link?: string;
  img: string;
};

type Category = {
  id: string;
  title: string;
  images: ProjectImage[];
  cover?: string;
};

export const categories: Category[] = [
  {
    id: "branding",
    title: "Branding",
    cover: "/category/branding/stains-brush.jpg",
    images: [
      { img: "/branding/C.C.E.C Group Ltd Flayer.png" },
      { img: "/branding/Shirt.png", link: "/project/harvest" },
      { img: "/branding/Mirav-logo-gold-navy.png" },
      { img: "/branding/Projects Yarden.png" },
      { img: "/branding/C.C.E.C-Group-Ltd.png" },
      { img: "/branding/Querido.png" },
      { img: "/branding/Harvest-business-card.png", link: "/project/harvest" },
      { img: "/branding/Gaming Poster.png" },
      { img: "/branding/Shai Sharon business card.png" },
      { img: "/branding/Yarden consulting.png" },
      { img: "/branding/Roll-Up.png", link: "/project/harvest" },
      { img: "/branding/Business-Development-Inspiration.png" },
      { img: "/branding/Website-Design.png" },
    ],
  },
  {
    id: "presentation",
    title: "Presentation",
    cover: "/category/branding/stains-brush.jpg",
    images: [
      { img: "/branding/C.C.E.C Group Ltd Flayer.png" },
      { img: "/branding/Mirav-logo-gold-navy.png" },
      { img: "/branding/Projects Yarden.png" },
      { img: "/branding/C.C.E.C-Group-Ltd.png" },
      { img: "/branding/Querido.png" },
      { img: "/branding/Gaming Poster.png" },
      { img: "/branding/Shai Sharon business card.png" },
      { img: "/branding/Harvest Business Development.png" },
      { img: "/branding/Yarden consulting.png" },
    ],
  },
];

export const projectMap = new Map(
  projects.map((project) => [project.id, project])
);

export const categoryMap = new Map<string, Category>(
  categories.map((category) => [category.id, category])
);

type Cover = {
  id: string;
  cover: string;
  title: string;
  coverBackground: string;
  link: string;
};

export const covers: Cover[] = [
  {
    id: "branding",
    title: "Branding",
    cover: "/cover/branding.webp",
    coverBackground: "bg-white",
    link: "/category/branding",
  },
  {
    id: "presentation",
    title: "Presentation",
    cover: "/cover/presentation.webp",
    coverBackground: "bg-white",
    link: "/category/presentation",
  },
];
