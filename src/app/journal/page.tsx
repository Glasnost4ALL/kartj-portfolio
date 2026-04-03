import Link from "next/link";
import { getProjectsByCategory } from "@/lib/projects";
import Image from "next/image";

export default function JournalPage() {
  const journalProjects = getProjectsByCategory("journal");

  return (
    <main className="min-h-screen pt-32 px-6 pb-32 max-w-5xl mx-auto">
      <h1 className="text-5xl font-extralight tracking-widest mb-24">
        Journal
      </h1>

      <div className="flex flex-col gap-24">
        {journalProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="block group"
          >
            <div className="relative aspect-[3/2] mb-6 overflow-hidden">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h2 className="text-sm tracking-widest uppercase">{project.title}</h2>
              <span className="text-xs text-gray-600 tracking-widest">{project.year}</span>
            </div>
            {project.description && (
              <p className="text-xs text-gray-600 mt-2 tracking-wider">
                {project.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
