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
    slug: "threshold",
    title: "Threshold",
    category: "journal",
    cover: "/images/img-08.png",
    year: "2024",
    description: "What happens before the frame changes",
    blocks: [
      { type: "full", src: "/images/img-01.png" },
      { type: "image", src: "/images/img-02.png" },
      { type: "full", src: "/images/img-03.png" },
      { type: "image", src: "/images/img-04.png" },
      { type: "full", src: "/images/img-05.png" },
      { type: "image", src: "/images/img-06.png" },
      { type: "full", src: "/images/img-07.png" },
      { type: "image", src: "/images/img-08.png" },
      { type: "full", src: "/images/img-09.png" },
      { type: "image", src: "/images/img-10.png" },
      { type: "full", src: "/images/img-11.png" },
      { type: "image", src: "/images/img-12.png" },
      { type: "full", src: "/images/img-13.png" },
      { type: "image", src: "/images/img-14.png" },
      { type: "full", src: "/images/img-15.png" },
    ],
  },
  {
    slug: "the-color-of-everything",
    title: "The Color of Everything",
    category: "work",
    cover: "/images/img-06.png",
    year: "2024",
    description: "Coming soon",
    blocks: [
      { type: "full", src: "/images/img-01.png" },
      { type: "full", src: "/images/img-02.png" },
    ],
  },
  {
    slug: "no-summit",
    title: "No Summit",
    category: "journal",
    cover: "/images/img-13.png",
    year: "2023",
    description: "Coming soon",
    blocks: [
      { type: "full", src: "/images/img-01.png" },
      { type: "full", src: "/images/img-02.png" },
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
