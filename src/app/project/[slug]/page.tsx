import { projects, getProjectBySlug } from "@/lib/projects";
import SequenceRenderer from "@/components/SequenceRenderer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projet non trouvé" };
  }
  return {
    title: `${project.title} — KARTj`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Project Header */}
      <div className="relative z-10 px-6 pt-48 pb-32 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extralight tracking-widest mb-6">
          {project.title}
        </h1>
        {project.description && project.description !== "Coming soon" && (
          <p className="text-sm text-gray-500 tracking-wider max-w-md mx-auto leading-relaxed">
            {project.description}
          </p>
        )}
        {project.description === "Coming soon" && (
          <p className="text-sm text-gray-600 tracking-widest uppercase">
            Coming soon
          </p>
        )}
        {project.year && (
          <p className="text-[10px] text-gray-700 mt-4 tracking-widest">{project.year}</p>
        )}
      </div>

      {/* Image Sequence */}
      <SequenceRenderer blocks={project.blocks} />
    </main>
  );
}
