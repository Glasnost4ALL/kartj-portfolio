export interface ProjectBlock {
  type: "image" | "full" | "text";
  src?: string;
  content?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "journal" | "work";
  cover: string;
  year?: string;
  description?: string;
  blocks: ProjectBlock[];
}

export const projects: Project[] = [
  {
    slug: "negative-space",
    title: "Negative Space",
    category: "journal",
    cover: "/images/img-01.png",
    year: "2024",
    description: "Black & White",
    blocks: [
      { type: "full", src: "/images/img-01.png" },
      { type: "image", src: "/images/img-02.png" },
      { type: "full", src: "/images/img-03.png" },
      { type: "image", src: "/images/img-12.png" },
      { type: "full", src: "/images/img-14.png" },
      { type: "image", src: "/images/img-17.png" },
    ],
  },
  {
    slug: "the-weaver",
    title: "The Weaver",
    category: "work",
    cover: "/images/img-07.png",
    year: "2024",
    description: "Spider",
    blocks: [
      { type: "full", src: "/images/img-04.png" },
      { type: "image", src: "/images/img-06.png" },
      { type: "full", src: "/images/img-07.png" },
      { type: "image", src: "/images/img-08.png" },
      { type: "full", src: "/images/img-09.png" },
    ],
  },
  {
    slug: "microcosm",
    title: "Microcosm",
    category: "journal",
    cover: "/images/img-20.png",
    year: "2024",
    description: "Macro",
    blocks: [
      { type: "full", src: "/images/img-10.png" },
      { type: "image", src: "/images/img-05.png" },
      { type: "full", src: "/images/img-15.png" },
      { type: "image", src: "/images/img-16.png" },
      { type: "full", src: "/images/img-19.png" },
      { type: "image", src: "/images/img-20.png" },
      { type: "full", src: "/images/img-21.png" },
      { type: "image", src: "/images/img-22.png" },
      { type: "full", src: "/images/img-23.png" },
    ],
  },
  {
    slug: "tba",
    title: "TBA",
    category: "journal",
    cover: "/images/img-13.png",
    year: "2023",
    description: "Coming soon",
    blocks: [
      { type: "full", src: "/images/img-13.png" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: "journal" | "work"
): Project[] {
  return projects.filter((p) => p.category === category);
}
